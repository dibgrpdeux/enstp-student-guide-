// ============================================
// ai-search.js — البحث بالذكاء الاصطناعي
// Guide de survie ENSTP
// Version 3.0 — SECURE (Clé stockée localement)
// ============================================

// ⚠️ المفتاح يُقرأ من localStorage ولا يُخزَّن في الكود
let GEMINI_API_KEY = localStorage.getItem('gemini_api_key') || '';

const GEMINI_MODEL = 'gemini-1.5-flash';
const DAILY_LIMIT = 50;

// ============================================
// إدارة المفتاح
// ============================================
function setGeminiKey(key) {
  if (!key || !key.startsWith('AIza')) {
    throw new Error('Clé API invalide (doit commencer par AIza)');
  }
  GEMINI_API_KEY = key.trim();
  localStorage.setItem('gemini_api_key', GEMINI_API_KEY);
}

function getGeminiKey() {
  return GEMINI_API_KEY || localStorage.getItem('gemini_api_key') || '';
}

function hasGeminiKey() {
  return getGeminiKey().length > 0;
}

function clearGeminiKey() {
  GEMINI_API_KEY = '';
  localStorage.removeItem('gemini_api_key');
}

// ============================================
// إدارة الحصة اليومية
// ============================================
function getTodayKey() {
  const d = new Date();
  return `aiQuota_${d.getFullYear()}_${d.getMonth()}_${d.getDate()}`;
}

function getRemainingQuota() {
  const key = getTodayKey();
  const used = parseInt(localStorage.getItem(key) || '0', 10);
  return Math.max(0, DAILY_LIMIT - used);
}

function incrementQuota() {
  const key = getTodayKey();
  const used = parseInt(localStorage.getItem(key) || '0', 10);
  localStorage.setItem(key, String(used + 1));
}

// ============================================
// بناء سياق الدليل
// ============================================
function buildGuideContext(query) {
  if (typeof window.smartSearch !== 'function' || !window.SECTIONS) return '';
  
  const lang = localStorage.getItem('lang') || 'fr';
  const results = window.smartSearch(query, window.SECTIONS);
  if (results.length === 0) return '';
  
  let context = '=== EXTRAITS DU GUIDE ENSTP ===\n\n';
  results.slice(0, 8).forEach((r, i) => {
    const item = r.item;
    const section = r.section;
    
    const sectionTitle = typeof window.t === 'function' 
      ? window.t(section.titleKey, lang) 
      : section.titleKey;
    
    let itemTitle = '';
    if (item.titleKey && typeof window.t === 'function') {
      itemTitle = window.t(item.titleKey, lang);
    } else if (typeof item.title === 'object') {
      itemTitle = item.title[lang] || item.title.fr || '';
    } else if (item.title) {
      itemTitle = item.title;
    } else if (item.n) {
      itemTitle = item.n;
    }
    
    let itemDesc = '';
    if (item.descKey && typeof window.t === 'function') {
      itemDesc = window.t(item.descKey, lang);
    } else if (typeof item.desc === 'object') {
      itemDesc = item.desc[lang] || item.desc.fr || '';
    } else if (item.desc) {
      itemDesc = item.desc;
    } else if (item.note) {
      itemDesc = item.note;
    }
    
    context += `[${i + 1}] Section: ${sectionTitle}\n`;
    context += `    Titre: ${itemTitle}\n`;
    if (itemDesc) context += `    Description: ${itemDesc}\n`;
    if (item.location) context += `    Lieu: ${item.location}\n`;
    if (item.hours) context += `    Horaires: ${item.hours}\n`;
    if (item.t) context += `    Téléphone: ${item.t}\n`;
    if (item.services) context += `    Services: ${item.services}\n`;
    if (item.link) context += `    Lien: ${item.link}\n`;
    context += '\n';
  });
  
  return context;
}

// ============================================
// اقتراحات الأسئلة
// ============================================
const SUGGESTIONS = {
  fr: [
    "Où puis-je manger pas cher près de l'école ?",
    "Comment s'inscrire à la bibliothèque ?",
    "Comment obtenir mon affiliation CNAS ?",
    "Quels bus pour aller au centre-ville ?",
    "Comment justifier une absence ?"
  ],
  ar: [
    "أين آكل رخيص قرب المدرسة؟",
    "كيف أسجل في المكتبة؟",
    "كيف أحصل على الانتساب لـ CNAS؟",
    "ما هي الحافلات للذهاب إلى وسط المدينة؟",
    "كيف أبرر الغياب؟"
  ],
  en: [
    "Where can I eat cheap near school?",
    "How to register at the library?",
    "How to get CNAS affiliation?",
    "Which buses go to downtown?",
    "How to justify an absence?"
  ]
};

function getSuggestions(lang) {
  return SUGGESTIONS[lang] || SUGGESTIONS.fr;
}

// ============================================
// إرسال السؤال إلى Gemini
// ============================================
async function askGemini(question, lang) {
  lang = lang || 'fr';
  
  const apiKey = getGeminiKey();
  if (!apiKey) {
    throw new Error('🔑 Clé API Gemini manquante. Cliquez sur le bouton 🔑 pour la configurer.');
  }
  
  if (getRemainingQuota() <= 0) {
    throw new Error('⏳ Limite quotidienne atteinte. Réessayez demain.');
  }
  
  const guideContext = buildGuideContext(question);
  
  const systemInstruction = `Tu es un assistant pour les étudiants de l'ENSTP (École Nationale Supérieure des Travaux Publics) à Alger, Algérie.

RÈGLES:
1. Réponds TOUJOURS en ${lang === 'ar' ? 'arabe' : lang === 'en' ? 'anglais' : 'français'}.
2. Utilise EN PRIORITÉ les informations du guide fournies.
3. Si l'info n'est pas dans le guide, dis-le honnêtement.
4. Sois concis, pratique et amical.
5. Utilise des emojis quand c'est pertinent.

${guideContext ? 'Informations du guide:\n\n' + guideContext : 'Aucune information spécifique trouvée pour cette question.'}

Réponds maintenant à la question.`;

  const requestBody = {
    contents: [
      {
        role: 'user',
        parts: [
          { text: systemInstruction + '\n\n=== QUESTION ===\n' + question }
        ]
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

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Gemini Error:', errorData);
    
    if (response.status === 400) {
      throw new Error('🔑 Clé API invalide. Vérifiez votre clé.');
    }
    if (response.status === 403) {
      throw new Error('🚫 Accès refusé. Activez l\'API Gemini dans Google Cloud.');
    }
    if (response.status === 429) {
      throw new Error('⏳ Trop de requêtes. Attendez un instant.');
    }
    throw new Error('❌ Erreur IA (' + response.status + '). Réessayez.');
  }

  const data = await response.json();
  
  let answer = '';
  if (data.candidates && data.candidates[0] && data.candidates[0].content) {
    const parts = data.candidates[0].content.parts || [];
    answer = parts.map(p => p.text || '').join('');
  }
  
  if (!answer) {
    throw new Error('🤖 L\'IA n\'a pas pu générer de réponse.');
  }
  
  incrementQuota();
  return answer.trim();
}

// ============================================
// Exports
// ============================================
if (typeof window !== 'undefined') {
  window.askGemini = askGemini;
  window.getRemainingQuota = getRemainingQuota;
  window.getSuggestions = getSuggestions;
  window.setGeminiKey = setGeminiKey;
  window.getGeminiKey = getGeminiKey;
  window.hasGeminiKey = hasGeminiKey;
  window.clearGeminiKey = clearGeminiKey;
}
