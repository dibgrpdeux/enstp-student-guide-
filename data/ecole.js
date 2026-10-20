 // ============================================
// data/ecole.js — قسم مدرستي
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "ecole",
  icon: "🏫",
  titleKey: "sectionEcole",
  introKey: "ecoleIntro",
  type: "items",
  
  items: [
    // ========== 1. الخريطة التفاعلية ==========
    {
      titleKey: "ecole Map",
      icon: "🗺️",
      descKey: "ecole Map ",
      type: "garidi-map", // نوع خاص يتم التعرف عليه في guide.html
      mapUrl: "https://www.google.com/maps/d/u/1/edit?mid=1nT-Wvfqo8A3wdoHnadLzZHFYB_qdH_U&usp=sharing"
    },
    
    // ========== 2. الفيديوهات التعريفية ==========
    {
      titleKey: "ecoleVideosTitle",
      icon: "🎬",
      descKey: "ecoleVideosDesc",
      type: "videos-group", // نوع خاص لعرض مجموعة فيديوهات
      videos: [
        { titleKey: "Tour dans l'enstp", icon: "🏢", video: "8LfUbr6JoVE" },
        { titleKey: "département de classe préparatoire", icon: "📘", video: "DQLbKFkIJh0" },
        { titleKey: "Amphi A", icon: "🏛️", video: "5LSyChDF-hA" },
        { titleKey: "Infrastructures de l'école", icon: "🏗️", video: "uZ7HbehM_UU" },
        { titleKey: "Entree à l'école", icon: "🚪", video: "GUCHDgEJaIk" },
        { titleKey: "centre d'informatiques", icon: "💻", video: "sFwHEHhgAbQ" }
      ]
    }
  ]
}); 
