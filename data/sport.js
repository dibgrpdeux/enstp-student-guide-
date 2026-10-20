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
      titleKey: "sportUniv",
      icon: "🎓",
      descKey: "sportUnivDesc",
      extra: "🏆 Organisé par l'ONSU (Office National des Sports Universitaires)",
      details: [
        { icon: "🏀", fr: "Basket", ar: "كرة السلة", en: "Basketball" },
        { icon: "⚽", fr: "Football", ar: "كرة القدم", en: "Football" },
        { icon: "🏐", fr: "Volley", ar: "الكرة الطائرة", en: "Volleyball" },
        { icon: "🏃", fr: "Athlétisme", ar: "ألعاب القوى", en: "Athletics" },
        { icon: "🏓", fr: "Tennis de table", ar: "تنس الطاولة", en: "Table tennis" },
        { icon: "♟️", fr: "Échecs", ar: "الشطرنج", en: "Chess" }
      ]
    },
    {
      titleKey: "sportHors",
      icon: "🏋️",
      descKey: "sportHorsDesc",
      map: "salle de sport près de ENSTP Garidi Kouba",
      extra: "💪 Salles de sport privées et clubs",
      details: [
        { icon: "🏋️", fr: "Musculation", ar: "كمال الأجسام", en: "Bodybuilding" },
        { icon: "🥊", fr: "Boxe", ar: "الملاكمة", en: "Boxing" },
        { icon: "🤸", fr: "Gymnastique", ar: "الجمباز", en: "Gymnastics" },
        { icon: "🧘", fr: "Yoga", ar: "اليوغا", en: "Yoga" },
        { icon: "🏊", fr: "Natation", ar: "السباحة", en: "Swimming" },
        { icon: "🚴", fr: "Cyclisme", ar: "الدراجات", en: "Cycling" }
      ]
    },
    {
      titleKey: "sportFootball",
      icon: "⚽",
      descKey: "sportFootballDesc",
      extra: "⚽ Matchs libres entre étudiants",
      details: [
        { icon: "🕐", fr: "Week-end et jours fériés", ar: "نهاية الأسبوع والأعياد", en: "Weekends and holidays" },
        { icon: "📍", fr: "Terrain de l'école ou de la cité", ar: "ملعب المدرسة أو الإقامة", en: "School or residence field" },
        { icon: "👥", fr: "Organise avec tes amis", ar: "نظّم مع أصدقائك", en: "Organize with friends" }
      ]
    },
    {
      titleKey: "sportRunning",
      icon: "🏃",
      descKey: "sportRunningDesc",
      map: "parc près de ENSTP Garidi Kouba",
      extra: "🏃 Cours le matin ou le soir",
      details: [
        { icon: "⏰", fr: "Meilleur moment : 6h-8h ou 17h-19h", ar: "أفضل وقت: 6-8 صباحاً أو 5-7 مساءً", en: "Best time: 6-8 AM or 5-7 PM" },
        { icon: "📍", fr: "Parcs et stades autour de Kouba", ar: "حدائق وملاعب حول القبة", en: "Parks and stadiums around Kouba" },
        { icon: "🥤", fr: "Apporte de l'eau", ar: "أحضر الماء", en: "Bring water" }
      ]
    },
    {
      titleKey: "sportBasket",
      icon: "🏀",
      descKey: "sportBasketDesc",
      extra: "🏐 Sports collectifs dynamiques",
      details: [
        { icon: "📍", fr: "Terrains de l'école et des cités", ar: "ملاعب المدرسة والإقامات", en: "School and residence courts" },
        { icon: "👥", fr: "Dès 6 joueurs, organise un match", ar: "من 6 لاعبين، نظّم مباراة", en: "From 6 players, organize a match" },
        { icon: "🏆", fr: "Tournois inter-cités possibles", ar: "دورات بين الإقامات ممكنة", en: "Inter-residence tournaments possible" }
      ]
    }
  ]
});
