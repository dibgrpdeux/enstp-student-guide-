// ============================================
// data/profs.js — قسم أساتذتي
// ============================================

window.SECTIONS = window.SECTIONS || [];

let PROFS_DATA = null;
let PROFS_LOADING = null;

async function loadProfsData() {
  if (PROFS_DATA) return PROFS_DATA;
  if (PROFS_LOADING) return PROFS_LOADING;

  PROFS_LOADING = fetch('data/profs.json')
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      PROFS_DATA = data;
      return data;
    })
    .catch(err => {
      console.error('❌ Erreur chargement profs.json:', err);
      PROFS_LOADING = null;
      return null;
    });

  return PROFS_LOADING;
}

for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'profs') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "profs",
  icon: "👨‍🏫",
  titleKey: "sectionProfs",
  introKey: "profsIntro",
  type: "profs-custom",
  load: loadProfsData
});

window.loadProfsData = loadProfsData;
