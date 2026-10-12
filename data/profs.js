// ============================================
// data/profs.js — قسم أساتذتي
// Guide de survie ENSTP
// Version 2.0 — 1ère et 2ème année Préparatoire
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "profs",
  icon: "👨‍🏫",
  titleKey: "sectionProfs",
  introKey: "profsIntro",
  type: "services",
  
  categories: [
    
    // ==========================================
    // 1. السنة الأولى تحضيري
    // ==========================================
    {
      id: "prep1",
      icon: "📘",
      titleKey: "profsPrep1",
      title: "1ère année Préparatoire",
      intro: {
        fr: "Enseignants de la 1ère année du cycle préparatoire. Trouvez votre professeur par matière.",
        ar: "أساتذة السنة الأولى من الطور التحضيري. ابحث عن أستاذك حسب المادة.",
        en: "1st year Preparatory teachers. Find your teacher by subject."
      },
      items: [
        {
          title: { fr: "🔢 Algèbre", ar: "🔢 الجبر", en: "🔢 Algebra" },
          icon: "🔢",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Algèbre"
        },
        {
          title: { fr: "📐 Analyse", ar: "📐 التحليل", en: "📐 Analysis" },
          icon: "📐",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Analyse"
        },
        {
          title: { fr: "🧪 Chimie", ar: "🧪 الكيمياء", en: "🧪 Chemistry" },
          icon: "🧪",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Chimie"
        },
        {
          title: { fr: "⚛️ Physique", ar: "⚛️ الفيزياء", en: "⚛️ Physics" },
          icon: "⚛️",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Physique"
        },
        {
          title: { fr: "💹 Économie", ar: "💹 الاقتصاد", en: "💹 Economics" },
          icon: "💹",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Économie"
        },
        {
          title: { fr: "📏 Dessin Technique", ar: "📏 الرسم التقني", en: "📏 Technical Drawing" },
          icon: "📏",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Dessin Technique"
        },
        {
          title: { fr: "🇫🇷 Français", ar: "🇫🇷 الفرنسية", en: "🇫🇷 French" },
          icon: "🇫🇷",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Français"
        },
        {
          title: { fr: "📊 Statistiques", ar: "📊 الإحصاء", en: "📊 Statistics" },
          icon: "📊",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Statistiques"
        },
        {
          title: { fr: "💻 Informatique", ar: "💻 الإعلام الآلي", en: "💻 Computer Science" },
          icon: "💻",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Informatique"
        },
        {
          title: { fr: "🇬🇧 Anglais", ar: "🇬🇧 الإنجليزية", en: "🇬🇧 English" },
          icon: "🇬🇧",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Anglais"
        },
        {
          title: { fr: "🤝 Génie Humain", ar: "🤝 الهندسة البشرية", en: "🤝 Human Engineering" },
          icon: "🤝",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Génie Humain"
        }
      ]
    },
    
    // ==========================================
    // 2. السنة الثانية تحضيري
    // ==========================================
    {
      id: "prep2",
      icon: "📗",
      titleKey: "profsPrep2",
      title: "2ème année Préparatoire",
      intro: {
        fr: "Enseignants de la 2ème année du cycle préparatoire. Trouvez votre professeur par matière.",
        ar: "أساتذة السنة الثانية من الطور التحضيري. ابحث عن أستاذك حسب المادة.",
        en: "2nd year Preparatory teachers. Find your teacher by subject."
      },
      items: [
        {
          title: { fr: "⚛️ Physique", ar: "⚛️ الفيزياء", en: "⚛️ Physics" },
          icon: "⚛️",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Physique"
        },
        {
          title: { fr: "🧪 Chimie", ar: "🧪 الكيمياء", en: "🧪 Chemistry" },
          icon: "🧪",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Chimie"
        },
        {
          title: { fr: "📐 Analyse", ar: "📐 التحليل", en: "📐 Analysis" },
          icon: "📐",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Analyse"
        },
        {
          title: { fr: "💻 Informatique", ar: "💻 الإعلام الآلي", en: "💻 Computer Science" },
          icon: "💻",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Informatique"
        },
        {
          title: { fr: "💧 Mécanique des Fluides", ar: "💧 ميكانيك الموائع", en: "💧 Fluid Mechanics" },
          icon: "💧",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Mécanique des Fluides"
        },
        {
          title: { fr: "🔩 Mécanique des Solides", ar: "🔩 ميكانيك الصلب", en: "🔩 Solid Mechanics" },
          icon: "🔩",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Mécanique des Solides"
        },
        {
          title: { fr: "🇬🇧 Anglais", ar: "🇬🇧 الإنجليزية", en: "🇬🇧 English" },
          icon: "🇬🇧",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Anglais"
        },
        {
          title: { fr: "💬 Techniques de Communication", ar: "💬 تقنيات التواصل", en: "💬 Communication Techniques" },
          icon: "💬",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Techniques de Communication"
        },
        {
          title: { fr: "📐 Géométrie", ar: "📐 الهندسة", en: "📐 Geometry" },
          icon: "📐",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Géométrie"
        },
        {
          title: { fr: "🔧 Résistance des Matériaux", ar: "🔧 مقاومة المواد", en: "🔧 Strength of Materials" },
          icon: "🔧",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Résistance des Matériaux"
        },
        {
          title: { fr: "🔢 Analyse Numérique", ar: "🔢 التحليل الرقمي", en: "🔢 Numerical Analysis" },
          icon: "🔢",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Analyse Numérique"
        },
        {
          title: { fr: "⚡ Électricité & Électronique", ar: "⚡ الكهرباء والإلكترونيك", en: "⚡ Electricity & Electronics" },
          icon: "⚡",
          desc: {
            fr: "Prof. À compléter\nBureau : À compléter\nContact : À compléter",
            ar: "الأستاذ: يُكمل\nالمكتب: يُكمل\nالاتصال: يُكمل",
            en: "Prof. To complete\nOffice: To complete\nContact: To complete"
          },
          extra: "📚 Module : Électricité & Électronique"
        }
      ]
    }
  ]
});
