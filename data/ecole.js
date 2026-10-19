// ============================================
// data/ecole.js — قسم مدرستي
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "ecole",
  icon: "🏫",
  titleKey: "sectionEcole",
  introKey: "ecoleIntro",
  type: "ecole",
  
  categories: [
    // ========== 1. الخريطة التفاعلية ==========
    {
      id: "interactive-map",
      icon: "🗺️",
      titleKey: "ecoleMapTitle",
      descKey: "ecoleMapDesc",
      type: "garidi-map",
      mapUrl: "https://www.google.com/maps/d/u/1/edit?mid=1nT-Wvfqo8A3wdoHnadLzZHFYB_qdH_U&usp=sharing"
    },
    
    // ========== 2. الفيديوهات التعريفية ==========
    {
      id: "videos",
      icon: "🎬",
      titleKey: "ecoleVideosTitle",
      descKey: "ecoleVideosDesc",
      type: "items",
      items: [
        { titleKey: "ecoleVideoTour", icon: "🏢", descKey: "ecoleVideoTourDesc", video: "8LfUbr6JoVE", img: "" },
        { titleKey: "ecoleVideoPrep", icon: "📘", descKey: "ecoleVideoPrepDesc", video: "DQLbKFkIJh0", img: "" },
        { titleKey: "ecoleVideoAmphi", icon: "🏛️", descKey: "ecoleVideoAmphiDesc", video: "5LSyChDF-hA", img: "" },
        { titleKey: "ecoleVideoInfra", icon: "🏗️", descKey: "ecoleVideoInfraDesc", video: "uZ7HbehM_UU", img: "" },
        { titleKey: "ecoleVideoEntree", icon: "🚪", descKey: "ecoleVideoEntreeDesc", video: "GUCHDgEJaIk", img: "" },
        { titleKey: "ecoleVideoInfo", icon: "💻", descKey: "ecoleVideoInfoDesc", video: "sFwHEHhgAbQ", img: "" }
      ]
    }
  ]
});
