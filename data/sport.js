// ============================================
// data/sport.js — قسم الرياضة
// Guide de survie ENSTP
// Version 4.0 — Vidéos uniquement
// ============================================

window.SECTIONS = window.SECTIONS || [];

// حذف أي نسخة قديمة
for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'sport') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "sport",
  icon: "⚽",
  titleKey: "sectionSport",
  introKey: "sportIntro",
  type: "items",

  items: [
    // ========== 1. المركب الرياضي القبة (فيديو) ==========
    {
      title: { fr: "Complexe Sportif de Kouba", ar: "المركب الرياضي القبة", en: "Kouba Sports Complex" },
      icon: "🏟️",
      desc: { 
        fr: "Découvrez le complexe sportif de Kouba en vidéo.", 
        ar: "اكتشف المركب الرياضي القبة من خلال الفيديو.", 
        en: "Discover the Kouba sports complex in video." 
      },
      video: "aqPng7nyFZU", // فيديو المركب الرياضي
      extra: "📍 Kouba, Alger"
    },

    // ========== 2. فيديو تحفيزي: Change your self guaridi ==========
    {
      title: { fr: "Change Yourself (Garidi)", ar: "غيّر نفسك (قاريدي)", en: "Change Yourself (Garidi)" },
      icon: "🔥",
      desc: { 
        fr: "Une vidéo motivante tournée à Garidi.", 
        ar: "فيديو تحفيزي تم تصويره في قاريدي.", 
        en: "A motivating video filmed in Garidi." 
      },
      video: "byDM5wQ3wcc" // فيديو Change your self
    },

    // ========== 3. فيديو Be différent (يوتيوب شورتس) ==========
    {
      title: { fr: "Be Different", ar: "كن مختلفاً", en: "Be Different" },
      icon: "✨",
      desc: { 
        fr: "Un short inspirant pour te dépasser.", 
        ar: "فيديو قصير ملهم لتجاوز نفسك.", 
        en: "An inspiring short to push your limits." 
      },
      // نستخدم رابط الشورتس، وسيقوم الكود في guide.html بتحويله تلقائياً
      videoUrl: "https://youtube.com/shorts/s4IcvPRD5dY", 
      extra: "🎬 YouTube Shorts"
    }
  ]
});
