// ============================================
// ai-search.js — البحث بالذكاء الاصطناعي
// يستخدم Vercel Serverless Function
// ============================================

// ✅ رابط Vercel Function
const FUNCTION_URL = '/api/ask-gemini';

const DAILY_LIMIT = 30;

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
      ? window.t(section.titleKey, lang) : section.titleKey;
    
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
    
    context += `[${i + 1}] ${sectionTitle} - ${itemTitle}\n`;
    if (itemDesc) context += `    ${itemDesc}\n`;
    if (item.location) context += `    Lieu: ${item.location}\n`;
    if (item.hours) context += `    Horaires: ${item.hours}\n`;
    if (item.t) context += `    Tél: ${item.t}\n`;
    if (item.services) context += `    Services: ${item.services}\n`;
    context += '\n';
  });
  
  return context;
}

const SUGGESTIONS = {
  fr: ["Où puis-je manger pas cher près de l'école ?", "Comment s'inscrire à la bibliothèque ?", "Comment obtenir mon affiliation CNAS ?", "Quels bus pour aller au centre-ville ?", "Comment justifier une absence ?"],
  ar: ["أين آكل رخيص قرب المدرسة؟", "كيف أسجل في المكتبة؟", "كيف أحصل على الانتساب لـ CNAS؟", "ما هي الحافلات للذهاب إلى وسط المدينة؟", "كيف أبرر الغياب؟"],
  en: ["Where can I eat cheap near school?", "How to register at the library?", "How to get CNAS affiliation?", "Which buses go to downtown?", "How to justify an absence?"]
};

function getSuggestions(lang) {
  return SUGGESTIONS[lang] || SUGGESTIONS.fr;
}

async function askGemini(question, lang) {
  lang = lang || 'fr';
  
  if (getRemainingQuota() <= 0) {
    throw new Error('⏳ Limite quotidienne atteinte. Réessayez demain.');
  }
  
  const context = buildGuideContext(question);
  
  const response = await fetch(FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, lang, context })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    if (response.status === 429) {
      throw new Error('⏳ Trop de requêtes. Attendez un instant.');
    }
    throw new Error(errorData.error || '❌ Erreur. Réessayez.');
  }

  const data = await response.json();
  if (!data.answer) {
    throw new Error('🤖 Réponse vide.');
  }
  
  incrementQuota();
  return data.answer;
}

if (typeof window !== 'undefined') {
  window.askGemini = askGemini;
  window.getRemainingQuota = getRemainingQuota;
  window.getSuggestions = getSuggestions;
  window.hasGeminiKey = () => true;
  window.setGeminiKey = () => {};
  window.getGeminiKey = () => '';
  window.clearGeminiKey = () => {};
}
