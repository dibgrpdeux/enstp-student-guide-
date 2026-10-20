// ============================================
// data/admin.js — قسم إدارتي
// ============================================

window.SECTIONS = window.SECTIONS || [];

// حذف أي نسخة قديمة
for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'admin') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "admin",
  icon: "🏛️",
  titleKey: "sectionAdmin",
  introKey: "adminIntro",
  type: "items",

  items: [
    // 1. الإدارة العامة
    {
      titleKey: "adminDirection",
      icon: "🏛️",
      descKey: "departement",
      location: "Département des classes préparatoires — 1er étage",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      detailsKey: "adminDirectionDetails"
    },

    // 2. Meriem Tebani
    {
      titleKey: "adminTebani",
      icon: "📋",
      descKey: "meriem Tebani",
      location: "Département des classes préparatoires — 1er bureau à droite",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "m.tebani@enstp.edu.dz",
      detailsKey: "adminTebaniDetails"
    },

    // 3. Mobarki Ahmed
    {
      titleKey: "adminMobarki",
      icon: "🎓",
      descKey: "Mobarki Ahmed",
      location: "Département des classes préparatoires — 2ème bureau à droite",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      detailsKey: "adminMobarkiDetails"
    },

    // 4. Fedghouch Ferhat
    {
      titleKey: "adminFedghouch",
      icon: "⚖️",
      descKey: "Fedghouch Ferhat",
      location: "Département des classes préparatoires",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      detailsKey: "adminFedghouchDetails"
    }
  ]
});
