// ============================================
// lang.js — نظام اللغات الثلاث
// Version 6.0 (Complet + Services FAQ)
// ============================================

const LANG_DATA = {
  fr: {
    // عام
    appName: "Guide de survie ENSTP", tagline: "Ton premier jour, dans ta poche.",
    back: "← Retour", home: "🏠 Accueil", search: "🔎 Chercher…",
    noResult: "Aucun résultat", tryOther: "Essayez un autre mot",
    loading: "Chargement…", welcomeTitle: "Bienvenue",
    welcomeSubtitle: "Tout ce dont tu as besoin pour ton premier jour à l'ENSTP.",

    // الأقسام
    sectionEcole: "Mon école", sectionAdmin: "Mon administration",
    sectionProfs: "Mes enseignants", sectionForum: "Forum des étudiants",
    sectionServices: "Services", sectionCite: "Cité universitaire",
    sectionTransport: "Transport", sectionShopping: "Achats & restauration",
    sectionSport: "Sport", sectionPodcast: "Podcast étudiant",
    sectionCourses: "Formations", sectionAbout: "Qui sommes-nous", sectionQR: "QR Codes",

    // مدرستي
    ecoleIntro: "Tous les lieux de l'école.",
    ecoleMapTitle: "Plan interactif de l'ENSTP",
    ecoleMapDesc: "Explore les bâtiments de l'école en un coup d'œil.",
    ecoleVideosTitle: "Visite guidée en vidéo",
    ecoleVideosDesc: "Découvre l'ENSTP à travers 6 visites filmées.",
    ecoleVideoTour: "La tour emblématique", ecoleVideoPrep: "Le département préparatoire",
    ecoleVideoAmphi: "L'Amphi A", ecoleVideoInfra: "Le département Infrastructures",
    ecoleVideoEntree: "L'entrée principale", ecoleVideoInfo: "Le centre d'informatique",

    // إدارتي
    adminIntro: "Bureaux administratifs et contacts.",
    adminDirection: "Direction", adminDirectionDesc: "Direction générale de l'école.",
    adminTebani: "Meriem Tebani", adminTebaniDesc: "Chef de Service des Classes Préparatoires (1ACP-2ACP).",
    adminMobarki: "M. Mobarki Ahmed", adminMobarkiDesc: "Chef de Département des Classes Préparatoires.",
    adminFedghouch: "M. Fedghouch Ferhat", adminFedghouchDesc: "Responsable d'Études et Directeur de Conseil de Discipline.",

    // الخدمات
    servicesIntro: "Toutes les démarches administratives et étudiants.",
    srvSecu: "Sécurité sociale (CNAS)",
    srvSecuDesc: "Inscription et suivi du dossier de sécurité sociale étudiant.",
    srvSecuLocation: "📍 Bureau de la sécurité sociale — à l'intérieur de l'ENSTP, en face de l'incubateur et du foyer des étudiants.",
    srvSecuProcedure: "📄 **Dossier requis :**\n• Extrait de naissance\n• Certificat de résidence\n• Photocopie de la carte nationale d'identité biométrique\n• Photocopie du certificat de scolarité\n• Chèque postal barré",
    srvSecuDelay: "📝 **Étapes :**\n1. Préparer le dossier complet.\n2. Se présenter au bureau.\n3. Déposer le dossier.\n4. Attendre l'obtention du numéro.\n\n🗓️ **Jours :** Lundi, Mardi et Jeudi",

    srvElHanaa: "Inscription sur EL HANAA",
    srvElHanaaDesc: "Créer un compte sur la plateforme numérique de la sécurité sociale",
    srvElHanaaLocation: "🌐 https://elhanaa.cnas.dz/",
    srvElHanaaProcedure: "📝 Étapes :\n1. Ouvrir le site.\n2. Cliquer sur « S'inscrire ».\n3. Remplir le formulaire.\n4. Valider.\n5. Se connecter.",
    srvElHanaaDelay: "🔗 Lien direct : https://elhanaa.cnas.dz/inscription.xhtml",

    srvBiblio: "S'inscrire à la Bibliothèque",
    srvBiblioDesc: "Profiter des services de la bibliothèque physique et numérique",
    srvBiblioLocation: "📍 Bibliothèque de l'ENSTP",
    srvBiblioProcedure: "🕐 **Horaires :**\n• Matin : 09:00 à 11:45\n• Après-midi : 13:00 à 15:00\n\n📚 **Services :**\n• Prêt de livres\n• Salle de lecture\n\n💻 **Bibliothèque numérique :**\n• Plateforme électronique de recherche.",
    srvBiblioDelay: "📝 **Inscription :**\n• Scanner le QR Code.\n• Fournir Attestation de scolarité + Photo.\n\n🚫 **Règles :** Silence, pas de nourriture.",

    srvFaqTitle: "FAQ — Administration",
    srvFaqDesc: "Réponses aux questions fréquentes.",
    srvFaqCat1: "1. Inscriptions et documents",
    srvFaqCat2: "2. Programme pédagogique",
    srvFaqCat3: "3. Discipline et absences",
    srvFaqCat4: "4. Examens",
    srvFaqQ1: "Comment obtenir ma carte d'étudiant ?",
    srvFaqA1: "Au début de l'année universitaire après l'inscription.",
    srvFaqQ2: "Où obtenir mon relevé de notes ?",
    srvFaqA2: "Auprès du service de l'enseignement après les délibérations.",
    srvFaqQ3: "Durée des études préparatoires ?",
    srvFaqA3: "Deux (2) ans de formation intensive.",
    srvFaqQ4: "Quelles matières sont enseignées ?",
    srvFaqA4: "Maths, Physique, Chimie, Info, Dessin et Langues.",
    srvFaqQ5: "Comment justifier une absence ?",
    srvFaqA5: "Présenter un justificatif sous 48h au service de l'enseignement.",
    srvFaqQ6: "Sanction pour absences injustifiées ?",
    srvFaqQ7: "Comment passer en 2ème année ?",
    srvFaqA6: "Perte de points de TD. Plus de 3 absences = exclusion de la matière.",
    srvFaqA7: "Moyenne annuelle >= 10/20 sans note éliminatoire."
  },

  ar: {
    // عام
    appName: "دليل البقاء ENSTP", tagline: "يومك الأول، في جيبك.",
    back: "→ رجوع", home: "🏠 الرئيسية", search: "🔎 ابحث…",
    noResult: "لا توجد نتائج", tryOther: "جرّب كلمة أخرى",
    loading: "جارٍ التحميل…", welcomeTitle: "مرحباً",
    welcomeSubtitle: "كل ما تحتاجه ليومك الأول في المدرسة.",

    // الأقسام
    sectionEcole: "مدرستي", sectionAdmin: "إدارتي",
    sectionProfs: "أساتذتي", sectionForum: "ملتقى الطلبة",
    sectionServices: "الخدمات", sectionCite: "الإقامة الجامعية",
    sectionTransport: "النقل", sectionShopping: "التسوق والأكل",
    sectionSport: "الرياضة", sectionPodcast: "بودكاست الطالب",
    sectionCourses: "دورات", sectionAbout: "من نحن", sectionQR: "رموز QR",

    // مدرستي
    ecoleIntro: "كل أماكن المدرسة.",
    ecoleMapTitle: "خريطة المدرسة التفاعلية",
    ecoleMapDesc: "استكشف مباني المدرسة بنظرة واحدة.",
    ecoleVideosTitle: "جولة مصوّرة داخل المدرسة",
    ecoleVideosDesc: "اكتشف المدرسة من خلال 6 زيارات بالفيديو.",
    ecoleVideoTour: "برج المدرسة", ecoleVideoPrep: "القسم التحضيري",
    ecoleVideoAmphi: "المدرج A", ecoleVideoInfra: "قسم المنشآت القاعدية",
    ecoleVideoEntree: "المدخل الرئيسي", ecoleVideoInfo: "مركز الإعلام الآلي",

    // إدارتي
    adminIntro: "المكاتب الإدارية وجهات الاتصال.",
    adminDirection: "الإدارة", adminDirectionDesc: "الإدارة العامة للمدرسة.",
    adminTebani: "مريم تيباني", adminTebaniDesc: "رئيسة مصلحة الأقسام التحضيرية.",
    adminMobarki: "أ. مباركي أحمد", adminMobarkiDesc: "رئيس قسم الأقسام التحضيرية.",
    adminFedghouch: "أ. فدغوش فرحات", adminFedghouchDesc: "مسؤول الدراسات ورئيس مجلس التأديب.",

    // الخدمات
    servicesIntro: "كل الإجراءات الإدارية والطلابية.",
    srvSecu: "الضمان الاجتماعي (CNAS)",
    srvSecuDesc: "التسجيل والحصول على بطاقة الضمان الاجتماعي",
    srvSecuLocation: "📍 مكتب الضمان الاجتماعي — داخل المدرسة، مقابل الحاضنة.",
    srvSecuProcedure: "📄 **الملف المطلوب :**\n• شهادة الميلاد\n• شهادة الإقامة\n• نسخة من بطاقة التعريف\n• نسخة من شهادة مدرسية\n• صك بريدي مشطوب",
    srvSecuDelay: "📝 **الخطوات :**\n1. تحضير الملف.\n2. التوجه للمكتب.\n3. إيداع الملف.\n4. انتظار الرقم.\n\n🗓️ **أيام الاستقبال :** الاثنين، الثلاثاء والخميس",

    srvElHanaa: "التسجيل على منصة EL HANAA",
    srvElHanaaDesc: "إنشاء حساب على المنصة الرقمية للضمان الاجتماعي",
    srvElHanaaLocation: "🌐 https://elhanaa.cnas.dz/",
    srvElHanaaProcedure: "📝 خطوات التسجيل :\n1. فتح الموقع.\n2. النقر على « S'inscrire ».\n3. ملء الاستمارة.\n4. تأكيد الطلب.\n5. تسجيل الدخول.",
    srvElHanaaDelay: "🔗 الرابط المباشر : https://elhanaa.cnas.dz/inscription.xhtml",

    srvBiblio: "الانضمام للمكتبة",
    srvBiblioDesc: "الاستفادة من خدمات المكتبة الحضورية والرقمية",
    srvBiblioLocation: "📍 مكتبة المدرسة (ENSTP)",
    srvBiblioProcedure: "🕐 **أوقات العمل :**\n• الصباح : 09:00 إلى 11:45\n• المساء : 13:00 إلى 15:00\n\n📚 **الخدمات :**\n• استعارة الكتب\n• قاعة المطالعة",
    srvBiblioDelay: "📝 **إجراءات التسجيل :**\n• مسح رمز QR.\n• إحضار شهادة مدرسية + صورة.\n\n🚫 **القواعد :** منع الصوت العالي والأكل.",

    srvFaqTitle: "الأسئلة الشائعة",
    srvFaqDesc: "أجوبة على أكثر الأسئلة تكراراً.",
    srvFaqCat1: "أولاً: التسجيلات والوثائق",
    srvFaqCat2: "ثانياً: البرنامج البيداغوجي",
    srvFaqCat3: "ثالثاً: الانضباط والغيابات",
    srvFaqCat4: "رابعاً: الامتحانات",
    srvFaqQ1: "كيف أحصل على بطاقة الطالب؟",
    srvFaqA1: "في بداية السنة الجامعية بعد التسجيل الإداري.",
    srvFaqQ2: "من أين أتحصل على كشف النقاط؟",
    srvFaqA2: "من مصلحة التدريس بعد المداولات.",
    srvFaqQ3: "ما هي مدة الدراسة؟",
    srvFaqA3: "سنتان (2) من التكوين المكثف.",
    srvFaqQ4: "ما هي المواد الأساسية؟",
    srvFaqA4: "الرياضيات، الفيزياء، الكيمياء، الإعلام الآلي، الرسم واللغات.",
    srvFaqQ5: "كيف أبرر الغياب؟",
    srvFaqA5: "تقديم وثيقة تبرير في غضون 48 ساعة.",
    srvFaqQ6: "ما هي عقوبة الغيابات؟",
    srvFaqQ7: "كيف يتم الانتقال للسنة الثانية؟",
    srvFaqA6: "خصم نقاط. أكثر من 3 غيابات = إقصاء من المادة.",
    srvFaqA7: "معدل سنوي يساوي أو يفوق 10/20 بدون علامة إقصائية."
  },

  en: {
    // عام
    appName: "ENSTP Survival Guide", tagline: "Your first day, in your pocket.",
    back: "← Back", home: "🏠 Home", search: "🔎 Search…",
    noResult: "No results", tryOther: "Try another word",
    loading: "Loading…", welcomeTitle: "Welcome",
    welcomeSubtitle: "Everything you need for your first day at ENSTP.",

    // الأقسام
    sectionEcole: "My school", sectionAdmin: "My administration",
    sectionProfs: "My teachers", sectionForum: "Student forum",
    sectionServices: "Services", sectionCite: "Student residence",
    sectionTransport: "Transport", sectionShopping: "Shopping & food",
    sectionSport: "Sport", sectionPodcast: "Student podcast",
    sectionCourses: "Courses", sectionAbout: "Who we are", sectionQR: "QR Codes",

    // مدرستي
    ecoleIntro: "All school places.",
    ecoleMapTitle: "Interactive ENSTP Map",
    ecoleMapDesc: "Explore the school's buildings at a glance.",
    ecoleVideosTitle: "Video Guided Tour",
    ecoleVideosDesc: "Discover ENSTP through 6 filmed tours.",
    ecoleVideoTour: "The iconic tower", ecoleVideoPrep: "Preparatory department",
    ecoleVideoAmphi: "Amphi A", ecoleVideoInfra: "Infrastructures department",
    ecoleVideoEntree: "Main entrance", ecoleVideoInfo: "Computer center",

    // إدارتي
    adminIntro: "Administrative offices and contacts.",
    adminDirection: "Direction", adminDirectionDesc: "General management of the school.",
    adminTebani: "Meriem Tebani", adminTebaniDesc: "Head of Preparatory Classes Service.",
    adminMobarki: "Mr. Mobarki Ahmed", adminMobarkiDesc: "Head of Preparatory Classes Department.",
    adminFedghouch: "Mr. Fedghouch Ferhat", adminFedghouchDesc: "Head of Studies and Discipline Council.",

    // الخدمات
    servicesIntro: "All administrative and student procedures.",
    srvSecu: "Social Security (CNAS)",
    srvSecuDesc: "Registration and obtaining the social security card",
    srvSecuLocation: "📍 Social Security Office — inside ENSTP.",
    srvSecuProcedure: "📄 **Required documents:**\n• Birth certificate\n• Residence certificate\n• ID card copy\n• School certificate copy\n• Crossed postal check",
    srvSecuDelay: "📝 **Steps:**\n1. Prepare file.\n2. Go to office.\n3. Submit.\n4. Wait for number.\n\n🗓️ **Days:** Mon, Tue, Thu",

    srvElHanaa: "EL HANAA Registration",
    srvElHanaaDesc: "Create an account on the digital social security platform",
    srvElHanaaLocation: "🌐 https://elhanaa.cnas.dz/",
    srvElHanaaProcedure: "📝 Steps:\n1. Open site.\n2. Click Register.\n3. Fill form.\n4. Validate.\n5. Login.",
    srvElHanaaDelay: "🔗 Direct link: https://elhanaa.cnas.dz/inscription.xhtml",

    srvBiblio: "Join the Library",
    srvBiblioDesc: "Enjoy physical and digital library services",
    srvBiblioLocation: "📍 ENSTP Library",
    srvBiblioProcedure: "🕐 **Hours:**\n• Morning: 09:00 - 11:45\n• Afternoon: 13:00 - 15:00\n\n📚 **Services:**\n• Book lending\n• Reading room",
    srvBiblioDelay: "📝 **Registration:**\n• Scan QR Code.\n• Bring certificate + Photo.\n\n🚫 **Rules:** Silence, no food.",

    srvFaqTitle: "FAQ — Administration",
    srvFaqDesc: "Answers to frequent questions.",
    srvFaqCat1: "1. Registrations & documents",
    srvFaqCat2: "2. Academic program",
    srvFaqCat3: "3. Discipline & absences",
    srvFaqCat4: "4. Exams",
    srvFaqQ1: "How to get my student card?",
    srvFaqA1: "At the start of the year after registration.",
    srvFaqQ2: "Where to get my transcript?",
    srvFaqA2: "From the teaching service after deliberations.",
    srvFaqQ3: "Duration of preparatory studies?",
    srvFaqA3: "Two (2) years of intensive training.",
    srvFaqQ4: "What subjects are taught?",
    srvFaqA4: "Math, Physics, Chemistry, CS, Drawing, Languages.",
    srvFaqQ5: "How to justify an absence?",
    srvFaqA5: "Present proof within 48h.",
    srvFaqQ6: "Penalty for unjustified absences?",
    srvFaqQ7: "How to pass to 2nd year?",
    srvFaqA6: "Loss of points. >3 absences = exclusion.",
    srvFaqA7: "Average >= 10/20 without eliminatory grade."
  }
};

function t(key, lang) {
  const l = lang || localStorage.getItem('lang') || 'fr';
  const data = LANG_DATA[l] || LANG_DATA.fr;
  return data[key] || LANG_DATA.fr[key] || key;
}
function getCurrentLang() { return localStorage.getItem('lang') || 'fr'; }
function setCurrentLang(lang) {
  if (['fr', 'ar', 'en'].includes(lang)) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    return true;
  }
  return false;
}
if (typeof window !== 'undefined') {
  window.LANG_DATA = LANG_DATA; window.t = t;
  window.getCurrentLang = getCurrentLang; window.setCurrentLang = setCurrentLang;
}
