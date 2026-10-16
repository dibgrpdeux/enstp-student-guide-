// ============================================
// data/cite.js — قسم الإقامة الجامعية
// Guide de survie ENSTP
// ============================================
// يحتوي على: إقامة قاريدي، سعيد حمدين، رويسو
// مع فيديوهات YouTube وخرائط Google
// ============================================

window.SECTIONS = window.SECTIONS || [];

// حذف أي نسخة قديمة
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
    // ========== 1. إقامة قاريدي ==========
    { 
      titleKey: "citeGaridi", 
      icon: "🏠", 
      descKey: "citeGaridiDesc",
      location: "📍 Garidi, Kouba, Alger",
      distance: "🚶 5 min à pied de l'ENSTP",
      capacity: "👥 À compléter",
      services: "🍽️ Restaurant · 🧺 Laverie · 📚 Salles d'étude",
      map: "Cité universitaire Garidi Kouba Alger",
      video: "cxKbbBfWCCw",
      videoTitle: "🎥 Visite de la résidence Garidi",
      img: ""
    },
    
    // ========== 2. إقامة سعيد حمدين ==========
    { 
      titleKey: "citeSaid", 
      icon: "🏠", 
      descKey: "citeSaidDesc",
      location: "📍 Saïd Hamdine, Alger",
      distance: "🚌 15 min en bus",
      capacity: "👥 À compléter",
      services: "🍽️ Restaurant · 🧺 Laverie · 📚 Salles d'étude",
      map: "Cité universitaire Saïd Hamdine Alger",
      video: "hZg4e6hpkns",
      videoTitle: "🎥 Visite de la résidence Saïd Hamdine",
      img: ""
    },
    
    // ========== 3. إقامة رويسو ==========
    { 
      titleKey: "citeRouiba", 
      icon: "🏠", 
      descKey: "citeRouibaDesc",
      location: "📍 Rouiba, Alger",
      distance: "🚌 45 min en transport",
      capacity: "👥 À compléter",
      services: "🍽️ Restaurant · 🧺 Laverie · 📚 Salles d'étude",
      map: "Cité universitaire Rouiba Alger",
      video: "t1BCRwvmZyo",
      videoTitle: "🎥 Visite de la résidence Rouiba",
      videoShort: "agTlVSQ8760",
      img: ""
    }
  ]
});
