// ============================================
// data/transport.js — قسم النقل
// Guide de survie ENSTP
// Version 3.0
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "transport",
  icon: "🚌",
  titleKey: "sectionTransport",
  introKey: "transportIntro",
  type: "services",
  categories: [
    {
      id: "bus",
      icon: "🚌",
      titleKey: "trCatBus",
      title: "Bus",
      intro: {
        fr: "Découvrez les arrêts de bus à proximité de l'ENSTP.",
        ar: "اكتشف مواقف الحافلات القريبة من المدرسة.",
        en: "Discover bus stops near ENSTP."
      },
      items: [
        {
          title: { fr: "📍 Arrêt 1 — C", ar: "📍 الموقف 1 — C", en: "📍 Stop 1 — C" },
          icon: "🚏",
          desc: {
            fr: "En face CNEP Banque. 350 m / 5 min.\nDestinations : Ben Omar.\nFréquence : toutes les 10 min.",
            ar: "مقابل بنك CNEP. 350 م / 5 د.\nالوجهات: بن عمر.\nالتواتر: كل 10 دقائق.",
            en: "Opposite CNEP Bank. 350 m / 5 min.\nDestinations: Ben Omar.\nFrequency: every 10 min."
          },
          map: "CNEP Banque Kouba Alger"
        },
        {
          title: { fr: "📍 Arrêt 2 — B", ar: "📍 الموقف 2 — B", en: "📍 Stop 2 — B" },
          icon: "🚏",
          desc: {
            fr: "Gare routière Kouba. 500 m / 7 min.\nDestinations : plusieurs.\nFréquence : toujours disponible.",
            ar: "المحطة البرية القبة. 500 م / 7 د.\nالوجهات: متعددة.\nالتواتر: دائماً.",
            en: "Kouba bus station. 500 m / 7 min.\nDestinations: multiple.\nFrequency: always available."
          },
          map: "Gare routière Kouba Alger"
        },
        {
          title: { fr: "📍 Arrêt 3 — D", ar: "📍 الموقف 3 — D", en: "📍 Stop 3 — D" },
          icon: "🚏",
          desc: {
            fr: "En face ENS. 950 m / 14 min.\nDestinations : plusieurs.\nFréquence : 7h30 et 16h.",
            ar: "مقابل ENS. 950 م / 14 د.\nالوجهات: متعددة.\nالتواتر: 7:30 و 16:00.",
            en: "Opposite ENS. 950 m / 14 min.\nDestinations: multiple.\nFrequency: 7:30 and 16:00."
          },
          map: "ENS Kouba Alger"
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
    {
      id: "taxi",
      icon: "🚕",
      titleKey: "trCatTaxi",
      title: "Taxis & VTC",
      intro: {
        fr: "Stations de taxis à Kouba, applications VTC et accès à l'aéroport.",
        ar: "محطات التكاسي في القبة، تطبيقات النقل، والوصول إلى المطار.",
        en: "Taxi stations in Kouba, ride-hailing apps, and airport access."
      },
      items: [
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
            fr: "Points de prise en charge.\nDestinations : Bir Mourad Raïs, Kouba.",
            ar: "نقاط الركوب.\nالوجهات: بئر مراد رايس، القبة.",
            en: "Pickup points.\nDestinations: Bir Mourad Raïs, Kouba."
          },
          map: "Garidi 2 Kouba Alger"
        },
        {
          title: { fr: "🚕 Vieux Kouba", ar: "🚕 القبة القديمة", en: "🚕 Old Kouba" },
          icon: "🚕",
          desc: {
            fr: "Dans le quartier.\nDestinations : Ruisseau, Hussein Dey, centre.",
            ar: "في الحي.\nالوجهات: الرويسو، حسين داي، المركز.",
            en: "In the neighborhood.\nDestinations: Ruisseau, Hussein Dey, center."
          },
          map: "Vieux Kouba Alger"
        },
        {
          title: { fr: "🚕 Jolie Vue", ar: "🚕 جولي فو", en: "🚕 Jolie Vue" },
          icon: "🚕",
          desc: {
            fr: "Points de transport.\nDestinations : Bir Mourad Raïs, Birkhadem.",
            ar: "نقاط النقل.\nالوجهات: بئر مراد رايس، بئر خادم.",
            en: "Transport points.\nDestinations: Bir Mourad Raïs, Birkhadem."
          },
          map: "Jolie Vue Kouba Alger"
        },
        {
          title: { fr: "🚕 L'Appreval", ar: "🚕 الأبروفال", en: "🚕 L'Appreval" },
          icon: "🚕",
          desc: {
            fr: "Points de transport.\nDestinations : Gué de Constantine, Bachdjerrah.",
            ar: "نقاط النقل.\nالوجهات: جسر قسنطينة، باش جراح.",
            en: "Transport points.\nDestinations: Gué de Constantine, Bachdjerrah."
          },
          map: "L'Appreval Kouba Alger"
        },
        {
          title: { fr: "🚕 La Croix", ar: "🚕 لا كروا", en: "🚕 La Croix" },
          icon: "🚕",
          desc: {
            fr: "Points de prise en charge.\nDestinations : Kouba et voisins.",
            ar: "نقاط الركوب.\nالوجهات: القبة والجوار.",
            en: "Pickup points.\nDestinations: Kouba and neighbors."
          },
          map: "La Croix Kouba Alger"
        },
        {
          title: { fr: "🚕 Haï El Badr", ar: "🚕 حي البدر", en: "🚕 Haï El Badr" },
          icon: "🚕",
          desc: {
            fr: "Près de la station de métro.\nDestinations : Bachdjerrah, Baraki.",
            ar: "قرب محطة المترو.\nالوجهات: باش جراح، براقي.",
            en: "Near metro station.\nDestinations: Bachdjerrah, Baraki."
          },
          map: "Haï El Badr Alger"
        },
        {
          title: { fr: "🚕 Ruisseau", ar: "🚕 الرويسو", en: "🚕 Ruisseau" },
          icon: "🚕",
          desc: {
            fr: "Pôle de transport.\nDestinations : Hussein Dey, centre.",
            ar: "مركز النقل.\nالوجهات: حسين داي، المركز.",
            en: "Transport hub.\nDestinations: Hussein Dey, center."
          },
          map: "Ruisseau Alger"
        },
        {
          title: { fr: "🚕 Caroubier", ar: "🚕 القروبي", en: "🚕 Caroubier" },
          icon: "🚕",
          desc: {
            fr: "Près de la gare routière.\nDestinations : locales + inter-wilayas.",
            ar: "قرب المحطة البرية.\nالوجهات: محلية + بين الولايات.",
            en: "Near bus station.\nDestinations: local + inter-wilaya."
          },
          map: "Caroubier Alger"
        },
        {
          title: { fr: "🟠 Yassir", ar: "🟠 ياسر", en: "🟠 Yassir" },
          icon: "🟠",
          desc: {
            fr: "Le leader en Algérie. Prix fixe, suivi direct.",
            ar: "الرائد في الجزائر. سعر ثابت، تتبع مباشر.",
            en: "Leader in Algeria. Fixed price, live tracking."
          },
          extra: "⭐ 4.5/5 · 🌍 20+ wilayas",
          link: "https://play.google.com/store/apps/details?id=com.yassir.mobapp"
        },
        {
          title: { fr: "🔵 Heetch", ar: "🔵 هييتش", en: "🔵 Heetch" },
          icon: "🔵",
          desc: {
            fr: "Prix abordables. Suivi direct.",
            ar: "أسعار معقولة. تتبع مباشر.",
            en: "Affordable prices. Live tracking."
          },
          extra: "⭐ 4.4/5 · 💰 Moins cher",
          link: "https://play.google.com/store/apps/details?id=com.heetch"
        },
        {
          title: { fr: "🟢 inDrive", ar: "🟢 إن درايف", en: "🟢 inDrive" },
          icon: "🟢",
          desc: {
            fr: "Propose ton prix ! Négociable.",
            ar: "اقترح سعرك! قابل للتفاوض.",
            en: "Propose your price! Negotiable."
          },
          extra: "⭐ 4.6/5 · 🎯 Étudiants",
          link: "https://play.google.com/store/apps/details?id=sinet.startup.inDriver"
        },
        {
          title: { fr: "🟣 Nroho", ar: "🟣 نروحو", en: "🟣 Nroho" },
          icon: "🟣",
          desc: {
            fr: "Covoiturage algérien. Économise jusqu'à 90%.",
            ar: "مشاركة الرحلات الجزائرية. توفير حتى 90%.",
            en: "Algerian carpooling. Save up to 90%."
          },
          extra: "⭐ 4.3/5 · 🇩🇿 Made in Algeria",
          link: "https://apps.apple.com/app/nroho/id6748883481"
        },
        {
          title: { fr: "✈️ Aéroport Houari Boumediene", ar: "✈️ مطار هواري بومدين", en: "✈️ Houari Boumediene Airport" },
          icon: "✈️",
          desc: {
            fr: "1. Taxi/VTC → gare Caroubier.\n2. Bus direct → aéroport.\nOu : taxi direct (~40 min).",
            ar: "1. تكاسي/VTC → محطة القروبي.\n2. حافلة مباشرة → المطار.\nأو: تكاسي مباشر (~40 د).",
            en: "1. Taxi/VTC → Caroubier station.\n2. Direct bus → airport.\nOr: direct taxi (~40 min)."
          },
          map: "Aéroport Houari Boumediene Alger",
          hours: "24h/24",
          extra: "💡 Prévoir 2h d'avance"
        }
      ]
    },
    {
      id: "metro",
      icon: "🚇",
      titleKey: "trCatMetro",
      title: "Métro & Tramway",
      intro: {
        fr: "Comment se rendre + toutes les stations + tarifs.",
        ar: "كيفية الوصول + كل المحطات + التسعيرة.",
        en: "How to get there + all stations + fares."
      },
      items: [
        {
          title: { fr: "🎯 ENSTP → Métro Haï El Badr", ar: "🎯 المدرسة → مترو حي البدر", en: "🎯 ENSTP → Haï El Badr" },
          icon: "🚇",
          desc: {
            fr: "1. Bus vers Bachdjerrah.\n2. Descendre à Haï El Badr.",
            ar: "1. حافلة نحو باش جراح.\n2. انزل في حي البدر.",
            en: "1. Bus to Bachdjerrah.\n2. Get off at Haï El Badr."
          }
        },
        {
          title: { fr: "🎯 ENSTP → Tramway", ar: "🎯 المدرسة → الترامواي", en: "🎯 ENSTP → Tramway" },
          icon: "🚊",
          desc: {
            fr: "1. Bus → Bachdjerrah.\n2. Métro → centre.\n3. Les Fusillés.\n4. Tramway.",
            ar: "1. حافلة → باش جراح.\n2. مترو → المركز.\n3. المعدومون.\n4. الترامواي.",
            en: "1. Bus → Bachdjerrah.\n2. Metro → center.\n3. Les Fusillés.\n4. Tramway."
          }
        },
        {
          title: { fr: "💰 Tarifs", ar: "💰 التسعيرة", en: "💰 Fares" },
          icon: "💰",
          desc: {
            fr: "🚇 Métro : 50 DA.\n🚊 Tramway : 40 DA.",
            ar: "🚇 المترو: 50 دج.\n🚊 الترامواي: 40 دج.",
            en: "🚇 Metro: 50 DA.\n🚊 Tramway: 40 DA."
          }
        },
        {
          title: { fr: "🚇 Stations Métro (14)", ar: "🚇 محطات المترو (14)", en: "🚇 Metro Stations (14)" },
          icon: "🚇",
          desc: {
            fr: "1. Place des Martyrs\n2. Ali Boumendjel\n3. Tafourah - Grande Poste\n4. Khelifa Boukhalfa\n5. 1er Mai\n6. Aïssat Idir\n7. Hamma\n8. Jardin d'Essai\n9. Les Fusillés\n10. Amirouche\n11. Bachdjerrah\n12. Haï El Badr ⭐\n13. El Harrach Centre\n14. Aïn Naâdja",
            ar: "1. ساحة الشهداء\n2. علي بومنجل\n3. تافورة - البريد\n4. خليفة بوخالفة\n5. أول مايو\n6. عيسات إيدير\n7. الحامة\n8. حديقة التجارب\n9. المعدومون\n10. عميروش\n11. باش جراح\n12. حي البدر ⭐\n13. الحراش وسط\n14. عين النعجة",
            en: "1. Place des Martyrs\n2. Ali Boumendjel\n3. Tafourah - Grande Poste\n4. Khelifa Boukhalfa\n5. 1er Mai\n6. Aïssat Idir\n7. Hamma\n8. Jardin d'Essai\n9. Les Fusillés\n10. Amirouche\n11. Bachdjerrah\n12. Haï El Badr ⭐\n13. El Harrach Centre\n14. Aïn Naâdja"
          },
          extra: "⭐ Haï El Badr = plus proche de l'ENSTP"
        },
        {
          title: { fr: "🚊 Stations Tramway (15)", ar: "🚊 محطات الترامواي (15)", en: "🚊 Tramway Stations (15)" },
          icon: "🚊",
          desc: {
            fr: "1. Ruisseau\n2. Triolet\n3. Bachdjerrah\n4. Les Bananiers\n5. Cité Djilali\n6. Mokhtar Zerhouni\n7. Belfort\n8. El Harrach Gare\n9. El Harrach Centre ⭐\n10. Pont El Harrach\n11. Les Pins\n12. Café Chergui\n13. Larbi Ben M'hidi\n14. Cité 1200\n15. Dergana",
            ar: "1. الرويسو\n2. تريوليه\n3. باش جراح\n4. الموز\n5. حي جيلالي\n6. مختار زرهوني\n7. بلفور\n8. محطة الحراش\n9. الحراش وسط ⭐\n10. جسر الحراش\n11. الصنوبر\n12. مقهى شرقي\n13. العربي بن مهيدي\n14. حي 1200\n15. الدرقانة",
            en: "1. Ruisseau\n2. Triolet\n3. Bachdjerrah\n4. Les Bananiers\n5. Cité Djilali\n6. Mokhtar Zerhouni\n7. Belfort\n8. El Harrach Gare\n9. El Harrach Centre ⭐\n10. Pont El Harrach\n11. Les Pins\n12. Café Chergui\n13. Larbi Ben M'hidi\n14. Cité 1200\n15. Dergana"
          }
        },
        {
          titleKey: "trSitram",
          icon: "💳",
          descKey: "trSitramDesc",
          extra: "🎓 GRATUITE étudiants — via ETUSA"
        }
      ]
    },
    {
      id: "etwassel",
      icon: "🎓",
      titleKey: "trCatEtwassel",
      title: "Offre eTWASSEL",
      intro: {
        fr: "Offre étudiante pour voyager gratuitement.",
        ar: "عرض طلابي للسفر مجاناً.",
        en: "Student offer to travel for free."
      },
      items: [
        {
          title: { fr: "🎫 eTWASSEL", ar: "🎫 eTWASSEL", en: "🎫 eTWASSEL" },
          icon: "🎓",
          desc: {
            fr: "Frais : 150 DA.\nAvantage : gratuité métro + tramway toute l'année.",
            ar: "الرسوم: 150 دج.\nالميزة: مجانية المترو + الترامواي طوال السنة.",
            en: "Fee: 150 DA.\nBenefit: free metro + tramway all year."
          },
          extra: "💡 Inscription début d'année"
        }
      ]
    },
    {
      id: "walk",
      icon: "🚶",
      titleKey: "trCatWalk",
      title: "Itinéraires à pied",
      intro: {
        fr: "Itinéraires piétonniers autour de l'ENSTP.",
        ar: "مسارات المشي حول المدرسة.",
        en: "Walking routes around ENSTP."
      },
      items: [
        {
          title: { fr: "🚶 Arrêt 1 (CNEP)", ar: "🚶 الموقف 1 (CNEP)", en: "🚶 Stop 1 (CNEP)" },
          icon: "🚶",
          desc: {
            fr: "350 m / 5 min depuis l'école.",
            ar: "350 م / 5 د من المدرسة.",
            en: "350 m / 5 min from school."
          },
          map: "CNEP Banque Kouba Alger"
        },
        {
          title: { fr: "🚶 Arrêt 2 (Gare)", ar: "🚶 الموقف 2 (المحطة)", en: "🚶 Stop 2 (Station)" },
          icon: "🚶",
          desc: {
            fr: "500 m / 7 min depuis l'école.",
            ar: "500 م / 7 د من المدرسة.",
            en: "500 m / 7 min from school."
          },
          map: "Gare routière Kouba Alger"
        },
        {
          title: { fr: "🚶 Arrêt 3 (ENS)", ar: "🚶 الموقف 3 (ENS)", en: "🚶 Stop 3 (ENS)" },
          icon: "🚶",
          desc: {
            fr: "950 m / 14 min depuis l'école.",
            ar: "950 م / 14 د من المدرسة.",
            en: "950 m / 14 min from school."
          },
          map: "ENS Kouba Alger"
        }
      ]
    },
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
          extra: "💡 Réserve 1-2 jours avant"
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
