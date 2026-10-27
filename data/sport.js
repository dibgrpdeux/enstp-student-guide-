// ============================================
// data/sport.js — قسم الرياضة
// ============================================

window.SECTIONS = window.SECTIONS || [];

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
    {
      title: { fr: "Complexe Sportif de Kouba", ar: "المركب الرياضي القبة", en: "Kouba Sports Complex" },
      icon: "🏟️",
      desc: { fr: "Découvrez le complexe sportif de Kouba en vidéo.", ar: "اكتشف المركب الرياضي القبة من خلال الفيديو.", en: "Discover the Kouba sports complex in video." },
      video: "aqPng7nyFZU",
      extra: "📍 Kouba, Alger"
    },
    {
      title: { fr: "Change Yourself (Garidi)", ar: "غيّر نفسك (قاريدي)", en: "Change Yourself (Garidi)" },
      icon: "🔥",
      desc: { fr: "Une vidéo motivante tournée à Garidi.", ar: "فيديو تحفيزي تم تصويره في قاريدي.", en: "A motivating video filmed in Garidi." },
      video: "byDM5wQ3wcc"
    },
    {
      title: { fr: "", ar: "", en: "" },
      icon: "✨",
      desc: { fr: "Un short inspirant pour te dépasser.", ar: "فيديو قصير ملهم لتجاوز نفسك.", en: "An inspiring short to push your limits." },
      videoUrl: "https://youtube.com/shorts/s4IcvPRD5dY",
      extra: "🎬 YouTube Shorts"
    }
  ]
});
