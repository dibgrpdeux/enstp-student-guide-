// ============================================
// ai-search.js — البحث بالذكاء الاصطناعي (آمن)
// Guide de survie ENSTP
// يعتمد على Vercel Function /api/ask-gemini
// ============================================

const FUNCTION_URL = '/api/ask-gemini';

// حد يومي محلي (ليس آمناً — الحد الحقيقي على الخادم)
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

// ============================================
// بناء السياق من نتائج smartSearch
// ============================================
function buildGuideContext(query) {
  if (typeof window.smartSearch !== 'function' || !window.SECTIONS) return '';

  const lang = localStorage.getItem('lang') || 'fr';
  const results = window.smartSearch(query, window.SECTIONS);
  if (!results.length) return '';

  const t = (typeof window.t === 'function')
    ? (k) => window.t(k, lang)
    : (k) => '';

  let context = '=== EXTRAITS DU GUIDE ENSTP ===\n\n';

  results.slice(0, 8).forEach((r, i) => {
    const item = r.item;
    const section = r.section;

    const sectionTitle = section.titleKey ? t(section.titleKey) : section.id;

    let itemTitle = '';
    if (item.titleKey) itemTitle = t(item.titleKey);
    else if (typeof item.title === 'object' && item.title) itemTitle = item.title[lang] || item.title.fr || '';
    else if (typeof item.title === 'string') itemTitle = item.title;
    else if (item.n) itemTitle = item.n;

    let itemDesc = '';
    if (item.descKey) itemDesc = t(item.descKey);
    else if (typeof item.desc === 'object' && item.desc) itemDesc = item.desc[lang] || item.desc.fr || '';
    else if (typeof item.desc === 'string') itemDesc = item.desc;
    else if (item.note) itemDesc = item.note;

    context += `[${i + 1}] ${sectionTitle} — ${itemTitle}\n`;
    if (itemDesc) context += `    ${itemDesc}\n`;
    if (item.location) context += `    Lieu: ${item.location}\n`;
    if (item.hours) context += `    Horaires: ${item.hours}\n`;
    if (item.t) context += `    Tél: ${item.t}\n`;
    if (item.procedure) {
      const proc = t(item.procedure);
      if (proc) context += `    Procédure: ${proc}\n`;
    }
    if (item.services) context += `    Services: ${item.services}\n`;
    context += '\n';
  });

  return context;
}

// ============================================
// الاقتراحات
// ============================================
const SUGGESTIONS = {
  fr: [
    "Où puis-je manger pas cher près de l'école ?",
    "Comment obtenir mon affiliation CNAS ?",
    "Quels bus pour aller au centre-ville ?",
    "Comment justifier une absence ?",
    "Comment s'inscrire à la bibliothèque ?"
  ],
  ar: [
    "أين آكل رخيص قرب المدرسة؟",
    "كيف أحصل على الانتساب لـ CNAS؟",
    "ما هي الحافلات للذهاب إلى وسط المدينة؟",
    "كيف أبرر الغياب؟",
    "كيف أسجل في المكتبة؟"
  ],
  en: [
    "Where can I eat cheap near school?",
    "How to get CNAS affiliation?",
    "Which buses go downtown?",
    "How to justify an absence?",
    "How to register at the library?"
  ]
};

function getSuggestions(lang) {
  return SUGGESTIONS[lang] || SUGGESTIONS.fr;
}

// ============================================
// استدعاء Gemini عبر الخادم
// ============================================
async function askGemini(question, lang) {
  lang = lang || 'fr';

  if (!question || question.trim().length < 3) {
    throw new Error('Pose une question plus précise.');
  }

  if (getRemainingQuota() <= 0) {
    throw new Error('⏳ Limite quotidienne atteinte. Réessayez demain.');
  }

  const context = buildGuideContext(question);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  let response;
  try {
    response = await fetch(FUNCTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({ question: question.trim(), lang, context })
    });
  } catch (e) {
    if (e.name === 'AbortError') throw new Error('⏱️ Délai dépassé. Réessayez.');
    throw new Error('❌ Erreur réseau. Vérifiez votre connexion.');
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    if (response.status === 429) throw new Error('⏳ Trop de requêtes. Attendez un instant.');
    if (response.status === 504) throw new Error('⏱️ L\'IA met trop de temps. Réessayez.');
    throw new Error(errorData.error || '❌ Erreur. Réessayez.');
  }

  const data = await response.json();
  if (!data.answer) throw new Error('🤖 Réponse vide.');

  incrementQuota();
  return data.answer;
}

// ============================================
// تصدير
// ============================================
if (typeof window !== 'undefined') {
  window.askGemini = askGemini;
  window.getRemainingQuota = getRemainingQuota;
  window.getSuggestions = getSuggestions;
  window.buildGuideContext = buildGuideContext;
}
