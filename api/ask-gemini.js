// ============================================
// api/ask-gemini.js — Vercel Serverless Function
// يخفي مفتاح Gemini عن المستخدمين
// ============================================

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { question, lang, context } = req.body;

    if (!question || typeof question !== 'string' || question.length < 3) {
      return res.status(400).json({ error: 'Question invalide' });
    }
    if (question.length > 1000) {
      return res.status(400).json({ error: 'Question trop longue (max 1000)' });
    }

    const language = lang || 'fr';
    const guideContext = context || '';

    // المفتاح من متغيرات البيئة (مخفي)
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error('Missing GEMINI_API_KEY');
      return res.status(500).json({ error: 'Configuration serveur manquante' });
    }

    // تعليمات النظام
    const systemInstruction = `Tu es un assistant pour les étudiants de l'ENSTP (École Nationale Supérieure des Travaux Publics) à Alger, Algérie.

RÈGLES:
1. Réponds TOUJOURS en ${language === 'ar' ? 'arabe' : language === 'en' ? 'anglais' : 'français'}.
2. Utilise EN PRIORITÉ les informations du guide fournies.
3. Si l'info n'est pas dans le guide, dis-le honnêtement.
4. Sois concis, pratique et amical.
5. Utilise des emojis quand c'est pertinent.

${guideContext ? 'Informations du guide:\n\n' + guideContext : 'Aucune information spécifique trouvée.'}

Réponds maintenant à la question.`;

    const model = 'gemini-1.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const body = {
      contents: [
        {
          role: 'user',
          parts: [{ text: systemInstruction + '\n\n=== QUESTION ===\n' + question }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 800
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
      ]
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API error:', errorData);

      if (response.status === 429) {
        return res.status(429).json({ error: 'Trop de requêtes. Attendez un instant.' });
      }
      return res.status(500).json({ error: 'Erreur de l\'IA. Réessayez.' });
    }

    const data = await response.json();
    let answer = '';

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const parts = data.candidates[0].content.parts || [];
      answer = parts.map(p => p.text || '').join('');
    }

    if (!answer) {
      return res.status(500).json({ error: 'Réponse vide de l\'IA.' });
    }

    return res.status(200).json({ answer: answer.trim() });
  } catch (err) {
    console.error('Function error:', err);
    return res.status(500).json({ error: 'Erreur serveur. Réessayez.' });
  }
}
