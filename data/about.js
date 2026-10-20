// ============================================
// data/about.js — قسم من نحن
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "about",
  icon: "👥",
  titleKey: "sectionAbout",
  introKey: "aboutIntro",
  type: "items",

  items: [
    {
      titleKey: "aboutMission",
      icon: "🎯",
      descKey: "aboutMissionDesc"
    },
    {
      titleKey: "aboutTeam",
      icon: "👥",
      descKey: "aboutTeamDesc",
      extra: "🎓 1ère année Ingénieur — Groupe 2"
    },
    {
      titleKey: "aboutValues",
      icon: "💛",
      descKey: "aboutValuesDesc",
      values: [
        { icon: "🤝", fr: "Entraide", ar: "التضامن", en: "Mutual aid" },
        { icon: "💯", fr: "Gratuité", ar: "المجانية", en: "Free" },
        { icon: "🎯", fr: "Respect", ar: "الاحترام", en: "Respect" },
        { icon: "🔍", fr: "Transparence", ar: "الشفافية", en: "Transparency" },
        { icon: "💛", fr: "Confiance", ar: "الثقة", en: "Trust" }
      ]
    },
    {
      titleKey: "aboutJoin",
      icon: "📢",
      descKey: "aboutJoinDesc",
      extra: "📲 Contacte-nous via le groupe officiel"
    },
    {
      titleKey: "aboutWarning",
      icon: "⚠️",
      descKey: "aboutWarningDesc"
    },
    {
      titleKey: "aboutUpdate",
      icon: "📅",
      descKey: "aboutUpdateDesc",
      extra: "🎉 Version 3.0 — Octobre 2026"
    }
  ]
});
