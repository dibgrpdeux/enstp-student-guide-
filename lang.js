// ============================================
// lang.js — نظام اللغات الثلاث
// Guide de survie ENSTP
// Version 6.0 — Complet (Corrigé)
// ============================================

const LANG_DATA = {
  // ============================================
  // FRANÇAIS
  // ============================================
  fr: {
    // ============ عام ============
    appName: "Guide de survie ENSTP",
    tagline: "Ton premier jour, dans ta poche.",
    back: "← Retour",
    home: "🏠 Accueil",
    search: "🔎 Chercher : salle, prof, service…",
    noResult: "Aucun résultat",
    tryOther: "Essayez un autre mot",
    loading: "Chargement…",
    welcomeTitle: "Bienvenue",
    welcomeSubtitle: "Tout ce dont tu as besoin pour ton premier jour à l'ENSTP.",

    // ============ عناوين الأقسام ============
    sectionEcole: "Mon école",
    sectionAdmin: "Mon administration",
    sectionProfs: "Mes enseignants",
    sectionForum: "Forum des étudiants",
    sectionServices: "Services",
    sectionCite: "Cité universitaire",
    sectionTransport: "Transport",
    sectionShopping: "Achats & restauration",
    sectionSport: "Sport",
    sectionPodcast: "Podcast étudiant",
    sectionCourses: "Formations",
    sectionAbout: "Qui sommes-nous",
    sectionQR: "QR Codes",

    // ============ 1. مدرستي ============
    ecoleIntro: "Tous les lieux de l'école : salles, amphis, labos, services.",
    ecoleMapTitle: "🗺️ Plan interactif de l'ENSTP",
    ecoleMapDesc: "Explore les bâtiments, amphis, laboratoires et services de l'école en un coup d'œil.",
    ecoleVideosTitle: "🎬 Visite guidée en vidéo",
    ecoleVideosDesc: "Découvre l'ENSTP à travers 6 visites filmées : du portail d'entrée jusqu'aux salles de TP.",
    ecoleVideoTour: "🏢 La tour emblématique de l'ENSTP",
    ecoleVideoPrep: "📘 Immersion au département préparatoire",
    ecoleVideoAmphi: "🏛️ L'Amphi A : le cœur des cours magistraux",
    ecoleVideoInfra: "🏗️ Le département Infrastructures de Base",
    ecoleVideoEntree: "🚪 Bienvenue à l'ENSTP : l'entrée principale",
    ecoleVideoInfo: "💻 Le centre d'informatique : ton outil numérique",

    // ============ 2. أساتذتي ============
    profsIntro: "Recherche un enseignant par matière ou par nom.",
    
    // ============ 3. إدارتي ============
    adminIntro: "Bureaux administratifs et contacts.",
    adminDirection: "Direction Générale",
    adminDirectionDesc: "Direction générale de l'école.",
    adminTebani: "Meriem Tebani",
    adminTebaniDesc: "Chef de Service des Classes Préparatoires (1ACP-2ACP).",
    adminTebaniDetails: "Missions pour les étudiants :\n- Accompagnement administratif tout au long du parcours en Classes préparatoires.\n- Information et orientation concernant les procédures et formalités de scolarité.\n- Délivrance des attestations et documents administratifs relevant du service.\n- Suivi des inscriptions, des résultats et des dossiers scolaires.\n- Accompagnement dans l'utilisation des outils numériques mis à leur disposition (messagerie institutionnelle, Google Classroom).\n- Traitement des demandes et des réclamations relatives à leur scolarité.\n- Prise en charge de toute autre demande relevant de la scolarité et orientation des étudiants vers les services compétents selon leurs besoins.",
    adminMobarki: "M. Mobarki Ahmed",
    adminMobarkiDesc: "Chef de Département des Classes Préparatoires.",
    adminMobarkiDetails: "Missions pour les étudiants :\n- Supervision générale du bon déroulement des études.\n- Validation des programmes et des emplois du temps.\n- Prise de décisions concernant les situations académiques particulières.\n- Orientation des étudiants vers les services compétents en cas de problème majeur.",
    adminFedghouch: "M. Fedghouch Ferhat",
    adminFedghouchDesc: "Responsable d'Études et Directeur de Conseil de Discipline.",
    adminFedghouchDetails: "Missions pour les étudiants :\n- Suivi de l'assiduité et de la ponctualité aux cours et TD.\n- Gestion des absences et des justificatifs.\n- Veille au respect du règlement intérieur de l'école.\n- Traitement des dossiers disciplinaires (conseil de discipline).\n- Conseil et accompagnement des étudiants en difficulté d'adaptation.",

    // ============ 4. الخدمات ============
    servicesIntro: "Toutes les démarches administratives et étudiants.",
    srvSecu: "Sécurité sociale (CNAS)",
    srvSecuDesc: "Inscription et suivi du dossier de sécurité sociale étudiant.",
    srvSecuLocation: "📍 Bureau de la sécurité sociale — à l'intérieur de l'ENSTP, en face de l'incubateur et du foyer des étudiants, juste à côté du bureau du médecin.",
    srvSecuProcedure: "📄 **Dossier requis :**\n• Extrait de naissance\n• Certificat de résidence\n• Photocopie de la carte nationale d'identité biométrique\n• Photocopie du certificat de scolarité\n• Chèque postal barré",
    srvSecuDelay: "📝 **Étapes :**\n1. Préparer le dossier complet.\n2. Se présenter au bureau de la sécurité sociale à l'ENSTP.\n3. Déposer le dossier.\n4. Attendre l'obtention du numéro de sécurité sociale.\n\n🗓️ **Jours de réception :** Lundi, Mardi et Jeudi",

    srvElHanaa: "Inscription sur la plateforme EL HANAA",
    srvElHanaaDesc: "Créer un compte sur la plateforme numérique de la sécurité sociale",
    srvElHanaaLocation: "🌐 https://elhanaa.cnas.dz/",
    srvElHanaaProcedure: "📝 Étapes d'inscription :\n1. Ouvrir le site officiel EL HANAA.\n2. Cliquer sur « S'inscrire ».\n3. Remplir le formulaire (numéro de sécurité sociale + données personnelles).\n4. Valider la demande.\n5. Se connecter avec ses identifiants.",
    srvElHanaaDelay: "🔗 Lien direct : https://elhanaa.cnas.dz/inscription.xhtml",

    srvBiblio: "S'inscrire à la Bibliothèque",
    srvBiblioDesc: "Profiter des services de la bibliothèque physique et numérique",
    srvBiblioLocation: "📍 Bibliothèque de l'ENSTP",
    srvBiblioProcedure: "🕐 **Horaires d'ouverture :**\n• Session du matin : de 09:00 à 11:45\n• Session de l'après-midi : de 13:00 à 15:00\n\n📚 **Services disponibles :**\n• Prêt de livres : possibilité d'emprunter des références scientifiques et d'ingénierie.\n• Salle de lecture : environnement calme et équipé pour l'étude individuelle et collective.\n\n💻 **Bibliothèque numérique :**\n• Plateforme électronique de recherche et de cours (Bibliothèque de l'ingénieur TP).\n• Contient des vidéos et des cours pour tous les niveaux de l'école.",
    srvBiblioDelay: "📝 **Procédure d'inscription :**\n• Scanner le QR Code affiché dans l'annonce de la bibliothèque.\n• Ou cliquer directement sur le lien de la plateforme.\n\n📄 **Documents requis :**\n• Attestation de scolarité\n• Photo d'identité récente\n• Remplir le formulaire d'inscription électronique\n\n🚫 **Règles internes :**\n• Silence obligatoire\n• Interdiction de manger ou boire sauf l'eau\n• Respect du mobilier et propreté du lieu",

    srvFaqTitle: "FAQ — Administration & Scolarité",
    srvFaqDesc: "Réponses aux questions les plus fréquentes sur l'inscription, les études, les absences et les examens",
    srvFaqCat1: "1. Inscriptions et documents administratifs",
    srvFaqCat2: "2. Système d'études et programme pédagogique",
    srvFaqCat3: "3. Discipline et justification des absences",
    srvFaqCat4: "4. Examens et passage au 2ème cycle",
    srvFaqQ1: "Comment puis-je obtenir ma carte d'étudiant ?",
    srvFaqA1: "Elle est délivrée par le service des inscriptions du département préparatoire au début de la première année universitaire, après la finalisation de l'inscription administrative, le paiement des droits et la fourniture de photos d'identité.",
    srvFaqQ2: "Où puis-je obtenir mon relevé de notes ?",
    srvFaqA2: "Il est retiré en version papier et signé auprès du service de l'enseignement du département préparatoire après les délibérations. Vous pouvez également consulter vos notes périodiquement via la plateforme numérique (Progrès).",
    srvFaqQ3: "Quelle est la durée des études au département préparatoire ?",
    srvFaqA3: "La durée des études est de deux (2) ans, durant lesquels l'étudiant reçoit une formation de base intensive le préparant à la phase de spécialisation.",
    srvFaqQ4: "Quelles sont les matières et programmes principaux enseignés ?",
    srvFaqA4: "Le programme est axé sur les mathématiques (algèbre et analyse), la physique (mécanique et électricité), la chimie, l'informatique, le dessin technique et les langues étrangères.",
    srvFaqQ5: "Comment puis-je justifier une absence ?",
    srvFaqA5: "Vous devez présenter un justificatif légal (certificat médical ou convocation officielle) au service de l'enseignement dans les 48 heures suivant la date de l'absence.",
    srvFaqQ6: "Quelle est la sanction pour les absences injustifiées ?",
    srvFaqA6: "Les absences injustifiées entraînent une perte de points de contrôle continu. Si elles dépassent 3 absences injustifiées en TD ou TP, l'étudiant est automatiquement exclu de la matière et privé de son examen.",
    srvFaqQ7: "Comment se fait le passage de la 1ère à la 2ème année préparatoire ?",
    srvFaqA7: "Pour réussir, il faut obtenir une moyenne annuelle générale égale ou supérieure à 10/20, sans avoir de note éliminatoire dans les matières fondamentales.",

    // ============ 5. التسوق ============
    shoppingIntro: "Manger, acheter, se soigner autour de l'école.",

    // ============ 6. النقل ============
    transportIntro: "Bus, taxis, métro, train, tramway.",

    // ============ 7. الإقامة ============
    citeIntro: "Vie à la cité universitaire.",
    citeGaridi: "Résidence Garidi",
    citeGaridiDesc: "La plus proche de l'ENSTP. Idéale sans voiture.",
    citeSaid: "Résidence Saïd Hamdine",
    citeSaidDesc: "À quelques minutes de bus de l'école.",
    citeRouiba: "Résidence Ruisseau (Hussein Dey)",
    citeRouibaDesc: "Située à Hussein Dey, à environ 30 min de l'école en transport.",

    // ============ 8. الرياضة ============
    sportIntro: "Sport universitaire et hors campus.",

    // ============ 9. بودكاست ============
    podcastIntro: "Podcast étudiant ENSTP.",

    // ============ 10. دورات ============
    coursesIntro: "Formations et cours pour t'aider.",

    // ============ 11. من نحن ============
    aboutIntro: "Un projet étudiant, 100% gratuit.",
    aboutMission: "Notre mission",
    aboutMissionDesc: "Aider chaque nouvel étudiant à s'intégrer rapidement et à ne jamais rester seul face à un problème.",
    aboutTeam: "Notre équipe",
    aboutTeamDesc: "Étudiants de 1ère année Ingénieur, Groupe 2, Infrastructures de Base, promotion 2024/2025.",
    aboutValues: "Nos valeurs",
    aboutValuesDesc: "Entraide, gratuité, respect, transparence, confiance.",
    aboutJoin: "Rejoindre l'équipe",
    aboutJoinDesc: "Contacte-nous via le groupe officiel de la promo.",
    aboutWarning: "Avertissement",
    aboutWarningDesc: "Les informations sont fournies à titre indicatif. Vérifie toujours auprès de l'administration.",
    aboutUpdate: "Dernière mise à jour",
    aboutUpdateDesc: "Octobre 2026 — Version 3.0",

    // ============ 12. QR ============
    qrIntro: "Scannez ces QR codes pour accéder directement aux sections.",

    // ============ Text Size ============
    tspTitle: "Taille du texte",
    tsSmall: "Petit",
    tsNormal: "Normal",
    tsLarge: "Grand",
    tsXLarge: "Très grand",

    // ============ Forum ============
    forumIntro: "Rencontrez les étudiants de l'ENSTP à travers toute l'Algérie.",
    forumDesc: "Rejoignez la communauté ENSTP.",
    forumFeatures: "Ce que vous pouvez faire",
    forumFeature1: "🌍 Discuter dans la salle générale",
    forumFeature2: "📍 Rejoindre la salle de votre wilaya (58 wilayas)",
    forumFeature3: "👥 Voir tous les étudiants inscrits",
    forumEnter: "Entrer dans le forum",
    forumRegister: "Créer un compte",
    forumLogin: "Se connecter",
    forumNote: "Important",
    forumNoteText: "Inscription uniquement avec un email @enstp.edu.dz. Vos informations restent privées.",

    // ============ Footer ============
    footerTitle: "Guide de survie ENSTP",
    footerSub: "Un projet des étudiants de 1ère année Ingénieur, Groupe 2 — Infrastructures de Base.",
    footerFree: "100% gratuit · 3 langues · Hors ligne",
    footerAccess: "Accéder au guide"
  },

  // ============================================
  // العربية
  // ============================================
  ar: {
    appName: "دليل البقاء ENSTP",
    tagline: "يومك الأول، في جيبك.",
    back: "→ رجوع",
    home: "🏠 الرئيسية",
    search: "🔎 ابحث: قاعة، أستاذ، خدمة…",
    noResult: "لا توجد نتائج",
    tryOther: "جرّب كلمة أخرى",
    loading: "جارٍ التحميل…",
    welcomeTitle: "مرحباً",
    welcomeSubtitle: "كل ما تحتاجه ليومك الأول في المدرسة.",

    sectionEcole: "مدرستي",
    sectionAdmin: "إدارتي",
    sectionProfs: "أساتذتي",
    sectionForum: "ملتقى الطلبة",
    sectionServices: "الخدمات",
    sectionCite: "الإقامة الجامعية",
    sectionTransport: "النقل",
    sectionShopping: "التسوق والأكل",
    sectionSport: "الرياضة",
    sectionPodcast: "بودكاست الطالب",
    sectionCourses: "دورات",
    sectionAbout: "من نحن",
    sectionQR: "رموز QR",

    ecoleIntro: "كل أماكن المدرسة.",
    ecoleMapTitle: "🗺️ خريطة المدرسة التفاعلية",
    ecoleMapDesc: "استكشف مباني المدرسة، المدرجات، المخابر والخدمات بنظرة واحدة.",
    ecoleVideosTitle: "🎬 جولة مصوّرة داخل المدرسة",
    ecoleVideosDesc: "اكتشف المدرسة من خلال 6 زيارات بالفيديو.",
    ecoleVideoTour: "🏢 برج المدرسة: رمز ENSTP",
    ecoleVideoPrep: "📘 جولة في القسم التحضيري",
    ecoleVideoAmphi: "🏛️ المدرج A: قلب المحاضرات",
    ecoleVideoInfra: "🏗️ قسم المنشآت القاعدية",
    ecoleVideoEntree: "🚪 مرحباً بك في المدرسة: المدخل الرئيسي",
    ecoleVideoInfo: "💻 مركز الإعلام الآلي: أداتك الرقمية",

    profsIntro: "ابحث عن أستاذ حسب المادة أو الاسم.",

    adminIntro: "المكاتب الإدارية وجهات الاتصال.",
    adminDirection: "الإدارة العامة",
    adminDirectionDesc: "الإدارة العامة للمدرسة.",
    adminTebani: "مريم تيباني",
    adminTebaniDesc: "رئيسة مصلحة الأقسام التحضيرية (1ACP-2ACP).",
    adminTebaniDetails: "المهام الموجهة للطلبة:\n- ضمان المتابعة الإدارية للطلبة طوال مسارهم في الأقسام التحضيرية.\n- الإعلام والتوجيه بخصوص إجراءات وشكليات التمدرس.\n- تسليم الشهادات والوثائق الإدارية التي تدخل في اختصاص المصلحة.\n- متابعة التسجيلات، النتائج والملفات المدرسية.\n- مرافقة الطلبة في استخدام الأدوات الرقمية الموضوعة تحت تصرفهم (البريد الإلكتروني المؤسسي، Google Classroom).\n- معالجة الطلبات والشكاوى المتعلقة بتمدرسهم.\n- التكفل بكل طلب آخر يتعلق بالتمدرس وتوجيه الطلبة نحو المصالح المختصة حسب احتياجاتهم.",
    adminMobarki: "أ. مباركي أحمد",
    adminMobarkiDesc: "رئيس قسم الأقسام التحضيرية.",
    adminMobarkiDetails: "المهام الموجهة للطلبة:\n- الإشراف العام على سير الدراسة.\n- المصادقة على البرامج والتوقيتات.\n- اتخاذ القرارات المتعلقة بالحالات الأكاديمية الخاصة.\n- توجيه الطلبة نحو المصالح المختصة في حالة وجود مشكلة كبرى.",
    adminFedghouch: "أ. فدغوش فرحات",
    adminFedghouchDesc: "مسؤول الدراسات ورئيس مجلس التأديب.",
    adminFedghouchDetails: "المهام الموجهة للطلبة:\n- متابعة المواظبة والانتظام في الدروس والأعمال الموجهة.\n- إدارة الغيابات والمبررات.\n- السهر على احترام النظام الداخلي للمدرسة.\n- معالجة الملفات التأديبية (مجلس التأديب).\n- تقديم المشورة ومرافقة الطلبة الذين يواجهون صعوبات في التكيف.",

    servicesIntro: "كل الإجراءات الإدارية والطلابية.",
    srvSecu: "الضمان الاجتماعي (CNAS)",
    srvSecuDesc: "التسجيل والحصول على بطاقة الضمان الاجتماعي",
    srvSecuLocation: "📍 مكتب الضمان الاجتماعي — داخل المدرسة، مقابل الحاضنة ونادي الطلبة، بجوار مكتب الطبيب.",
    srvSecuProcedure: "📄 **الملف المطلوب :**\n• شهادة الميلاد\n• شهادة الإقامة\n• نسخة من بطاقة التعريف البيومترية\n• نسخة من شهادة مدرسية\n• صك بريدي مشطوب",
    srvSecuDelay: "📝 **الخطوات :**\n1. تحضير الملف كاملاً.\n2. التوجه إلى مكتب الضمان الاجتماعي بالمدرسة.\n3. إيداع الملف.\n4. انتظار الحصول على رقم الضمان الاجتماعي.\n\n🗓️ **أيام الاستقبال :** الاثنين، الثلاثاء والخميس",

    srvElHanaa: "التسجيل على منصة EL HANAA",
    srvElHanaaDesc: "إنشاء حساب على المنصة الرقمية للضمان الاجتماعي",
    srvElHanaaLocation: "🌐 https://elhanaa.cnas.dz/",
    srvElHanaaProcedure: "📝 خطوات التسجيل :\n1. فتح الموقع الرسمي EL HANAA.\n2. النقر على « S'inscrire ».\n3. ملء الاستمارة (رقم الضمان الاجتماعي + البيانات الشخصية).\n4. تأكيد الطلب.\n5. تسجيل الدخول باستخدام بياناتك.",
    srvElHanaaDelay: "🔗 الرابط المباشر : https://elhanaa.cnas.dz/inscription.xhtml",

    srvBiblio: "الانضمام للمكتبة",
    srvBiblioDesc: "الاستفادة من خدمات المكتبة الحضورية والرقمية",
    srvBiblioLocation: "📍 مكتبة المدرسة (ENSTP)",
    srvBiblioProcedure: "🕐 **أوقات العمل :**\n• الفترة الصباحية : من 09:00 إلى 11:45\n• الفترة المسائية : من 13:00 إلى 15:00\n\n📚 **الخدمات المتاحة :**\n• استعارة الكتب : إمكانية استعارة المراجع العلمية والهندسية.\n• قاعة المطالعة : بيئة هادئة ومجهزة للدراسة الفردية والجماعية.\n\n💻 **المكتبة الرقمية :**\n• منصة إلكترونية للبحث والدروس (Bibliothèque de l'ingénieur TP).\n• تحتوي على فيديوهات ودروس لجميع المستويات.",
    srvBiblioDelay: "📝 **إجراءات التسجيل :**\n• مسح رمز الاستجابة السريعة (QR Code) الموجود في إعلان المكتبة.\n• أو النقر مباشرة على رابط المنصة.\n\n📄 **الوثائق المطلوبة :**\n• شهادة مدرسية\n• صورة شخصية حديثة\n• ملء استمارة التسجيل الإلكترونية\n\n🚫 **القواعد الداخلية :**\n• منع الصوت العالي\n• منع الأكل والشرب إلا الماء\n• الحفاظ على النظافة والأثاث",

    srvFaqTitle: "الأسئلة الشائعة (الإدارة والدراسة)",
    srvFaqDesc: "أجوبة على أكثر الأسئلة تكراراً حول التسجيل، الدراسة، الغيابات والامتحانات",
    srvFaqCat1: "أولاً: التسجيلات والوثائق الإدارية",
    srvFaqCat2: "ثانياً: نظام الدراسة والبرنامج البيداغوجي",
    srvFaqCat3: "ثالثاً: الانضباط وتبرير الغيابات",
    srvFaqCat4: "رابعاً: الامتحانات والانتقال للطور الثاني",
    srvFaqQ1: "كيف يمكنني الحصول على بطاقة الطالب؟",
    srvFaqA1: "يتم تسليمها من طرف مصلحة التسجيلات بالقسم التحضيري في بداية السنة الجامعية الأولى.",
    srvFaqQ2: "من أين أتحصل على كشف النقاط؟",
    srvFaqA2: "يُستلم ورقيّاً ومختوماً من مصلحة التدريس بالقسم التحضيري بعد المداولات.",
    srvFaqQ3: "ما هي مدة الدراسة في القسم التحضيري بالمدرسة؟",
    srvFaqA3: "مدة الدراسة هي سنتان (2)، يتلقى فيهما الطالب تكويناً قاعدياً مكثفاً.",
    srvFaqQ4: "ما هي المواد والبرامج الأساسية التي يتم تدريسها؟",
    srvFaqA4: "يرتكز البرنامج على الرياضيات، الفيزياء، الكيمياء، الإعلام الآلي، الرسم التقني، واللغات الأجنبية.",
    srvFaqQ5: "كيف يمكنني تبرير الغياب؟",
    srvFaqA5: "يجب تقديم وثيقة تبرير قانونية (شهادة طبية أو استدعاء رسمي) إلى مصلحة التدريس في غضون 48 ساعة.",
    srvFaqQ6: "ما هي عقوبة الغيابات غير المبررة في القسم التحضيري؟",
    srvFaqA6: "الغيابات غير المبررة تؤدي لخصم علامات المراقبة المستمرة، وإذا تجاوزت 3 غيابات يتم إقصاء الطالب تلقائياً من المادة.",
    srvFaqQ7: "كيف يتم الانتقال من السنة الأولى إلى السنة الثانية تحضيري؟",
    srvFaqA7: "يشترط للنجاح الحصول على معدل سنوي عام يساوي أو يفوق 10 من 20، مع عدم الحصول على علامة إقصائية.",

    shoppingIntro: "الأكل، الشراء، العلاج حول المدرسة.",
    transportIntro: "حافلات، تكاسي، مترو، قطار، ترامواي.",

    citeIntro: "الحياة في الإقامة الجامعية.",
    citeGaridi: "إقامة قاريدي",
    citeGaridiDesc: "الأقرب للمدرسة. مثالية لمن لا يملك سيارة.",
    citeSaid: "إقامة سعيد حمدين",
    citeSaidDesc: "على بعد دقائق بالحافلة من المدرسة.",
    citeRouiba: "إقامة الرويسو (حسين داي)",
    citeRouibaDesc: "تقع في حسين داي، على بعد حوالي 30 دقيقة من المدرسة بالنقل.",

    sportIntro: "الرياضة الجامعية وخارج الحرم.",
    podcastIntro: "بودكاست الطالب ENSTP.",
    coursesIntro: "دورات وتكوينات لمساعدتك.",

    aboutIntro: "مشروع طلابي، 100% مجاني.",
    aboutMission: "مهمتنا",
    aboutMissionDesc: "مساعدة كل طالب جديد على الاندماج بسرعة وعدم البقاء وحيداً أمام أي مشكلة.",
    aboutTeam: "فريقنا",
    aboutTeamDesc: "طلاب السنة الأولى مهندس، المجموعة 2، المنشآت القاعدية، دفعة 2024/2025.",
    aboutValues: "قيمنا",
    aboutValuesDesc: "التضامن، المجانية، الاحترام، الشفافية، الثقة.",
    aboutJoin: "انضم إلى الفريق",
    aboutJoinDesc: "تواصل معنا عبر المجموعة الرسمية للدفعة.",
    aboutWarning: "تنبيه",
    aboutWarningDesc: "المعلومات إرشادية. تحقق دائماً من الإدارة.",
    aboutUpdate: "آخر تحديث",
    aboutUpdateDesc: "أكتوبر 2026 — الإصدار 3.0",

    qrIntro: "امسح رموز QR هذه للوصول مباشرة إلى الأقسام.",

    tspTitle: "حجم النص",
    tsSmall: "صغير",
    tsNormal: "عادي",
    tsLarge: "كبير",
    tsXLarge: "كبير جداً",

    forumIntro: "التقِ بطلبة المدرسة من كل ولايات الجزائر.",
    forumDesc: "انضم إلى مجتمع ENSTP: تحدث مع الطلبة من ولايتك ومن كل الجزائر.",
    forumFeatures: "ما يمكنك فعله",
    forumFeature1: "🌍 الدردشة في الغرفة العامة",
    forumFeature2: "📍 الانضمام إلى غرفة ولايتك (58 ولاية)",
    forumFeature3: "👥 رؤية كل الطلبة المسجلين",
    forumEnter: "ادخل الملتقى",
    forumRegister: "أنشئ حساباً",
    forumLogin: "سجّل الدخول",
    forumNote: "مهم",
    forumNoteText: "التسجيل بالبريد الجامعي @enstp.edu.dz فقط. معلوماتك تبقى خاصة.",

    footerTitle: "دليل البقاء ENSTP",
    footerSub: "مشروع طلاب السنة الأولى مهندس، المجموعة 2 — المنشآت القاعدية.",
    footerFree: "مجاني 100% · 3 لغات · بدون إنترنت",
    footerAccess: "الوصول إلى الدليل"
  },

  // ============================================
  // ENGLISH
  // ============================================
  en: {
    appName: "ENSTP Survival Guide",
    tagline: "Your first day, in your pocket.",
    back: "← Back",
    home: "🏠 Home",
    search: "🔎 Search: room, teacher, service…",
    noResult: "No results",
    tryOther: "Try another word",
    loading: "Loading…",
    welcomeTitle: "Welcome",
    welcomeSubtitle: "Everything you need for your first day at ENSTP.",

    sectionEcole: "My school",
    sectionAdmin: "My administration",
    sectionProfs: "My teachers",
    sectionForum: "Student forum",
    sectionServices: "Services",
    sectionCite: "Student residence",
    sectionTransport: "Transport",
    sectionShopping: "Shopping & food",
    sectionSport: "Sport",
    sectionPodcast: "Student podcast",
    sectionCourses: "Courses",
    sectionAbout: "Who we are",
    sectionQR: "QR Codes",

    ecoleIntro: "All school places.",
    ecoleMapTitle: "🗺️ Interactive ENSTP Map",
    ecoleMapDesc: "Explore the school's buildings, amphitheaters, labs and services at a glance.",
    ecoleVideosTitle: "🎬 Video Guided Tour",
    ecoleVideosDesc: "Discover ENSTP through 6 filmed tours.",
    ecoleVideoTour: "🏢 ENSTP's Iconic Tower",
    ecoleVideoPrep: "📘 Inside the Preparatory Department",
    ecoleVideoAmphi: "🏛️ Amphi A: Heart of the Lectures",
    ecoleVideoInfra: "🏗️ The Infrastructures de Base Department",
    ecoleVideoEntree: "🚪 Welcome to ENSTP: Main Entrance",
    ecoleVideoInfo: "💻 The Computer Center: Your Digital Tool",

    profsIntro: "Search for a teacher by subject or name.",

    adminIntro: "Administrative offices and contacts.",
    adminDirection: "Direction",
    adminDirectionDesc: "General management of the school.",
    adminTebani: "Meriem Tebani",
    adminTebaniDesc: "Head of Preparatory Classes Service (1ACP-2ACP).",
    adminTebaniDetails: "Missions for students:\n- Administrative support throughout the student's journey in Preparatory Classes.\n- Information and guidance regarding schooling procedures and formalities.\n- Issuance of certificates and administrative documents within the service's remit.\n- Monitoring of registrations, results, and school files.\n- Support in using digital tools available to them (institutional email, Google Classroom).\n- Processing requests and complaints related to their schooling.\n- Handling any other request related to schooling and directing students to the competent services according to their needs.",
    adminMobarki: "Mr. Mobarki Ahmed",
    adminMobarkiDesc: "Head of Preparatory Classes Department.",
    adminMobarkiDetails: "Missions for students:\n- General supervision of the smooth running of studies.\n- Validation of programs and schedules.\n- Decision-making concerning special academic situations.\n- Guiding students to the competent services in case of a major problem.",
    adminFedghouch: "Mr. Fedghouch Ferhat",
    adminFedghouchDesc: "Head of Studies and Director of Discipline Council.",
    adminFedghouchDetails: "Missions for students:\n- Monitoring attendance and punctuality in lectures and tutorials.\n- Managing absences and justifications.\n- Ensuring compliance with the school's internal regulations.\n- Processing disciplinary files (discipline council).\n- Advising and supporting students facing adaptation difficulties.",

    servicesIntro: "All administrative and student procedures.",
    srvSecu: "Social Security (CNAS)",
    srvSecuDesc: "Registration and obtaining the social security card",
    srvSecuLocation: "📍 Social Security Office — inside ENSTP, opposite the incubator and student foyer, right next to the doctor's office.",
    srvSecuProcedure: "📄 **Required documents:**\n• Birth certificate\n• Residence certificate\n• Photocopy of the biometric national ID card\n• Photocopy of the school certificate\n• Crossed postal check",
    srvSecuDelay: "📝 **Steps:**\n1. Prepare the complete file.\n2. Go to the social security office at ENSTP.\n3. Submit the file.\n4. Wait to obtain the social security number.\n\n🗓️ **Reception days:** Monday, Tuesday and Thursday",

    srvElHanaa: "Registration on EL HANAA platform",
    srvElHanaaDesc: "Create an account on the digital social security platform",
    srvElHanaaLocation: "🌐 https://elhanaa.cnas.dz/",
    srvElHanaaProcedure: "📝 Registration steps:\n1. Open the official EL HANAA website.\n2. Click on 'S'inscrire'.\n3. Fill in the form (social security number + personal data).\n4. Validate the request.\n5. Log in with your credentials.",
    srvElHanaaDelay: "🔗 Direct link: https://elhanaa.cnas.dz/inscription.xhtml",

    srvBiblio: "Join the Library",
    srvBiblioDesc: "Enjoy physical and digital library services",
    srvBiblioLocation: "📍 ENSTP Library",
    srvBiblioProcedure: "🕐 **Opening hours:**\n• Morning session: 09:00 to 11:45\n• Afternoon session: 13:00 to 15:00\n\n📚 **Available services:**\n• Book lending: possibility to borrow scientific and engineering references.\n• Reading room: quiet and equipped environment for individual and collective study.\n\n💻 **Digital library:**\n• Electronic research and course platform.\n• Contains videos and courses for all levels of the school.",
    srvBiblioDelay: "📝 **Registration procedure:**\n• Scan the QR Code displayed in the library announcement.\n• Or click directly on the platform link.\n\n📄 **Required documents:**\n• School certificate\n• Recent ID photo\n• Fill in the electronic registration form\n\n🚫 **Internal rules:**\n• Silence is mandatory\n• No eating or drinking except water\n• Respect furniture and keep the place clean",

    srvFaqTitle: "FAQ — Administration & Studies",
    srvFaqDesc: "Answers to the most frequently asked questions about registration, studies, absences and exams",
    srvFaqCat1: "1. Registrations and administrative documents",
    srvFaqCat2: "2. Study system and pedagogical program",
    srvFaqCat3: "3. Discipline and justification of absences",
    srvFaqCat4: "4. Exams and passage to the 2nd cycle",
    srvFaqQ1: "How can I get my student card?",
    srvFaqA1: "It is issued by the registration service of the preparatory department at the beginning of the first university year.",
    srvFaqQ2: "Where can I get my transcript?",
    srvFaqA2: "It is collected in paper format and signed from the teaching service after deliberations.",
    srvFaqQ3: "What is the duration of studies in the preparatory department?",
    srvFaqA3: "The duration of studies is two (2) years, during which the student receives intensive basic training.",
    srvFaqQ4: "What are the main subjects and programs taught?",
    srvFaqA4: "The program focuses on mathematics, physics, chemistry, computer science, technical drawing, and foreign languages.",
    srvFaqQ5: "How can I justify an absence?",
    srvFaqA5: "You must present a legal justification (medical certificate or official summons) to the teaching service within 48 hours.",
    srvFaqQ6: "What is the penalty for unjustified absences?",
    srvFaqA6: "Unjustified absences lead to a loss of continuous assessment points. If they exceed 3 unjustified absences in TD or TP, the student is automatically excluded from the subject.",
    srvFaqQ7: "How does the passage from the 1st to the 2nd preparatory year work?",
    srvFaqA7: "To succeed, you must obtain an overall annual average equal to or greater than 10/20, without having an eliminatory grade.",

    shoppingIntro: "Eat, shop, heal around the school.",
    transportIntro: "Bus, taxis, metro, train, tram.",

    citeIntro: "Life at the university residence.",
    citeGaridi: "Garidi Residence",
    citeGaridiDesc: "Closest to ENSTP. Ideal without a car.",
    citeSaid: "Saïd Hamdine Residence",
    citeSaidDesc: "A few bus minutes from the school.",
    citeRouiba: "Ruisseau Residence (Hussein Dey)",
    citeRouibaDesc: "Located in Hussein Dey, about 30 minutes from the school by transport.",

    sportIntro: "University sport and off-campus.",
    podcastIntro: "ENSTP student podcast.",
    coursesIntro: "Courses and training to help you.",

    aboutIntro: "A student project, 100% free.",
    aboutMission: "Our mission",
    aboutMissionDesc: "Help every new student integrate quickly and never stay alone facing a problem.",
    aboutTeam: "Our team",
    aboutTeamDesc: "1st year Engineering students, Group 2, Infrastructures de Base, promotion 2024/2025.",
    aboutValues: "Our values",
    aboutValuesDesc: "Mutual aid, free, respect, transparency, trust.",
    aboutJoin: "Join the team",
    aboutJoinDesc: "Contact us via the official class group.",
    aboutWarning: "Warning",
    aboutWarningDesc: "Information is indicative. Always verify with administration.",
    aboutUpdate: "Last update",
    aboutUpdateDesc: "October 2026 — Version 3.0",

    qrIntro: "Scan these QR codes to access sections directly.",

    tspTitle: "Text size",
    tsSmall: "Small",
    tsNormal: "Normal",
    tsLarge: "Large",
    tsXLarge: "X-Large",

    forumIntro: "Meet ENSTP students from all over Algeria.",
    forumDesc: "Join the ENSTP community: chat with students from your wilaya and all of Algeria.",
    forumFeatures: "What you can do",
    forumFeature1: "🌍 Chat in the general room",
    forumFeature2: "📍 Join your wilaya's room (58 wilayas)",
    forumFeature3: "👥 See all registered students",
    forumEnter: "Enter the forum",
    forumRegister: "Create an account",
    forumLogin: "Log in",
    forumNote: "Important",
    forumNoteText: "Registration only with @enstp.edu.dz email. Your information stays private.",

    footerTitle: "ENSTP Survival Guide",
    footerSub: "A project by 1st year Engineering students, Group 2 — Infrastructures de Base.",
    footerFree: "100% free · 3 languages · Offline",
    footerAccess: "Access the guide"
  }
};

// ============================================
// دوال مساعدة
// ============================================

function t(key, lang) {
  const l = lang || localStorage.getItem('lang') || 'fr';
  const data = LANG_DATA[l] || LANG_DATA.fr;
  return data[key] || LANG_DATA.fr[key] || key;
}

function getCurrentLang() {
  return localStorage.getItem('lang') || 'fr';
}

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
  window.LANG_DATA = LANG_DATA;
  window.t = t;
  window.getCurrentLang = getCurrentLang;
  window.setCurrentLang = setCurrentLang;
}
