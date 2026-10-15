// ============================================
// data/profs.js — قسم أساتذتي
// Guide de survie ENSTP
// Version 3.0 — مع البطاقات والصور
// ============================================

window.SECTIONS = window.SECTIONS || [];

// ============================================
// تحميل بيانات الأساتذة من JSON
// ============================================
let PROFS_DATA = null;

async function loadProfsData() {
  if (PROFS_DATA) return PROFS_DATA;
  try {
    const res = await fetch('data/profs.json');
    PROFS_DATA = await res.json();
    return PROFS_DATA;
  } catch (err) {
    console.error('❌ Erreur chargement profs.json:', err);
    return null;
  }
}

// ============================================
// إنشاء قسم "أساتذتي" — structure
// ============================================
(function() {
  // احذف أي قسم قديم باسم profs
  for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
    if (window.SECTIONS[i].id === 'profs') {
      window.SECTIONS.splice(i, 1);
    }
  }

  // القسم الجديد — سيعرض تبويبين (السنة 1، السنة 2)
  window.SECTIONS.push({
    id: "profs",
    icon: "👨‍🏫",
    titleKey: "sectionProfs",
    introKey: "profsIntro",
    type: "profs-custom"  // نوع جديد — سيتعامل معه guide.html
  });

  console.log('✅ Section profs ajoutée (type: profs-custom)');
})();

// ============================================
// Helper: الوصول للبيانات
// ============================================
window.loadProfsData = loadProfsData;

window.getProfsFor = function(yearId) {
  if (!PROFS_DATA) return [];
  return PROFS_DATA.years[yearId] || null;
};

window.getAllProfsSubjects = function(yearId) {
  const year = window.getProfsFor(yearId);
  if (!year) return [];
  return year.subjects || [];
};

window.findProf = function(yearId, subjectId, profId) {
  const subjects = window.getAllProfsSubjects(yearId);
  const subj = subjects.find(s => s.id === subjectId);
  if (!subj) return null;
  return subj.profs.find(p => p.id === profId) || null;
};

window.findSubject = function(yearId, subjectId) {
  const subjects = window.getAllProfsSubjects(yearId);
  return subjects.find(s => s.id === subjectId) || null;
};
