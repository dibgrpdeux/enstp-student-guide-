// ============================================
// data/services.js — قسم الخدمات
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "services",
  icon: "📋",
  titleKey: "sectionServices",
  introKey: "servicesIntro",
  type: "items",

  items: [
    // ========== 1. الضمان الاجتماعي (CNAS) ==========
    {
      titleKey: "srvSecu",
      icon: "💼",
      descKey: "srvSecuDesc",
      images: ["cnas.png"],
      location: "srvSecuLocation",
      procedure: "srvSecuProcedure",
      delay: "srvSecuDelay"
    },

    // ========== 2. التسجيل على منصة EL HANAA ==========
    {
      titleKey: "srvElHanaa",
      icon: "💻",
      descKey: "srvElHanaaDesc",
      location: "srvElHanaaLocation",
      procedure: "srvElHanaaProcedure",
      delay: "srvElHanaaDelay",
      link: "https://elhanaa.cnas.dz/inscription.xhtml"
    },

    // ========== 3. الانضمام للمكتبة ==========
    {
      titleKey: "srvBiblio",
      icon: "📖",
      descKey: "srvBiblioDesc",
      images: ["library1.png", "library2.png", "library3.png"],
      location: "srvBiblioLocation",
      procedure: "srvBiblioProcedure",
      delay: "srvBiblioDelay",
      link: ""
    },

    // ========== 4. FAQ — الأسئلة الشائعة ==========
    {
      titleKey: "srvFaqTitle",
      icon: "❓",
      descKey: "srvFaqDesc",
      type: "faq",
      faqItems: [
        {
          categoryKey: "srvFaqCat1",
          items: [
            { q: "srvFaqQ1", a: "srvFaqA1" },
            { q: "srvFaqQ2", a: "srvFaqA2" }
          ]
        },
        {
          categoryKey: "srvFaqCat2",
          items: [
            { q: "srvFaqQ3", a: "srvFaqA3" },
            { q: "srvFaqQ4", a: "srvFaqA4" }
          ]
        },
        {
          categoryKey: "srvFaqCat3",
          items: [
            { q: "srvFaqQ5", a: "srvFaqA5" },
            { q: "srvFaqQ6", a: "srvFaqA6" }
          ]
        },
        {
          categoryKey: "srvFaqCat4",
          items: [
            { q: "srvFaqQ7", a: "srvFaqA7" }
          ]
        }
      ]
    }
  ]
});
