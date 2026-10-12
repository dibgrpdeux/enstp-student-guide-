     // ============================================
// data/transport.js — قسم النقل الكامل
// Guide de survie ENSTP
// Version 4.0 — Avec Google My Maps
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "transport",
  icon: "🚌",
  titleKey: "sectionTransport",
  introKey: "transportIntro",
  type: "services",
  
  // ============================================
  // 🗺️ خريطة Google My Maps
  // ============================================
  mapEmbed: "https://www.google.com/maps/d/embed?mid=1F5jfgmT1iBuBm3UY6&ehbc=2E312F",
  mapLink: "https://goo.gl/maps/F5jfgmT1iBuBm3UY6",
  mapTitle: {
    fr: "Carte interactive des transports autour de l'ENSTP",
    ar: "خريطة النقل التفاعلية حول المدرسة",
    en: "Interactive transport map around ENSTP"
  },
  
  // ============================================
  // التصنيفات
  // ============================================
  categories: [
    
    // ==========================================
    // 1. الحافلات
    // ==========================================
    {
      id: "bus",
      icon: "🚌",
      titleKey: "trCatBus",
      title: "Bus",
      intro: {
        fr: "Découvrez les arrêts de bus situés à proximité de l'ENSTP, les lignes disponibles et leurs principales destinations.",
        ar: "اكتشف مواقف الحافلات القريبة من المدرسة، الخطوط المتوفرة ووجهاتها الرئيسية.",
        en: "Discover bus stops near ENSTP, available lines and their main destinations."
      },
      items: [
        {
          title: { fr: "📍 Arrêt 1 — C", ar: "📍 الموقف 1 — C", en: "📍 Stop 1 — C" },
          icon: "🚏",
          desc: {
            fr: "Localisation : en face CNEP Banque (DISPONIBLE DANS LA CARTE).\nDistance depuis l'école : 350 m / 5 minutes.\nDestinations desservies : station de Ben Omar (où l'on retrouve toutes les destinations).\nFréquence : toutes les 10 minutes.",
            ar: "الموقع: مقابل بنك CNEP (متوفر في الخريطة).\nالمسافة من المدرسة: 350 م / 5 دقائق.\nالوجهات: محطة بن عمر (حيث توجد كل الوجهات).\nالتواتر: كل 10 دقائق.",
            en: "Location: opposite CNEP Bank (AVAILABLE ON MAP).\nDistance from school: 350 m / 5 minutes.\nDestinations: Ben Omar station (all destinations).\nFrequency: every 10 minutes."
          },
          map: "CNEP Banque Kouba Alger",
          extra: "🕐 ~5 min à pied"
        },
        {
          title: { fr: "📍 Arrêt 2 — B", ar: "📍 الموقف 2 — B", en: "📍 Stop 2 — B" },
          icon: "🚏",
          desc: {
            fr: "Localisation : gare routière Kouba (DISPONIBLE DANS LA CARTE).\nDistance depuis l'école : 500 m / 7 minutes.\nDestinations desservies : plusieurs destinations à travers Alger.\nFréquence : toujours disponible.",
            ar: "الموقع: المحطة البرية القبة (متوفر في الخريطة).\nالمسافة من المدرسة: 500 م / 7 دقائق.\nالوجهات: وجهات متعددة عبر الجزائر العاصمة.\nالتواتر: دائماً متاح.",
            en: "Location: Kouba bus station (AVAILABLE ON MAP).\nDistance from school: 500 m / 7 minutes.\nDestinations: multiple destinations across Algiers.\nFrequency: always available."
          },
          map: "Gare routière Kouba Alger",
          extra: "🕐 ~7 min à pied"
        },
        {
          title: { fr: "📍 Arrêt 3 — D", ar: "📍 الموقف 3 — D", en: "📍 Stop 3 — D" },
          icon: "🚏",
          desc: {
            fr: "Localisation : en face ENS (DISPONIBLE DANS LA CARTE).\nDistance depuis l'école : 950 m / 14 minutes.\nDestinations desservies : plusieurs destinations à travers Alger.\nFréquence : dépend des destinations, mais généralement disponible pour 2 horaires : 7h30 et 16h.",
            ar: "الموقع: مقابل ENS (متوفر في الخريطة).\nالمسافة من المدرسة: 950 م / 14 دقيقة.\nالوجهات: وجهات متعددة عبر الجزائر العاصمة.\nالتواتر: يعتمد على الوجهة، لكن متاح عادة في توقيتين: 7:30 و 16:00.",
            en: "Location: opposite ENS (AVAILABLE ON MAP).\nDistance from school: 950 m / 14 minutes.\nDestinations: multiple destinations across Algiers.\nFrequency: depends on destinations, but usually available for 2 times: 7:30 and 16:00."
          },
          map: "ENS Kouba Alger",
          extra: "🕐 ~14 min à pied"
        },
        {
          titleKey: "trBusUniv",
          icon: "🎓",
          descKey: "trBusUnivDesc",
          map: "arrêt bus universitaire ENSTP Kouba",
          hours: "Horaires affichés à l'école",
          extra: "🎫 Gratuit pour les étudiants résidents"
        },
        {
          titleKey: "trBusPublic",
          icon: "🚌",
          descKey: "trBusPublicDesc",
          map: "arrêt bus près de ENSTP Kouba",
          hours: "6h - 21h",
          extra: "🎫 30-50 DA le ticket"
        }
      ]
    },
    
    // ==========================================
    // 2. التكاسي + VTC + المطار
    // ==========================================
    {
      id: "taxi",
      icon: "🚕",
      titleKey: "trCatTaxi",
      title: "Taxis & VTC",
      intro: {
        fr: "Stations de taxis à Kouba et ses environs + applications VTC + accès à l'aéroport.",
        ar: "محطات التكاسي في القبة والمناطق المجاورة + تطبيقات النقل + الوصول إلى المطار.",
        en: "Taxi stations in Kouba and surroundings + VTC apps + airport access."
      },
      items: [
        // ===== 10 محطات تكاسي =====
        {
          title: { fr: "🚕 Ben Omar", ar: "🚕 بن عمر", en: "🚕 Ben Omar" },
          icon: "🚕",
          desc: {
            fr: "Points de prise en charge du quartier.\nDestinations : Birkhadem, Bir Mourad Raïs, Baraki.",
            ar: "نقاط الركوب في الحي.\nالوجهات: بئر خادم، بئر مراد رايس، براقي.",
            en: "Neighborhood pickup points.\nDestinations: Birkhadem, Bir Mourad Raïs, Baraki."
          },
          map: "Ben Omar Kouba Alger"
        },
        {
          title: { fr: "🚕 Garidi 1", ar: "🚕 قاريدي 1", en: "🚕 Garidi 1" },
          icon: "🚕",
          desc: {
            fr: "Points de transport de Garidi 1.\nDestinations : Bir Mourad Raïs, Birkhadem.",
            ar: "نقاط النقل في قاريدي 1.\nالوجهات: بئر مراد رايس، بئر خادم.",
            en: "Garidi 1 transport points.\nDestinations: Bir Mourad Raïs, Birkhadem."
          },
          map: "Garidi 1 Kouba Alger"
        },
        {
          title: { fr: "🚕 Garidi 2", ar: "🚕 قاريدي 2", en: "🚕 Garidi 2" },
          icon: "🚕",
          desc: {
            fr: "Points de prise en charge du quartier.\nDestinations : Bir Mourad Raïs, quartiers de Kouba.",
            ar: "نقاط الركوب في الحي.\nالوجهات: بئر مراد رايس، أحياء القبة.",
            en: "Neighborhood pickup points.\nDestinations: Bir Mourad Raïs, Kouba districts."
          },
          map: "Garidi 2 Kouba Alger"
        },
        {
          title: { fr: "🚕 Vieux Kouba", ar: "🚕 القبة القديمة", en: "🚕 Old Kouba" },
          icon: "🚕",
          desc: {
            fr: "Dans le quartier.\nDestinations : Ruisseau, Hussein Dey, centre d'Alger.",
            ar: "في الحي.\nالوجهات: الرويسو، حسين داي، وسط الجزائر.",
            en: "In the neighborhood.\nDestinations: Ruisseau, Hussein Dey, downtown Algiers."
          },
          map: "Vieux Kouba Alger"
        },
        {
          title: { fr: "🚕 Jolie Vue", ar: "🚕 جولي فو", en: "🚕 Jolie Vue" },
          icon: "🚕",
          desc: {
            fr: "Points de transport du quartier.\nDestinations : Bir Mourad Raïs, Birkhadem.",
            ar: "نقاط النقل في الحي.\nالوجهات: بئر مراد رايس، بئر خادم.",
            en: "Neighborhood transport points.\nDestinations: Bir Mourad Raïs, Birkhadem."
          },
          map: "Jolie Vue Kouba Alger"
        },
        {
          title: { fr: "🚕 L'Appreval", ar: "🚕 الأبروفال", en: "🚕 L'Appreval" },
          icon: "🚕",
          desc: {
            fr: "Points de transport du secteur.\nDestinations : Gué de Constantine, Bachdjerrah.",
            ar: "نقاط النقل في القطاع.\nالوجهات: جسر قسنطينة، باش جراح.",
            en: "Sector transport points.\nDestinations: Gué de Constantine, Bachdjerrah."
          },
          map: "L'Appreval Kouba Alger"
        },
        {
          title: { fr: "🚕 La Croix", ar: "🚕 لا كروا", en: "🚕 La Croix" },
          icon: "🚕",
          desc: {
            fr: "Points de prise en charge du quartier.\nDestinations : Kouba et quartiers voisins.",
            ar: "نقاط الركوب في الحي.\nالوجهات: القبة والأحياء المجاورة.",
            en: "Neighborhood pickup points.\nDestinations: Kouba and neighboring areas."
          },
          map: "La Croix Kouba Alger"
        },
        {
          title: { fr: "🚕 Haï El Badr", ar: "🚕 حي البدر", en: "🚕 Haï El Badr" },
          icon: "🚕",
          desc: {
            fr: "À proximité de la station de métro.\nDestinations : Bachdjerrah, Baraki.",
            ar: "قرب محطة المترو.\nالوجهات: باش جراح، براقي.",
            en: "Near the metro station.\nDestinations: Bachdjerrah, Baraki."
          },
          map: "Haï El Badr Alger"
        },
        {
          title: { fr: "🚕 Ruisseau", ar: "🚕 الرويسو", en: "🚕 Ruisseau" },
          icon: "🚕",
          desc: {
            fr: "Pôle de transport de Ruisseau.\nDestinations : Hussein Dey, centre d'Alger.",
            ar: "مركز النقل في الرويسو.\nالوجهات: حسين داي، وسط الجزائر.",
            en: "Ruisseau transport hub.\nDestinations: Hussein Dey, downtown Algiers."
          },
          map: "Ruisseau Alger"
        },
        {
          title: { fr: "🚕 Caroubier", ar: "🚕 القروبي", en: "🚕 Caroubier" },
          icon: "🚕",
          desc: {
            fr: "À proximité de la gare routière.\nDestinations : destinations locales et inter-wilayas.",
            ar: "قرب المحطة البرية.\nالوجهات: وجهات محلية وبين الولايات.",
            en: "Near the bus station.\nDestinations: local and inter-wilaya destinations."
          },
          map: "Caroubier Alger"
        },
        
        // ===== التطبيقات (VTC) مع روابط التحميل =====
        {
          title: { fr: "🟠 Yassir", ar: "🟠 ياسر", en: "🟠 Yassir" },
          icon: "🟠",
          desc: {
            fr: "Le leader en Algérie. Large choix de véhicules, prix fixé à l'avance, suivi en direct. Plus de 2 millions d'utilisateurs.",
            ar: "الرائد في الجزائر. خيارات كثيرة من السيارات، سعر ثابت مسبقاً، تتبع مباشر. أكثر من مليوني مستخدم.",
            en: "The leader in Algeria. Wide vehicle choice, fixed upfront price, live tracking. Over 2 million users."
          },
          extra: "⭐ Note : 4.5/5 · 🌍 Disponible dans 20+ wilayas · 🍔 Aussi : Yassir Food, Yassir Express",
          link: "https://play.google.com/store/apps/details?id=com.yassir.mobapp"
        },
        {
          title: { fr: "🔵 Heetch", ar: "🔵 هييتش", en: "🔵 Heetch" },
          icon: "🔵",
          desc: {
            fr: "Prix abordables et offre simple. Suivi en direct et partage du trajet avec tes proches. Populaire auprès des étudiants.",
            ar: "أسعار معقولة وعرض بسيط. تتبع مباشر ومشاركة الرحلة مع أحبائك. شائع بين الطلاب.",
            en: "Affordable prices and simple offer. Live tracking and share your ride with loved ones. Popular among students."
          },
          extra: "⭐ Note : 4.4/5 · 💰 Souvent moins cher · 🎁 Invitations = crédits gratuits",
          link: "https://play.google.com/store/apps/details?id=com.heetch"
        },
        {
          title: { fr: "🟢 inDrive", ar: "🟢 إن درايف", en: "🟢 inDrive" },
          icon: "🟢",
          desc: {
            fr: "Le seul où tu proposes ton prix ! Le chauffeur peut accepter ou négocier. Idéal pour les petits budgets.",
            ar: "الوحيد الذي تقترح فيه سعرك! السائق يقبل أو يتفاوض. مثالي للميزانيات الصغيرة.",
            en: "The only one where you propose your price! Driver can accept or negotiate. Ideal for small budgets."
          },
          extra: "⭐ Note : 4.6/5 · 💰 Prix négociable · 🎯 Idéal pour étudiants",
          link: "https://play.google.com/store/apps/details?id=sinet.startup.inDriver"
        },
        {
          title: { fr: "🟣 Nroho", ar: "🟣 نروحو", en: "🟣 Nroho" },
          icon: "🟣",
          desc: {
            fr: "Application algérienne de covoiturage. Partage de trajets entre étudiants et collègues. Économise jusqu'à 90% du coût.",
            ar: "تطبيق جزائري لمشاركة الرحلات. مشاركة المسارات بين الطلاب والزملاء. توفير يصل إلى 90%.",
            en: "Algerian carpooling app. Share rides between students and colleagues. Save up to 90% of cost."
          },
          extra: "⭐ Note : 4.3/5 · 🇩🇿 Made in Algeria · 👥 Covoiturage communautaire",
          link: "https://apps.apple.com/app/nroho/id6748883481"
        },
        
        // ===== المطار =====
        {
          title: { fr: "✈️ Aéroport Houari Boumediene", ar: "✈️ مطار هواري بومدين", en: "✈️ Houari Boumediene Airport" },
          icon: "✈️",
          desc: {
            fr: "Comment se rendre de l'ENSTP à l'aéroport :\n1. Prendre un taxi ou Yassir/Heetch vers la gare routière de Caroubier.\n2. Prendre un bus direct vers l'aéroport.\n\nOu : Prendre un taxi directement (durée : ~40 min selon trafic).",
            ar: "كيفية الوصول من المدرسة إلى المطار:\n1. خذ سيارة أجرة أو Yassir/Heetch إلى المحطة البرية القروبي.\n2. خذ حافلة مباشرة إلى المطار.\n\nأو: خذ سيارة أجرة مباشرة (المدة: ~40 دقيقة حسب المرور).",
            en: "How to get from ENSTP to the airport:\n1. Take a taxi or Yassir/Heetch to Caroubier bus station.\n2. Take a direct bus to the airport.\n\nOr: Take a taxi directly (~40 min depending on traffic)."
          },
          map: "Aéroport Houari Boumediene Alger",
          hours: "24h/24",
          extra: "💡 Prévoir 2h d'avance pour les vols internationaux"
        }
      ]
    },
    
    // ==========================================
    // 3. المترو والترامواي (كل المحطات)
    // ==========================================
    {
      id: "metro",
      icon: "🚇",
      titleKey: "trCatMetro",
      title: "Métro & Tramway",
      intro: {
        fr: "Comment se rendre au métro et au tramway depuis l'ENSTP + toutes les stations + tarifs.",
        ar: "كيفية الوصول إلى المترو والترامواي من المدرسة + كل المحطات + التسعيرة.",
        en: "How to get to metro and tramway from ENSTP + all stations + fares."
      },
      items: [
        // ===== كيفية الوصول =====
        {
          title: { fr: "🎯 ENSTP → Métro Haï El Badr", ar: "🎯 المدرسة → مترو حي البدر", en: "🎯 ENSTP → Haï El Badr Metro" },
          icon: "🚇",
          desc: {
            fr: "1. Départ de l'ENSTP.\n2. Prendre le bus en direction de Bachdjerrah.\n3. Descendre à l'arrêt de métro Haï El Badr.\n4. Si nécessaire, prendre un taxi pour rejoindre la station.",
            ar: "1. الانطلاق من المدرسة.\n2. خذ الحافلة باتجاه باش جراح.\n3. انزل في محطة مترو حي البدر.\n4. إذا لزم الأمر، خذ سيارة أجرة للوصول إلى المحطة.",
            en: "1. Depart from ENSTP.\n2. Take the bus towards Bachdjerrah.\n3. Get off at Haï El Badr metro stop.\n4. If needed, take a taxi to reach the station."
          }
        },
        {
          title: { fr: "🎯 ENSTP → Tramway", ar: "🎯 المدرسة → الترامواي", en: "🎯 ENSTP → Tramway" },
          icon: "🚊",
          desc: {
            fr: "1. Départ de l'ENSTP.\n2. Prendre le bus en direction de Bachdjerrah pour rejoindre la station de métro Haï El Badr.\n3. Prendre le métro à Haï El Badr en direction du centre d'Alger.\n4. Descendre à la station Les Fusillés.\n5. À la sortie du métro, rejoindre la station de tramway située à proximité.\n6. Prendre le tramway en direction de la destination souhaitée.",
            ar: "1. الانطلاق من المدرسة.\n2. خذ الحافلة باتجاه باش جراح للوصول إلى محطة مترو حي البدر.\n3. خذ المترو من حي البدر باتجاه وسط الجزائر.\n4. انزل في محطة المعدومون (Les Fusillés).\n5. عند الخروج من المترو، اتجه إلى محطة الترامواي القريبة.\n6. خذ الترامواي باتجاه وجهتك.",
            en: "1. Depart from ENSTP.\n2. Take the bus towards Bachdjerrah to reach Haï El Badr metro station.\n3. Take the metro at Haï El Badr towards downtown Algiers.\n4. Get off at Les Fusillés station.\n5. Exit the metro, head to the nearby tramway station.\n6. Take the tramway to your destination."
          }
        },
        {
          title: { fr: "💰 Tarifs", ar: "💰 التسعيرة", en: "💰 Fares" },
          icon: "💰",
          desc: {
            fr: "🚇 Métro : 50 DA par trajet.\n🚊 Tramway : 40 DA par trajet.\n\n🎓 Offre étudiante : voir section eTWASSEL.",
            ar: "🚇 المترو: 50 دج للرحلة.\n🚊 الترامواي: 40 دج للرحلة.\n\n🎓 العرض الطلابي: انظر قسم eTWASSEL.",
            en: "🚇 Metro: 50 DA per trip.\n🚊 Tramway: 40 DA per trip.\n\n🎓 Student offer: see eTWASSEL section."
          }
        },
        {
          titleKey: "trSitram",
          icon: "💳",
          descKey: "trSitramDesc",
          extra: "🎓 GRATUITE pour les étudiants — inscription via ETUSA"
        },
        
        // ===== محطات المترو (14) =====
        {
          title: { fr: "🚇 Station 1 — Place des Martyrs", ar: "🚇 محطة 1 — ساحة الشهداء", en: "🚇 Station 1 — Martyrs' Square" },
          icon: "🚇",
          desc: { fr: "Zone : Casbah", ar: "المنطقة: القصبة", en: "Zone: Casbah" }
        },
        {
          title: { fr: "🚇 Station 2 — Ali Boumendjel", ar: "🚇 محطة 2 — علي بومنجل", en: "🚇 Station 2 — Ali Boumendjel" },
          icon: "🚇",
          desc: { fr: "Zone : Alger Centre", ar: "المنطقة: الجزائر الوسطى", en: "Zone: Alger Centre" }
        },
        {
          title: { fr: "🚇 Station 3 — Tafourah - Grande Poste", ar: "🚇 محطة 3 — تافورة البريد", en: "🚇 Station 3 — Tafourah - Grande Poste" },
          icon: "🚇",
          desc: { fr: "Zone : Alger Centre", ar: "المنطقة: الجزائر الوسطى", en: "Zone: Alger Centre" }
        },
        {
          title: { fr: "🚇 Station 4 — Khelifa Boukhalfa", ar: "🚇 محطة 4 — خليفة بوخالفة", en: "🚇 Station 4 — Khelifa Boukhalfa" },
          icon: "🚇",
          desc: { fr: "Zone : Alger Centre", ar: "المنطقة: الجزائر الوسطى", en: "Zone: Alger Centre" }
        },
        {
          title: { fr: "🚇 Station 5 — 1er Mai", ar: "🚇 محطة 5 — أول مايو", en: "🚇 Station 5 — 1er Mai" },
          icon: "🚇",
          desc: { fr: "Zone : Sidi M'Hamed", ar: "المنطقة: سيدي امحمد", en: "Zone: Sidi M'Hamed" }
        },
        {
          title: { fr: "🚇 Station 6 — Aïssat Idir", ar: "🚇 محطة 6 — عيسات إيدير", en: "🚇 Station 6 — Aïssat Idir" },
          icon: "🚇",
          desc: { fr: "Zone : Sidi M'Hamed", ar: "المنطقة: سيدي امحمد", en: "Zone: Sidi M'Hamed" }
        },
        {
          title: { fr: "🚇 Station 7 — Hamma", ar: "🚇 محطة 7 — الحامة", en: "🚇 Station 7 — Hamma" },
          icon: "🚇",
          desc: { fr: "Zone : Hamma", ar: "المنطقة: الحامة", en: "Zone: Hamma" }
        },
        {
          title: { fr: "🚇 Station 8 — Jardin d'Essai", ar: "🚇 محطة 8 — حديقة التجارب", en: "🚇 Station 8 — Jardin d'Essai" },
          icon: "🚇",
          desc: { fr: "Zone : Hamma", ar: "المنطقة: الحامة", en: "Zone: Hamma" }
        },
        {
          title: { fr: "🚇 Station 9 — Les Fusillés", ar: "🚇 محطة 9 — المعدومون", en: "🚇 Station 9 — Les Fusillés" },
          icon: "🚇",
          desc: { fr: "Zone : Hussein Dey — Correspondance tramway", ar: "المنطقة: حسين داي — تحويل مع الترامواي", en: "Zone: Hussein Dey — Tramway connection" },
          extra: "⭐ Correspondance tramway"
        },
        {
          title: { fr: "🚇 Station 10 — Amirouche", ar: "🚇 محطة 10 — عميروش", en: "🚇 Station 10 — Amirouche" },
          icon: "🚇",
          desc: { fr: "Zone : Hussein Dey", ar: "المنطقة: حسين داي", en: "Zone: Hussein Dey" }
        },
        {
          title: { fr: "🚇 Station 11 — Bachdjerrah", ar: "🚇 محطة 11 — باش جراح", en: "🚇 Station 11 — Bachdjerrah" },
          icon: "🚇",
          desc: { fr: "Zone : Bachdjerrah", ar: "المنطقة: باش جراح", en: "Zone: Bachdjerrah" }
        },
        {
          title: { fr: "🚇 Station 12 — Haï El Badr ⭐", ar: "🚇 محطة 12 — حي البدر ⭐", en: "🚇 Station 12 — Haï El Badr ⭐" },
          icon: "🚇",
          desc: { 
            fr: "⭐ La plus proche de l'ENSTP.\nZone : El Harrach.\nBus direct depuis l'école vers Bachdjerrah.", 
            ar: "⭐ الأقرب للمدرسة.\nالمنطقة: الحراش.\nحافلة مباشرة من المدرسة نحو باش جراح.", 
            en: "⭐ Closest to ENSTP.\nZone: El Harrach.\nDirect bus from school to Bachdjerrah." 
          },
          extra: "⭐ Recommandée pour l'ENSTP"
        },
        {
          title: { fr: "🚇 Station 13 — El Harrach Centre", ar: "🚇 محطة 13 — الحراش وسط", en: "🚇 Station 13 — El Harrach Centre" },
          icon: "🚇",
          desc: { fr: "Zone : El Harrach", ar: "المنطقة: الحراش", en: "Zone: El Harrach" }
        },
        {
          title: { fr: "🚇 Station 14 — Aïn Naâdja", ar: "🚇 محطة 14 — عين النعجة", en: "🚇 Station 14 — Aïn Naâdja" },
          icon: "🚇",
          desc: { fr: "Zone : Aïn Naâdja", ar: "المنطقة: عين النعجة", en: "Zone: Aïn Naâdja" }
        },
        
        // ===== محطات الترامواي (15) =====
        {
          title: { fr: "🚊 Tram 1 — Ruisseau", ar: "🚊 ترامواي 1 — الرويسو", en: "🚊 Tram 1 — Ruisseau" },
          icon: "🚊",
          desc: { fr: "Zone : Hussein Dey", ar: "المنطقة: حسين داي", en: "Zone: Hussein Dey" }
        },
        {
          title: { fr: "🚊 Tram 2 — Triolet", ar: "🚊 ترامواي 2 — تريوليه", en: "🚊 Tram 2 — Triolet" },
          icon: "🚊",
          desc: { fr: "Zone : Hussein Dey", ar: "المنطقة: حسين داي", en: "Zone: Hussein Dey" }
        },
        {
          title: { fr: "🚊 Tram 3 — Bachdjerrah", ar: "🚊 ترامواي 3 — باش جراح", en: "🚊 Tram 3 — Bachdjerrah" },
          icon: "🚊",
          desc: { fr: "Zone : Bachdjerrah", ar: "المنطقة: باش جراح", en: "Zone: Bachdjerrah" }
        },
        {
          title: { fr: "🚊 Tram 4 — Les Bananiers", ar: "🚊 ترامواي 4 — الموز", en: "🚊 Tram 4 — Bananiers" },
          icon: "🚊",
          desc: { fr: "Zone : Bachdjerrah", ar: "المنطقة: باش جراح", en: "Zone: Bachdjerrah" }
        },
        {
          title: { fr: "🚊 Tram 5 — Cité Djilali", ar: "🚊 ترامواي 5 — حي جيلالي", en: "🚊 Tram 5 — Cité Djilali" },
          icon: "🚊",
          desc: { fr: "Zone : Bachdjerrah", ar: "المنطقة: باش جراح", en: "Zone: Bachdjerrah" }
        },
        {
          title: { fr: "🚊 Tram 6 — Mokhtar Zerhouni", ar: "🚊 ترامواي 6 — مختار زرهوني", en: "🚊 Tram 6 — Mokhtar Zerhouni" },
          icon: "🚊",
          desc: { fr: "Zone : Bachdjerrah", ar: "المنطقة: باش جراح", en: "Zone: Bachdjerrah" }
        },
        {
          title: { fr: "🚊 Tram 7 — Belfort", ar: "🚊 ترامواي 7 — بلفور", en: "🚊 Tram 7 — Belfort" },
          icon: "🚊",
          desc: { fr: "Zone : El Harrach", ar: "المنطقة: الحراش", en: "Zone: El Harrach" }
        },
        {
          title: { fr: "🚊 Tram 8 — El Harrach Gare", ar: "🚊 ترامواي 8 — محطة الحراش", en: "🚊 Tram 8 — El Harrach Gare" },
          icon: "🚊",
          desc: { fr: "Zone : El Harrach", ar: "المنطقة: الحراش", en: "Zone: El Harrach" }
        },
        {
          title: { fr: "🚊 Tram 9 — El Harrach Centre ⭐", ar: "🚊 ترامواي 9 — الحراش وسط ⭐", en: "🚊 Tram 9 — El Harrach Centre ⭐" },
          icon: "🚊",
          desc: { fr: "⭐ Correspondance avec le métro. Zone : El Harrach", ar: "⭐ تحويل مع المترو. المنطقة: الحراش", en: "⭐ Connection with metro. Zone: El Harrach" },
          extra: "⭐ Correspondance métro"
        },
        {
          title: { fr: "🚊 Tram 10 — Pont El Harrach", ar: "🚊 ترامواي 10 — جسر الحراش", en: "🚊 Tram 10 — Pont El Harrach" },
          icon: "🚊",
          desc: { fr: "Zone : El Harrach", ar: "المنطقة: الحراش", en: "Zone: El Harrach" }
        },
        {
          title: { fr: "🚊 Tram 11 — Les Pins", ar: "🚊 ترامواي 11 — الصنوبر", en: "🚊 Tram 11 — Les Pins" },
          icon: "🚊",
          desc: { fr: "Zone : Mohammadia", ar: "المنطقة: المحمدية", en: "Zone: Mohammadia" }
        },
        {
          title: { fr: "🚊 Tram 12 — Café Chergui", ar: "🚊 ترامواي 12 — مقهى شرقي", en: "🚊 Tram 12 — Café Chergui" },
          icon: "🚊",
          desc: { fr: "Zone : Mohammadia", ar: "المنطقة: المحمدية", en: "Zone: Mohammadia" }
        },
        {
          title: { fr: "🚊 Tram 13 — Larbi Ben M'hidi", ar: "🚊 ترامواي 13 — العربي بن مهيدي", en: "🚊 Tram 13 — Larbi Ben M'hidi" },
          icon: "🚊",
          desc: { fr: "Zone : Mohammadia", ar: "المنطقة: المحمدية", en: "Zone: Mohammadia" }
        },
        {
          title: { fr: "🚊 Tram 14 — Cité 1200 logements", ar: "🚊 ترامواي 14 — حي 1200 مسكن", en: "🚊 Tram 14 — Cité 1200" },
          icon: "🚊",
          desc: { fr: "Zone : Bordj El Kiffan", ar: "المنطقة: برج الكيفان", en: "Zone: Bordj El Kiffan" }
        },
        {
          title: { fr: "🚊 Tram 15 — Dergana", ar: "🚊 ترامواي 15 — الدرقانة", en: "🚊 Tram 15 — Dergana" },
          icon: "🚊",
          desc: { fr: "Zone : Bordj El Kiffan", ar: "المنطقة: برج الكيفان", en: "Zone: Bordj El Kiffan" }
        }
      ]
    },
    
    // ==========================================
    // 4. eTWASSEL
    // ==========================================
    {
      id: "etwassel",
      icon: "🎓",
      titleKey: "trCatEtwassel",
      title: "Offre eTWASSEL",
      intro: {
        fr: "Offre étudiante pour voyager gratuitement en métro et tramway.",
        ar: "عرض طلابي للسفر مجاناً بالمترو والترامواي.",
        en: "Student offer to travel for free on metro and tramway."
      },
      items: [
        {
          title: { fr: "🎫 eTWASSEL", ar: "🎫 eTWASSEL", en: "🎫 eTWASSEL" },
          icon: "🎓",
          desc: {
            fr: "Application : eTWASSEL.\nFrais d'inscription : 150 DA au début de l'année universitaire.\nAvantage : possibilité de bénéficier de la gratuité des trajets en métro et en tramway pendant toute l'année universitaire, selon les conditions de l'offre.\nObjectif : réduire les dépenses de transport des étudiants et faciliter leurs déplacements quotidiens entre leur domicile et leur établissement.",
            ar: "التطبيق: eTWASSEL.\nرسوم التسجيل: 150 دج في بداية السنة الجامعية.\nالميزة: إمكانية الاستفادة من مجانية التنقل بالمترو والترامواي طوال السنة الجامعية، حسب شروط العرض.\nالهدف: تقليل نفقات النقل للطلبة وتسهيل تنقلاتهم اليومية بين المنزل والمؤسسة.",
            en: "Application: eTWASSEL.\nRegistration fee: 150 DA at the beginning of the academic year.\nAdvantage: free travel on metro and tramway throughout the academic year, according to offer conditions.\nGoal: reduce students' transport expenses and facilitate their daily commutes between home and institution."
          },
          extra: "💡 Inscription au début de l'année universitaire"
        }
      ]
    },
    
    // ==========================================
    // 5. مسارات المشي
    // ==========================================
    {
      id: "walk",
      icon: "🚶",
      titleKey: "trCatWalk",
      title: "Itinéraires à pied",
      intro: {
        fr: "Retrouvez les itinéraires piétonniers utiles pour rejoindre les arrêts de transport et les points importants autour de l'ENSTP.",
        ar: "اكتشف مسارات المشي المفيدة للوصول إلى مواقف النقل والأماكن المهمة حول المدرسة.",
        en: "Find useful walking routes to reach transport stops and key places around ENSTP."
      },
      items: [
        {
          title: { fr: "🚶 Arrêt 1 (CNEP)", ar: "🚶 الموقف 1 (CNEP)", en: "🚶 Stop 1 (CNEP)" },
          icon: "🚶",
          desc: {
            fr: "350 m / 5 minutes depuis l'école.\nItinéraire visible sur la carte interactive.",
            ar: "350 م / 5 دقائق من المدرسة.\nالمسار ظاهر على الخريطة التفاعلية.",
            en: "350 m / 5 minutes from school.\nRoute visible on the interactive map."
          },
          map: "CNEP Banque Kouba Alger",
          extra: "🕐 ~5 min à pied"
        },
        {
          title: { fr: "🚶 Arrêt 2 (Gare routière)", ar: "🚶 الموقف 2 (المحطة البرية)", en: "🚶 Stop 2 (Bus station)" },
          icon: "🚶",
          desc: {
            fr: "500 m / 7 minutes depuis l'école.\nItinéraire visible sur la carte interactive.",
            ar: "500 م / 7 دقائق من المدرسة.\nالمسار ظاهر على الخريطة التفاعلية.",
            en: "500 m / 7 minutes from school.\nRoute visible on the interactive map."
          },
          map: "Gare routière Kouba Alger",
          extra: "🕐 ~7 min à pied"
        },
        {
          title: { fr: "🚶 Arrêt 3 (ENS)", ar: "🚶 الموقف 3 (ENS)", en: "🚶 Stop 3 (ENS)" },
          icon: "🚶",
          desc: {
            fr: "950 m / 14 minutes depuis l'école.\nItinéraire visible sur la carte interactive.",
            ar: "950 م / 14 دقيقة من المدرسة.\nالمسار ظاهر على الخريطة التفاعلية.",
            en: "950 m / 14 minutes from school.\nRoute visible on the interactive map."
          },
          map: "ENS Kouba Alger",
          extra: "🕐 ~14 min à pied"
        }
      ]
    },
    
    // ==========================================
    // 6. النقل بين الولايات
    // ==========================================
    {
      id: "inter",
      icon: "🛣️",
      titleKey: "trCatInter",
      title: "Inter-wilayas",
      items: [
        {
          titleKey: "trInterWilaya",
          icon: "🛣️",
          descKey: "trInterWilayaDesc",
          extra: "💡 Réserve ton billet 1-2 jours à l'avance"
        },
        {
          titleKey: "trGareRoutiere",
          icon: "🚏",
          descKey: "trGareRoutiereDesc",
          map: "gare routière Kharouba Alger",
          hours: "5h - 21h"
        },
        {
          titleKey: "trAeroport",
          icon: "✈️",
          descKey: "trAeroportDesc",
          map: "Aéroport Houari Boumediene Alger"
        },
        {
          titleKey: "trGareTrain",
          icon: "🚆",
          descKey: "trGareTrainDesc",
          map: "Gare ferroviaire Alger"
        }
      ]
    }
  ]
});  
