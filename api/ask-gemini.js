// ============================================
// api/ask-gemini.js — Vercel Serverless Function
// يخفي مفتاح Gemini + rate limiting + timeout
// ============================================

const MODEL = 'gemini-2.0-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// ============================================
// Rate limiting (in-memory, best-effort)
// للحل الجاهز: Upstash Redis
// ============================================
const ipHits = new Map();
const RATE_LIMIT = 20;              // 20 طلب
const RATE_WINDOW_MS = 60 * 60 * 1000; // في الساعة

function getClientIp(req) {
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string') return xff.split(',')[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  let entry = ipHits.get(ip);
  if (!entry || now > entry.reset) {
    entry = { count: 0, reset: now + RATE_WINDOW_MS };
  }
  entry.count++;
  ipHits.set(ip, entry);

  // تنظيف دوري
  if (ipHits.size > 5000) {
    for (const [k, v] of ipHits) {
      if (now > v.reset) ipHits.delete(k);
    }
  }

  return entry.count > RATE_LIMIT;
}

// ============================================
// المعالج
// ============================================
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limit
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Trop de requêtes. Réessayez dans une heure.' });
  }

  try {
    // تحليل body بأمان
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'JSON invalide' });
      }
    }
    body = body || {};

    const { question, lang, context } = body;

    // التحقق من المدخلات
    if (!question || typeof question !== 'string' || question.trim().length < 3) {
      return res.status(400).json({ error: 'Question invalide (min 3 caractères)' });
    }
    if (question.length > 1000) {
      return res.status(400).json({ error: 'Question trop longue (max 1000)' });
    }
    if (typeof context === 'string' && context.length > 50000) {
      return res.status(400).json({ error: 'Contexte trop long (max 50000)' });
    }

    const language = ['ar', 'en', 'fr'].includes(lang) ? lang : 'fr';
    const guideContext = (typeof context === 'string' ? context : '').trim();

    // المفتاح من متغيرات البيئة
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('[ask-gemini] Missing GEMINI_API_KEY');
      return res.status(500).json({ error: 'Configuration serveur manquante' });
    }

    // تعليمات النظام
    const langName = language === 'ar' ? 'arabe' : language === 'en' ? 'anglais' : 'français';
    const systemInstruction = `Tu es un assistant pour les étudiants de l'ENSTP (École Nationale Supérieure des Travaux Publics) à Alger, Algérie.

RÈGLES STRICTES:
1. Réponds dans la même langue que la question. Si ambigu, réponds en ${langName}.
2. Utilise EN PRIORITÉ les informations du guide fournies ci-dessous.
3. Si l'information n'est pas dans le guide, dis-le honnêtement et suggère de consulter l'administration.
4. N'invente JAMAIS d'informations (horaires, adresses, noms, procédures).
5. Sois concis (max 4 phrases), pratique et amical.
6. Utilise des emojis quand c'est pertinent.

${guideContext ? 'INFORMATIONS DU GUIDE:\n\n' + guideContext : 'Aucune information spécifique trouvée dans le guide.'}

Réponds maintenant à la question.`;

    // طلب Gemini مع مهلة
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    let response;
    try {
      response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: systemInstruction + '\n\n=== QUESTION ===\n' + question.trim() }]
            }
          ],
          generationConfig: {
            temperature: 0.3,
            topK: 20,
            topP: 0.8,
            maxOutputTokens: 500
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
          ]
        })
      });
    } catch (fetchErr) {
      if (fetchErr.name === 'AbortError') {
        return res.status(504).json({ error: 'L\'IA met trop de temps. Réessayez.' });
      }
      throw fetchErr;
    } finally {
      clearTimeout(timeout);
    }

    // معالجة الأخطاء
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[ask-gemini] Gemini error:', response.status, errorData);

      if (response.status === 429) {
        return res.status(429).json({ error: 'Trop de requêtes. Attendez un instant.' });
      }
      if (response.status === 400 || response.status === 403) {
        return res.status(500).json({ error: 'Erreur de configuration serveur.' });
      }
      return res.status(500).json({ error: 'Erreur de l\'IA. Réessayez.' });
    }

    // استخراج الإجابة
    const data = await response.json();
    const parts = data.candidates?.[0]?.content?.parts || [];
    const answer = parts.map(p => p.text || '').join('').trim();

    if (!answer) {
      return res.status(500).json({ error: 'Réponse vide de l\'IA.' });
    }

    return res.status(200).json({ answer });
  } catch (err) {
    console.error('[ask-gemini] Unexpected error:', err);
    return res.status(500).json({ error: 'Erreur serveur. Réessayez.' });
  }
}
