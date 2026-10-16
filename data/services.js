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
      images: ["cnas.png"],
      location: "📍 Bureau de la sécurité sociale — à l'intérieur de l'ENSTP, en face de l'incubateur et du foyer des étudiants, juste à côté du bureau du médecin.",
      procedure: "📄 **الملف المطلوب :**\n• Extrait de naissance (شهادة الميلاد)\n• Certificat de résidence (شهادة الإقامة)\n• Photocopie de la carte nationale d'identité biométrique (نسخة من بطاقة التعريف البيومترية)\n• Photocopie du certificat de scolarité (نسخة من شهادة مدرسية)\n• Chèque postal barré (صك بريدي مشطوب)",
      delay: "📝 **الخطوات :**\n1. Préparer le dossier complet.\n2. Se présenter au bureau de la sécurité sociale à l'ENSTP.\n3. Déposer le dossier.\n4. Attendre l'obtention du numéro de sécurité sociale.\n\n🗓️ **Jours de réception :** Lundi, Mardi et Jeudi"
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

    // ========== 3. الانضمام للمكتبة (كامل) ==========
    {
      titleKey: "srvBiblio",
      icon: "📖",
      descKey: "srvBiblioDesc",
      images: ["library1.png", "library2.png", "library3.png"],
      location: "📍 Bibliothèque de l'ENSTP",
      procedure: "🕐 **Horaires d'ouverture :**\n• Session du matin : de 09:00 à 11:45\n• Session de l'après-midi : de 13:00 à 15:00\n\n📚 **Services disponibles :**\n• Prêt de livres (استعارة الكتب) : possibilité d'emprunter des références scientifiques et d'ingénierie.\n• Salle de lecture (قاعة المطالعة) : environnement calme et équipé pour l'étude individuelle et collective.\n\n💻 **Bibliothèque numérique :**\n• Plateforme électronique de recherche et de cours (Bibliothèque de l'ingénieur TP).\n• Contient des vidéos et des cours pour tous les niveaux de l'école.",
      delay: "📝 **Procédure d'inscription :**\n• Scanner le QR Code affiché dans l'annonce de la bibliothèque.\n• Ou cliquer directement sur le lien de la plateforme.\n\n📄 **Documents requis :**\n• Attestation de scolarité (شهادة مدرسية)\n• Photo d'identité récente (صورة شخصية حديثة)\n• Remplir le formulaire d'inscription électronique (استمارة التسجيل الإلكترونية)\n\n🚫 **Règles internes :**\n• Silence obligatoire (منع الصوت العالي)\n• Interdiction de manger ou boire sauf l'eau (منع الأكل والشرب إلا الماء)\n• Respect du mobilier et propreté du lieu (الحفاظ على النظافة والأثاث)",
      link: ""
    }
  ]
});
