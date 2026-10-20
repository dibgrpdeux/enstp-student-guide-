// ============================================
// data/cite.js — قسم الإقامة الجامعية
// ============================================

window.SECTIONS = window.SECTIONS || [];

for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'cite') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "cite",
  icon: "🏠",
  titleKey: "sectionCite",
  introKey: "citeIntro",
  type: "items",

  items: [
    {
      titleKey: "citeGaridi",
      icon: "🏠",
      descKey: "citeGaridiDesc",
      location: "📍 Garidi, Kouba, Alger",
      distance: "🚶 5 min à pied de l'ENSTP",
      services: "🍽️ Restaurant · 🧺 Laverie · 📚 Salles d'étude",
      map: "Cité universitaire Garidi Kouba Alger",
      video: "cxKbbBfWCCw",
      videoTitle: "🎥 Visite de la résidence Garidi"
    },
    {
      titleKey: "citeSaid",
      icon: "🏠",
      descKey: "citeSaidDesc",
      location: "📍 Saïd Hamdine, Alger",
      distance: "🚌 15 min en bus",
      services: "🍽️ Restaurant · 🧺 Laverie · 📚 Salles d'étude",
      map: "Cité universitaire Saïd Hamdine Alger",
      video: "hZg4e6hpkns",
      videoTitle: "🎥 Visite de la résidence Saïd Hamdine"
    },
    {
      titleKey: "citeRouiba",
      icon: "🏠",
      descKey: "citeRouibaDesc",
      location: "📍 Rouiba, Alger",
      distance: "🚌 45 min en transport",
      services: "🍽️ Restaurant · 🧺 Laverie · 📚 Salles d'étude",
      map: "Cité universitaire Rouiba Alger",
      video: "t1BCRwvmZyo",
      videoTitle: "🎥 Visite de la résidence Rouiba",
      videoShort: "agTlVSQ8760",
      nearby: [
        { icon: "🕌", name: "مسجد النور", nameFr: "Mosquée En-Nour", desc: "مسجد قريب من الإقامة للصلاة والجمعة.", map: "Mosquée En-Nour Rouiba Alger" },
        { icon: "🍖", name: "شواء Chez Rougi", nameFr: "Grill Chez Rougi", desc: "مطعم شواء قريب من الإقامة.", map: "Chez Rougi Rouiba Alger" },
        { icon: "💊", name: "صيدلية Larak", nameFr: "Pharmacie Larak", desc: "صيدلية قريبة لشراء الأدوية.", map: "Pharmacie Larak Rouiba Alger" },
        { icon: "🏋️", name: "Warriors Land Gym", nameFr: "Warriors Land Gym", desc: "قاعة رياضة قريبة من الإقامة.", map: "Warriors Land Gym Rouiba Alger" }
      ]
    }
  ]
});
