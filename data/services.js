// ============================================
// data/services.js — قسم الخدمات
// Guide de survie ENSTP
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
      location: "Bureau de la sécurité sociale — à l'intérieur de l'ENSTP, en face de l'incubateur et du foyer des étudiants, juste à côté du bureau du médecin.",
      procedure: "📄 Dossier à préparer :\n• Extrait de naissance\n• Certificat de résidence\n• Photocopie de la carte nationale d'identité biométrique\n• Photocopie du certificat de scolarité\n• Chèque postal barré",
      delay: "🗓️ Jours de réception : Lundi, Mardi et Jeudi"
    },

    // ========== 2. التسجيل على منصة EL HANAA ==========
    {
      titleKey: "srvElHanaa",
      icon: "💻",
      descKey: "srvElHanaaDesc",
      location: "🌐 https://elhanaa.cnas.dz/",
      procedure: "📝 Étapes d'inscription :\n1. Ouvrir le site officiel EL HANAA.\n2. Cliquer sur « S'inscrire ».\n3. Remplir le formulaire (numéro de sécurité sociale + données personnelles).\n4. Valider la demande.\n5. Se connecter avec ses identifiants.",
      delay: "🔗 Lien direct : https://elhanaa.cnas.dz/inscription.xhtml",
      link: "https://elhanaa.cnas.dz/inscription.xhtml"
    },

    // ========== 3. الانضمام للمكتبة ==========
    {
      titleKey: "srvBiblio",
      icon: "📖",
      descKey: "srvBiblioDesc",
      location: "Bibliothèque de l'ENSTP",
      procedure: "📄 Documents requis :\n• Attestation de scolarité\n• Photo d'identité récente\n• Formulaire d'inscription électronique (via QR Code devant la bibliothèque)",
      delay: "🕐 Horaires :\n• Matin : 09:00 → 11:45\n• Après-midi : 13:00 → 15:00"
    },

    // ========== 4. قواعد المكتبة ==========
    {
      titleKey: "srvBiblioRules",
      icon: "📋",
      descKey: "srvBiblioRulesDesc",
      location: "Bibliothèque de l'ENSTP",
      procedure: "🚫 Règles :\n• Silence obligatoire.\n• Interdiction de manger ou boire (sauf l'eau).\n• Respect du mobilier et propreté du lieu.",
      delay: ""
    },

    // ========== 5. الانضمام إلى نادٍ ==========
    {
      titleKey: "srvClub",
      icon: "🎭",
      descKey: "srvClubDesc",
      location: "Selon le club",
      procedure: "Contacter le responsable du club",
      delay: "Variable"
    },

    // ========== 6. منصة اقرأ ==========
    {
      titleKey: "srvIqra",
      icon: "📱",
      descKey: "srvIqraDesc",
      location: "🌐 En ligne",
      procedure: "Inscription via la plateforme",
      delay: "Immédiat",
      link: "https://iqra.dz"
    },

    // ========== 7. تبرير الغياب ==========
    {
      titleKey: "srvAbsence",
      icon: "📅",
      descKey: "srvAbsenceDesc",
      location: "Département / Scolarité",
      procedure: "Justificatif médical sous 3 jours",
      delay: "48-72h"
    },

    // ========== 8. بطاقة الطالب ==========
    {
      titleKey: "srvCarte",
      icon: "💳",
      descKey: "srvCarteDesc",
      location: "Scolarité",
      procedure: "Après inscription définitive",
      delay: "Quelques jours"
    },

    // ========== 9. ضياع بطاقة الطالب ==========
    {
      titleKey: "srvCartePerdue",
      icon: "🆘",
      descKey: "srvCartePerdueDesc",
      location: "Scolarité",
      procedure: "Déclaration de perte + 2 photos d'identité",
      delay: "1-2 semaines"
    },

    // ========== 10. شهادة مدرسية ==========
    {
      titleKey: "srvAttestation",
      icon: "📜",
      descKey: "srvAttestationDesc",
      location: "Scolarité",
      procedure: "Demande écrite (formulaire)",
      delay: "2-3 jours"
    },

    // ========== 11. كشف النقاط ==========
    {
      titleKey: "srvReleve",
      icon: "📊",
      descKey: "srvReleveDesc",
      location: "Scolarité",
      procedure: "Demande écrite",
      delay: "2-3 jours"
    },

    // ========== 12. Progress ==========
    {
      titleKey: "srvProgress",
      icon: "💻",
      descKey: "srvProgressDesc",
      location: "🌐 En ligne",
      procedure: "Identifiant fourni par la scolarité",
      delay: "Immédiat",
      link: "https://progress.enstp.dz"
    }
  ]
});
