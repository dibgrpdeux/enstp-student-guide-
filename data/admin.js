// ============================================
// data/admin.js — قسم إدارتي
// ============================================

window.SECTIONS = window.SECTIONS || [];

// إزالة أي نسخة قديمة لتجنب التكرار
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
      descKey: "l'administration",
      location: "Département des classes préparatoires — 1er étage",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: ""
    },

    // 2. Meriem Tebani
    {
      titleKey: "adminTebani",
      icon: "📋",
      descKey: "MERIEM TEBANI",
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
      descKey: "mobarki Ahmad",
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
      descKey: "fedghouch ferhat",
      location: "Bâtiment administratif",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      detailsKey: "adminFedghouchDetails"
    }
  ]
});
