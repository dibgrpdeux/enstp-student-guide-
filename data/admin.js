// ============================================
// data/admin.js — قسم إدارتي
// Guide de survie ENSTP
// ============================================
// يحتوي على: الإدارة، الشؤون الطلابية، أمانة الأقسام
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "admin",
  icon: "🏛️",
  titleKey: "sectionAdmin",
  introKey: "adminIntro",
  type: "items",
  
  items: [
    // 1. الإدارة العامة (Direction)
    { 
      titleKey: "adminDirection", 
      icon: "🏛️", 
      descKey: "adminDirectionDesc",
      location: "Bâtiment administratif — 1er étage",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      img: "",
      video: ""
    },

    // 2. Meriem Tebani - Chef de Service des Classes Préparatoires
    { 
      titleKey: "adminTebani", 
      icon: "📋", 
      descKey: "adminTebaniDesc",
      location: "Bâtiment administratif — RDC",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "m.tebani@enstp.edu.dz",
      img: "",
      video: "",
      details: "Meriem Tebani - Chef de Service des Classes Préparatoires (1ACP-2ACP).\n\nSes missions pour les étudiants :\n- Accompagnement administratif tout au long du parcours.\n- Information et orientation sur les procédures de scolarité.\n- Délivrance des attestations et documents administratifs.\n- Suivi des inscriptions, résultats et dossiers scolaires.\n- Accompagnement dans l'utilisation des outils numériques (Google Classroom).\n- Traitement des demandes et réclamations liées à la scolarité.\n- Prise en charge des demandes relevant de la scolarité et orientation vers les services compétents."
    },

    // 3. M. Mobarki Ahmed - Chef de Département
    { 
      titleKey: "adminMobarki", 
      icon: "🎓", 
      descKey: "adminMobarkiDesc",
      location: "Batiment des départements",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      img: "",
      video: "",
      details: "M. Mobarki Ahmed - Chef de Département des Classes Préparatoires.\n\nSes missions pour les étudiants :\n- Supervision générale du bon déroulement des études.\n- Validation des programmes et des emplois du temps.\n- Prise de décisions concernant les situations académiques particulières.\n- Orientation des étudiants vers les services compétents en cas de problème majeur."
    },

    // 4. M. Fedghouch Ferhat - Responsable d'Études
    { 
      titleKey: "adminFedghouch", 
      icon: "⚖️", 
      descKey: "adminFedghouchDesc",
      location: "Bâtiment administratif",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      img: "",
      video: "",
      details: "M. Fedghouch Ferhat - Responsable d'Études et Directeur de Conseil de Discipline.\n\nSes missions pour les étudiants :\n- Suivi de l'assiduité et de la ponctualité aux cours et TD.\n- Gestion des absences et des justificatifs.\n- Veille au respect du règlement intérieur de l'école.\n- Traitement des dossiers disciplinaires (conseil de discipline).\n- Conseil et accompagnement des étudiants en difficulté d'adaptation."
    }
  ]
});
