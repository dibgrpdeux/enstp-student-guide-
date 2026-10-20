 // ============================================
// data/ecole.js — قسم مدرستي
// Guide de survie ENSTP
// ============================================

window.SECTIONS = window.SECTIONS || [];

// احذف أي نسخة قديمة
for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'ecole') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "ecole",
  icon: "🏫",
  titleKey: "sectionEcole",
  introKey: "ecoleIntro",
  type: "items",

  items: [
    // ========== 1. الخريطة التفاعلية ==========
    {
      titleKey: "ecoleMapTitle",
      icon: "🗺️",
      descKey: "ecoleMapDesc",
      type: "garidi-map",
      mapUrl: "https://www.google.com/maps/d/u/1/edit?mid=1nT-Wvfqo8A3wdoHnadLzZHFYB_qdH_U&usp=sharing"
    },

    // ========== 2. الفيديوهات التعريفية ==========
    {
      titleKey: "ecoleVideosTitle",
      icon: "🎬",
      descKey: "ecoleVideosDesc",
      type: "videos-group",
      videos: [
        { titleKey: "ecoleVideoTour",   icon: "🏢", video: "8LfUbr6JoVE" },
        { titleKey: "ecoleVideoPrep",   icon: "📘", video: "DQLbKFkIJh0" },
        { titleKey: "ecoleVideoAmphi",  icon: "🏛️", video: "5LSyChDF-hA" },
        { titleKey: "ecoleVideoInfra",  icon: "🏗️", video: "uZ7HbehM_UU" },
        { titleKey: "ecoleVideoEntree", icon: "🚪", video: "GUCHDgEJaIk" },
        { titleKey: "ecoleVideoInfo",   icon: "💻", video: "sFwHEHhgAbQ" }
      ]
    }
  ]
});
