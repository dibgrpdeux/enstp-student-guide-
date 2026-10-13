// ============================================
// ai-search.js — البحث بالذكاء الاصطناعي
// Guide de survie ENSTP
// Powered by Google Gemini
// ============================================

// ⚠️ ضع مفتاح Gemini هنا
const GEMINI_API_KEY = 'AQ.Ab8RN6LbEF26WGPXsddXUtP0Yfn94FNDiBAONIMuUki1swa_HQ ';

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// الحد اليومي (1500)
const DAILY_LIMIT = 1500;

// ============================================
// تتبع الاستخدام
// ============================================
function getUsageToday() {
  const today = new Date().toDateString();
  const stored = localStorage.getItem('gemini_usage');
  if (!stored) return { date: today, count: 0 };
  
  try {
    const data = JSON.parse(stored);
    if (data.date !== today) return { date: today, count: 0 };
    return data;
  } catch(e) {
    return { date: today, count: 0 };
  }
}

function incrementUsage() {
  const data = getUsageToday();
  data.count++;
  localStorage.setItem('gemini_usage', JSON.stringify(data));
  return data.count;
}

function canUseAI() {
  const usage = getUsageToday();
  return usage.count < DAILY_LIMIT;
}

function getRemainingQuota() {
  const usage = getUsageToday();
  return Math.max(0, DAILY_LIMIT - usage.count);
}

// ============================================
// جمع السياق من الموقع
// ============================================
function buildSiteContext() {
  let context = '';
  
  if (typeof window.SECTIONS === 'undefined') return context;
  
  window.SECTIONS.forEach(s => {
    const title = (typeof window.t === 'function') ? window.t(s.titleKey, 'fr') : s.titleKey;
    context += `\n• ${s.icon} ${title} (id: ${s.id})`;
    
    if (s.items) {
      s.items.forEach(item => {
        const itemTitle = (typeof item.title === 'object') ? item.title.fr : 
                          ((typeof window.t === 'function') ? window.t(item.titleKey, 'fr') : item.titleKey);
        context += `\n  - ${itemTitle}`;
      });
    }
    
    if (s.categories) {
      s.categories.forEach(cat => {
        const catTitle = cat.title || cat.titleKey;
        context += `\n  → ${catTitle}`;
      });
    }
  });
  
  return context;
}

// ============================================
// السؤال Gemini
// ============================================
async function askGemini(question, lang = 'fr') {
  if (!GEMINI_API_KEY || GEMINI_API_KEY.includes('ضع_')) {
    throw new Error('API key non configurée');
  }
  
  if (!canUseAI()) {
    throw new Error('Limite quotidienne atteinte (' + DAILY_LIMIT + ' requêtes). Réessayez demain.');
  }
  
  const siteContext = buildSiteContext();
  
  const langInstructions = {
    fr: 'Réponds en français.',
    ar: 'أجب بالعربية.',
    en: 'Answer in English.'
  };
  
  const systemPrompt = `Tu es un assistant pour les étudiants de l'ENSTP (École Nationale Supérieure des Travaux Publics) à Alger.

Voici les sections du guide ENSTP :
${siteContext}

Instructions :
- Réponds de manière claire et concise (max 4 phrases).
- Utilise les informations du guide ci-dessus quand c'est possible.
- Si tu ne sais pas, dis "Je ne sais pas, consulte l'administration."
- Ne jamais inventer d'informations.
- ${langInstructions[lang] || langInstructions.fr}`;
  
  const response = await fetch(GEMINI_URL + '?key=' + GEMINI_API_KEY, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: systemPrompt + '\n\nQuestion : ' + question
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 300,
        topP: 0.9,
        topK: 40
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
      ]
    })
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error?.message || 'Erreur API (' + response.status + ')');
  }
  
  const data = await response.json();
  const answer = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!answer) {
    throw new Error('Pas de réponse');
  }
  
  incrementUsage();
  return answer.trim();
}

// ============================================
// تصدير
// ============================================
if (typeof window !== 'undefined') {
  window.askGemini = askGemini;
  window.canUseAI = canUseAI;
  window.getRemainingQuota = getRemainingQuota;
  window.GEMINI_API_KEY = GEMINI_API_KEY;
}
