// ============================================
// search.js — محرك البحث الذكي
// Guide de survie ENSTP
// Version 3.0 — محسّن
// ============================================

const SYNONYMS = {
  // فرنسي
  "salle": ["classe", "amphi", "amphithéâtre", "cours", "td", "tp", "laboratoire"],
  "amphi": ["amphithéâtre", "salle", "grande salle"],
  "laboratoire": ["labo", "tp", "expérience"],
  "prof": ["enseignant", "professeur", "maître"],
  "enseignant": ["prof", "professeur"],
  "probleme": ["aide", "souci", "difficulté", "service"],
  "aide": ["probleme", "service", "secours"],
  "absence": ["absent", "justificatif", "manqué", "exclusion", "éliminatoire"],
  "carte": ["badge", "identité", "étudiant"],
  "transport": ["bus", "taxi", "métro", "tram", "déplacement"],
  "bus": ["transport", "arrêt", "ligne"],
  "taxi": ["transport", "voiture", "station"],
  "cite": ["résidence", "logement", "chambre"],
  "residence": ["cite", "logement"],
  "manger": ["restaurant", "repas", "snack", "café", "pizzeria", "boulangerie"],
  "restaurant": ["manger", "repas", "snack"],
  "bibliotheque": ["livre", "adhésion", "prêt", "emprunt"],
  "notes": ["résultats", "examens", "moyenne"],
  "examens": ["notes", "résultats"],
  "sport": ["football", "basket", "running"],
  "medecin": ["docteur", "santé", "infirmerie"],
  "pharmacie": ["médicament", "santé"],
  "forum": ["discussion", "chat", "étudiants", "communauté"],
  "etudiant": ["élève", "étudiants", "apprenant"],
  "cnas": ["sécurité sociale", "ameli", "assurance", "santé"],
  "stage": ["internship", "convention", "terrain"],
  "bourse": ["aide financière", "allocation"],
  "wifi": ["internet", "connexion", "réseau"],

  // عربي
  "قاعة": ["قسم", "مدرج", "صف", "حصة"],
  "مدرج": ["قاعة", "أمفي"],
  "مخبر": ["مختبر", "تجربة", "تطبيقي"],
  "أستاذ": ["معلم", "بروف", "مدرس"],
  "أساتذة": ["أستاذ", "معلم"],
  "مشكلة": ["مساعدة", "سؤال", "صعوبة"],
  "مساعدة": ["مشكلة", "خدمة"],
  "غياب": ["غائب", "تبرير", "مبرر", "إقصاء"],
  "بطاقة": ["هوية", "شارة"],
  "نقل": ["حافلة", "طاكسي", "مترو", "ترامواي"],
  "حافلة": ["نقل", "باص", "محطة"],
  "طاكسي": ["نقل", "سيارة", "تكسي"],
  "إقامة": ["حي", "سكن", "غرفة"],
  "سكن": ["إقامة", "حي"],
  "أكل": ["مطعم", "ماكلة", "وجبة", "طعام"],
  "ماكلة": ["أكل", "مطعم", "وجبة"],
  "مطعم": ["أكل", "ماكلة", "وجبة"],
  "مكتبة": ["كتاب", "انضمام", "استعارة"],
  "نقاط": ["نتائج", "امتحانات", "معدل"],
  "امتحانات": ["نقاط", "نتائج"],
  "رياضة": ["كرة", "جري", "تمرين"],
  "طبيب": ["عيادة", "صحة", "إسعاف"],
  "صيدلية": ["دواء", "صحة"],
  "ملتقى": ["دردشة", "طلبة", "مجتمع", "تواصل"],
  "طلبة": ["طلاب", "ملتقى"],
  "ضمان": ["cnas", "تأمين", "صحة"],
  "تربص": ["تدريب", "اتفاقية"],
  "منحة": ["مساعدة مالية", "دعم"],

  // إنجليزي
  "room": ["class", "amphi", "classroom"],
  "teacher": ["professor", "instructor"],
  "problem": ["help", "issue", "service"],
  "help": ["problem", "service"],
  "transport": ["bus", "taxi", "metro"],
  "dorm": ["residence", "housing"],
  "eat": ["restaurant", "food", "meal"],
  "library": ["book", "membership"],
  "grades": ["results", "exams"],
  "forum": ["discussion", "chat", "community"],
  "internship": ["stage", "training"]
};

// ============================================
// تطبيع النص
// ============================================
function normalize(text) {
  if (!text) return '';
  return text.toString().toLowerCase()
    // الفرنسية
    .replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o').replace(/[ùûü]/g, 'u').replace(/ç/g, 'c')
    // العربية
    .replace(/[إأآا]/g, 'ا').replace(/[ىي]/g, 'ي').replace(/[ةه]/g, 'ه')
    .replace(/[ًٌٍَُِّْ]/g, '')
    // أرقام عربية ← لاتينية
    .replace(/[٠-٩]/g, d => String.fromCharCode(d.charCodeAt(0) - 0x0660 + 48))
    .replace(/[۰-۹]/g, d => String.fromCharCode(d.charCodeAt(0) - 0x06F0 + 48))
    .replace(/\s+/g, ' ')
    .trim();
}

// ============================================
// توسيع الكلمة بالمرادفات
// ============================================
function expandWord(word) {
  const norm = normalize(word);
  const expanded = new Set([norm]);
  Object.keys(SYNONYMS).forEach(key => {
    if (normalize(key) === norm) {
      SYNONYMS[key].forEach(syn => expanded.add(normalize(syn)));
    }
  });
  return Array.from(expanded);
}

// ============================================
// Levenshtein
// ============================================
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b.charAt(i - 1) === a.charAt(j - 1)
        ? matrix[i - 1][j - 1]
        : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
    }
  }
  return matrix[b.length][a.length];
}

// ============================================
// ذاكرة مؤقتة للترجمات
// ============================================
const _transCache = new Map();
function cachedT(key, lang) {
  if (!key) return '';
  const k = key + '|' + lang;
  if (_transCache.has(k)) return _transCache.get(k);
  const val = (typeof window.t === 'function' ? window.t(key, lang) : '') || '';
  _transCache.set(k, val);
  return val;
}

function joinTrilingual(key) {
  if (!key) return '';
  return [
    cachedT(key, 'fr'),
    cachedT(key, 'ar'),
    cachedT(key, 'en')
  ].filter(Boolean).join(' ');
}

function joinObject(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  if (typeof obj === 'object') {
    return [obj.fr, obj.ar, obj.en].filter(Boolean).join(' ');
  }
  return '';
}

// ============================================
// تقييم عنصر
// ============================================
function scoreItem(item, expandedWords, section) {
  let score = 0;

  const titleText = normalize(
    joinTrilingual(item.titleKey) + ' ' + joinObject(item.title)
  );
  const descText = normalize(
    joinTrilingual(item.descKey) + ' ' + joinObject(item.desc) + ' ' +
    (item.note || '') + ' ' + (item.location || '') + ' ' + (item.hours || '')
  );
  const secText = normalize(joinTrilingual(section.titleKey));

  let matchedGroups = 0;

  expandedWords.forEach(group => {
    let groupMatched = false;
    group.forEach(w => {
      if (!w) return;
      if (titleText.includes(w)) { score += 10; groupMatched = true; }
      if (descText.includes(w)) { score += 3; groupMatched = true; }
      if (secText.includes(w)) { score += 1; groupMatched = true; }
    });
    if (groupMatched) matchedGroups++;
  });

  // مكافأة التطابق الكامل
  if (matchedGroups === expandedWords.length && expandedWords.length > 1) {
    score += 20;
  }

  return score;
}

// ============================================
// البحث الذكي
// ============================================
function smartSearch(query, sections) {
  const q = normalize(query);
  if (!q) return [];

  const words = q.split(/\s+/).filter(w => w.length > 1);
  if (!words.length) return [];

  const expandedWords = words.map(expandWord);
  const results = [];

  (sections || []).forEach(section => {
    if (section.items) {
      section.items.forEach((item, idx) => {
        const score = scoreItem(item, expandedWords, section);
        if (score > 0) {
          results.push({
            section, item, itemIndex: idx, categoryId: null, score
          });
        }
      });
    }

    if (section.categories) {
      section.categories.forEach(cat => {
        // عنوان التصنيف
        const catTitle = cat.titleKey
          ? joinTrilingual(cat.titleKey)
          : (typeof cat.title === 'string' ? cat.title : '');
        const ctext = normalize(catTitle);
        let catScore = 0;
        expandedWords.forEach(group => {
          group.forEach(w => {
            if (w && ctext.includes(w)) catScore += 15;
          });
        });
        if (catScore > 0) {
          results.push({
            section,
            item: { titleKey: cat.titleKey, title: cat.title, icon: cat.icon },
            itemIndex: null,
            categoryId: cat.id,
            score: catScore
          });
        }

        // items داخل التصنيف
        if (cat.items) {
          cat.items.forEach((item, idx) => {
            const score = scoreItem(item, expandedWords, section);
            if (score > 0) {
              results.push({
                section, item, itemIndex: idx, categoryId: cat.id, score
              });
            }
          });
        }
      });
    }
  });

  // إزالة التكرارات
  const seen = new Set();
  const unique = [];
  results.forEach(r => {
    const key = r.section.id + '|' + (r.item.titleKey || r.item.title || '') + '|' + (r.categoryId || '') + '|' + (r.itemIndex ?? '');
    if (!seen.has(key)) { seen.add(key); unique.push(r); }
  });

  unique.sort((a, b) => b.score - a.score);
  return unique;
}

// ============================================
// اقتراحات
// ============================================
function suggestWords(query) {
  const q = normalize(query);
  if (!q) return [];
  const words = q.split(/\s+/).filter(Boolean);
  const suggestions = new Map();

  words.forEach(word => {
    Object.keys(SYNONYMS).forEach(key => {
      const dist = levenshtein(word, normalize(key));
      if (dist > 0 && dist <= 2) {
        const current = suggestions.get(key);
        if (!current || current > dist) suggestions.set(key, dist);
      }
    });
  });

  return [...suggestions.entries()]
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .map(([word]) => word);
}

// ============================================
// تصدير
// ============================================
if (typeof window !== 'undefined') {
  window.smartSearch = smartSearch;
  window.suggestWords = suggestWords;
  window.normalize = normalize;
}
