// ============================================
// data/admin.js — قسم إدارتي (مترجم بالكامل)
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
      title: { 
        fr: "Direction Générale", 
        ar: "الإدارة العامة", 
        en: "General Direction" 
      },
      icon: "🏛️",
      desc: { 
        fr: "Direction générale de l'école.", 
        ar: "الإدارة العامة للمدرسة.", 
        en: "General management of the school." 
      },
      location: { 
        fr: "Bâtiment administratif — 1er étage", 
        ar: "المبنى الإداري — الطابق الأول", 
        en: "Administrative building — 1st floor" 
      },
      hours: { 
        fr: "Dimanche à Jeudi : 8h - 16h", 
        ar: "الأحد إلى الخميس: 8:00 - 16:00", 
        en: "Sunday to Thursday: 8am - 4pm" 
      }
    },

    // 2. Meriem Tebani
    {
      title: { 
        fr: "Meriem Tebani", 
        ar: "مريم تيباني", 
        en: "Meriem Tebani" 
      },
      icon: "📋",
      desc: { 
        fr: "Chef de Service des Classes Préparatoires (1ACP-2ACP).", 
        ar: "رئيسة مصلحة الأقسام التحضيرية (1ACP-2ACP).", 
        en: "Head of Preparatory Classes Service (1ACP-2ACP)." 
      },
      location: { 
        fr: "Département des classes préparatoires — 1er bureau à droite", 
        ar: "قسم الأقسام التحضيرية — المكتب الأول على اليمين", 
        en: "Preparatory Classes Department — 1st office on the right" 
      },
      hours: { 
        fr: "Dimanche à Jeudi : 8h - 16h", 
        ar: "الأحد إلى الخميس: 8:00 - 16:00", 
        en: "Sunday to Thursday: 8am - 4pm" 
      },
      email: "m.tebani@enstp.edu.dz",
      details: {
        fr: "Missions pour les étudiants :\n- Accompagnement administratif tout au long du parcours.\n- Information et orientation sur les procédures de scolarité.\n- Délivrance des attestations et documents administratifs.\n- Suivi des inscriptions, résultats et dossiers scolaires.\n- Accompagnement dans l'utilisation des outils numériques (Google Classroom).\n- Traitement des demandes et réclamations liées à la scolarité.",
        ar: "المهام الموجهة للطلبة:\n- ضمان المتابعة الإدارية للطلبة طوال مسارهم.\n- الإعلام والتوجيه بخصوص إجراءات التمدرس.\n- تسليم الشهادات والوثائق الإدارية.\n- متابعة التسجيلات، النتائج والملفات المدرسية.\n- مرافقة الطلبة في استخدام الأدوات الرقمية (Google Classroom).\n- معالجة الطلبات والشكاوى المتعلقة بالتمدرس.",
        en: "Missions for students:\n- Administrative support throughout the journey.\n- Information and guidance on academic procedures.\n- Issuance of certificates and administrative documents.\n- Monitoring of registrations, results, and school files.\n- Support in using digital tools (Google Classroom).\n- Processing requests and complaints related to schooling."
      }
    },

    // 3. Mobarki Ahmed
    {
      title: { 
        fr: "M. Mobarki Ahmed", 
        ar: "أ. مباركي أحمد", 
        en: "Mr. Mobarki Ahmed" 
      },
      icon: "🎓",
      desc: { 
        fr: "Chef de Département des Classes Préparatoires.", 
        ar: "رئيس قسم الأقسام التحضيرية.", 
        en: "Head of Preparatory Classes Department." 
      },
      location: { 
        fr: "Département des classes préparatoires — 2ème bureau à droite", 
        ar: "قسم الأقسام التحضيرية — المكتب الثاني على اليمين", 
        en: "Preparatory Classes Department — 2nd office on the right" 
      },
      hours: { 
        fr: "Dimanche à Jeudi : 8h - 16h", 
        ar: "الأحد إلى الخميس: 8:00 - 16:00", 
        en: "Sunday to Thursday: 8am - 4pm" 
      },
      details: {
        fr: "Missions pour les étudiants :\n- Supervision générale du bon déroulement des études.\n- Validation des programmes et des emplois du temps.\n- Prise de décisions concernant les situations académiques particulières.\n- Orientation des étudiants vers les services compétents en cas de problème majeur.",
        ar: "المهام الموجهة للطلبة:\n- الإشراف العام على سير الدراسة.\n- المصادقة على البرامج والتوقيتات.\n- اتخاذ القرارات المتعلقة بالحالات الأكاديمية الخاصة.\n- توجيه الطلبة نحو المصالح المختصة في حالة وجود مشكلة كبرى.",
        en: "Missions for students:\n- General supervision of the smooth running of studies.\n- Validation of programs and schedules.\n- Decision-making regarding special academic situations.\n- Guidance of students to competent services in case of major problems."
      }
    },

    // 4. Fedghouch Ferhat
    {
      title: { 
        fr: "M. Fedghouch Ferhat", 
        ar: "أ. فدغوش فرحات", 
        en: "Mr. Fedghouch Ferhat" 
      },
      icon: "⚖️",
      desc: { 
        fr: "Responsable d'Études et Directeur de Conseil de Discipline.", 
        ar: "مسؤول الدراسات ورئيس مجلس التأديب.", 
        en: "Head of Studies and Director of Discipline Council." 
      },
      location: { 
        fr: "Bâtiment administratif", 
        ar: "المبنى الإداري", 
        en: "Administrative building" 
      },
      hours: { 
        fr: "Dimanche à Jeudi : 8h - 16h", 
        ar: "الأحد إلى الخميس: 8:00 - 16:00", 
        en: "Sunday to Thursday: 8am - 4pm" 
      },
      details: {
        fr: "Missions pour les étudiants :\n- Suivi de l'assiduité et de la ponctualité aux cours et TD.\n- Gestion des absences et des justificatifs.\n- Veille au respect du règlement intérieur de l'école.\n- Traitement des dossiers disciplinaires (conseil de discipline).\n- Conseil et accompagnement des étudiants en difficulté d'adaptation.",
        ar: "المهام الموجهة للطلبة:\n- متابعة المواظبة والانتظام في الدروس والأعمال الموجهة.\n- إدارة الغيابات والمبررات.\n- السهر على احترام النظام الداخلي للمدرسة.\n- معالجة الملفات التأديبية (مجلس التأديب).\n- تقديم المشورة ومرافقة الطلبة الذين يواجهون صعوبات في التكيف.",
        en: "Missions for students:\n- Monitoring attendance and punctuality in classes and tutorials.\n- Management of absences and justifications.\n- Ensuring compliance with the school's internal regulations.\n- Processing disciplinary files (discipline council).\n- Advice and support for students struggling to adapt."
      }
    }
  ]
});
