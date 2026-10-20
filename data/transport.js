// ============================================
// data/transport.js — قسم النقل (مع الخريطة التفاعلية)
// ============================================

window.SECTIONS = window.SECTIONS || [];

for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'transport') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "transport",
  icon: "🚌",
  titleKey: "sectionTransport",
  introKey: "transportIntro",
  type: "items",

  items: [
    // ========== 0. الخريطة التفاعلية (في الأعلى) ==========
    {
      title: { fr: "Carte interactive des transports", ar: "خريطة النقل التفاعلية", en: "Interactive transport map" },
      icon: "🗺️",
      desc: { 
        fr: "Consultez notre carte interactive pour localiser les arrêts de bus, les points de transport et les itinéraires utiles autour de l'ENSTP.", 
        ar: "تصفح خريطتنا التفاعلية لتحديد مواقع الحافلات، نقاط النقل والمسارات المفيدة حول المدرسة.", 
        en: "View our interactive map to locate bus stops, transport points and useful routes around ENSTP." 
      },
      type: "iframe-map",
      // رابط التضمين الصحيح لخريطة My Maps الخاصة بك
      iframeUrl: "https://www.google.com/maps/d/embed?mid=1F5jfgmT1iBuBm3UY6&ll=36.7255818,3.0695956&z=15"
    },

    // ========== 1. مواقف الحافلات ==========
    {
      title: { fr: "Arrêt 1 - C", ar: "الموقف 1 - C", en: "Stop 1 - C" },
      icon: "📍",
      desc: { 
        fr: "Localisation : en face CNEP Banque.\nDistance : 350 m / 5 minutes.\nDestinations : station de Ben Omar (toutes destinations).\nFréquence : toutes les 10 minutes.", 
        ar: "الموقع: مقابل بنك CNEP.\nالمسافة: 350 م / 5 دقائق.\nالوجهات: محطة بن عمر (كل الوجهات).\nالتواتر: كل 10 دقائق.", 
        en: "Location: opposite CNEP Bank.\nDistance: 350 m / 5 minutes.\nDestinations: Ben Omar station (all destinations).\nFrequency: every 10 minutes." 
      },
      map: "CNEP Banque Kouba Alger",
      extra: { fr: "🕐 ~5 min à pied", ar: "🕐 ~5 دقائق مشي", en: "🕐 ~5 min walk" }
    },
    {
      title: { fr: "Arrêt 2 - B", ar: "الموقف 2 - B", en: "Stop 2 - B" },
      icon: "📍",
      desc: { 
        fr: "Localisation : gare routière Kouba.\nDistance : 500 m / 7 minutes.\nDestinations : plusieurs destinations à travers Alger.\nFréquence : toujours disponible.", 
        ar: "الموقع: المحطة البرية القبة.\nالمسافة: 500 م / 7 دقائق.\nالوجهات: وجهات متعددة عبر الجزائر.\nالتواتر: دائماً متاح.", 
        en: "Location: Kouba bus station.\nDistance: 500 m / 7 minutes.\nDestinations: multiple destinations across Algiers.\nFrequency: always available." 
      },
      map: "Gare routière Kouba Alger",
      extra: { fr: "🕐 ~7 min à pied", ar: "🕐 ~7 دقائق مشي", en: "🕐 ~7 min walk" }
    },
    {
      title: { fr: "Arrêt 3 - D", ar: "الموقف 3 - D", en: "Stop 3 - D" },
      icon: "📍",
      desc: { 
        fr: "Localisation : en face ENS.\nDistance : 950 m / 14 minutes.\nDestinations : plusieurs destinations à travers Alger.\nFréquence : dépend des destinations (généralement 7h30 et 16h).", 
        ar: "الموقع: مقابل ENS.\nالمسافة: 950 م / 14 دقيقة.\nالوجهات: وجهات متعددة عبر الجزائر.\nالتواتر: يعتمد على الوجهة (عادة 7:30 و 16:00).", 
        en: "Location: opposite ENS.\nDistance: 950 m / 14 minutes.\nDestinations: multiple destinations across Algiers.\nFrequency: depends on destinations (usually 7:30 and 16:00)." 
      },
      map: "ENS Kouba Alger",
      extra: { fr: "🕐 ~14 min à pied", ar: "🕐 ~14 دقيقة مشي", en: "🕐 ~14 min walk" }
    },

    // ========== 2. التكاسي ==========
    {
      title: { fr: "Stations de taxis à Kouba", ar: "محطات التكاسي بالقبة", en: "Taxi stations in Kouba" },
      icon: "🚕",
      desc: {
        fr: "Ben Omar : Birkhadem, Bir Mourad Raïs, Baraki.\nGaridi 1 : Bir Mourad Raïs, Birkhadem.\nGaridi 2 : Bir Mourad Raïs, quartiers de Kouba.\nVieux Kouba : Ruisseau, Hussein Dey, centre d'Alger.\nJolie Vue : Bir Mourad Raïs, Birkhadem.\nL'Appreval : Gué de Constantine, Bachdjerrah.\nLa Croix : Kouba et quartiers voisins.\nHaï El Badr : Bachdjerrah, Baraki.\nRuisseau : Hussein Dey, centre d'Alger.\nCaroubier : destinations locales et inter-wilayas.",
        ar: "بن عمر: بئر خادم، بئر مراد رايس، براقي.\nقاريدي 1: بئر مراد رايس، بئر خادم.\nقاريدي 2: بئر مراد رايس، أحياء القبة.\nالقبة القديمة: الرويسو، حسين داي، وسط الجزائر.\nجولي فو: بئر مراد رايس، بئر خادم.\nالأبروفال: جسر قسنطينة، باش جراح.\nلا كروا: القبة والأحياء المجاورة.\nحي البدر: باش جراح، براقي.\nالرويسو: حسين داي، وسط الجزائر.\nالقروبي: وجهات محلية وبين الولايات.",
        en: "Ben Omar: Birkhadem, Bir Mourad Raïs, Baraki.\nGaridi 1: Bir Mourad Raïs, Birkhadem.\nGaridi 2: Bir Mourad Raïs, Kouba districts.\nOld Kouba: Ruisseau, Hussein Dey, downtown Algiers.\nJolie Vue: Bir Mourad Raïs, Birkhadem.\nL'Appreval: Gué de Constantine, Bachdjerrah.\nLa Croix: Kouba and neighboring areas.\nHaï El Badr: Bachdjerrah, Baraki.\nRuisseau: Hussein Dey, downtown Algiers.\nCaroubier: local and inter-wilaya destinations."
      }
    },

    // ========== 3. المترو والترامواي ==========
    {
      title: { fr: "ENSTP → Métro Haï El Badr", ar: "المدرسة → مترو حي البدر", en: "ENSTP → Haï El Badr Metro" },
      icon: "🚇",
      desc: { 
        fr: "1. Départ de l'ENSTP.\n2. Prendre le bus vers Bachdjerrah.\n3. Descendre à l'arrêt de métro Haï El Badr.\n4. Si nécessaire, prendre un taxi.", 
        ar: "1. الانطلاق من المدرسة.\n2. خذ الحافلة باتجاه باش جراح.\n3. انزل في محطة مترو حي البدر.\n4. إذا لزم الأمر، خذ سيارة أجرة.", 
        en: "1. Depart from ENSTP.\n2. Take the bus towards Bachdjerrah.\n3. Get off at Haï El Badr metro stop.\n4. If needed, take a taxi." 
      }
    },
    {
      title: { fr: "ENSTP → Tramway", ar: "المدرسة → الترامواي", en: "ENSTP → Tramway" },
      icon: "🚊",
      desc: { 
        fr: "1. Départ de l'ENSTP.\n2. Prendre le bus vers Bachdjerrah (métro Haï El Badr).\n3. Prendre le métro vers le centre d'Alger.\n4. Descendre à Les Fusillés.\n5. Rejoindre la station de tramway.\n6. Prendre le tramway.", 
        ar: "1. الانطلاق من المدرسة.\n2. خذ الحافلة باتجاه باش جراح (مترو حي البدر).\n3. خذ المترو باتجاه وسط الجزائر.\n4. انزل في المعدومون (Les Fusillés).\n5. اتجه إلى محطة الترامواي.\n6. خذ الترامواي.", 
        en: "1. Depart from ENSTP.\n2. Take the bus towards Bachdjerrah (Haï El Badr metro).\n3. Take the metro towards downtown Algiers.\n4. Get off at Les Fusillés.\n5. Head to the tramway station.\n6. Take the tramway." 
      }
    },
    {
      title: { fr: "Tarifs Métro & Tramway", ar: "تسعيرة المترو والترامواي", en: "Metro & Tramway Fares" },
      icon: "💰",
      desc: { 
        fr: "🚇 Métro : 50 DA par trajet.\n🚊 Tramway : 40 DA par trajet.\n🎓 Offre étudiante : eTWASSEL (gratuité selon conditions).", 
        ar: "🚇 المترو: 50 دج للرحلة.\n🚊 الترامواي: 40 دج للرحلة.\n🎓 العرض الطلابي: eTWASSEL (مجانية حسب الشروط).", 
        en: "🚇 Metro: 50 DA per trip.\n🚊 Tramway: 40 DA per trip.\n🎓 Student offer: eTWASSEL (free according to conditions)." 
      }
    },

    // ========== 4. المسارات والتطبيقات ==========
    {
      title: { fr: "Itinéraires à pied", ar: "مسارات المشي", en: "Walking routes" },
      icon: "🚶",
      desc: { 
        fr: "Retrouvez les itinéraires piétonniers utiles pour rejoindre les arrêts de transport et les points importants autour de l'ENSTP. Les itinéraires sont disponibles sur la carte interactive.", 
        ar: "اكتشف مسارات المشي المفيدة للوصول إلى مواقف النقل والأماكن المهمة حول المدرسة. المسارات متوفرة على الخريطة التفاعلية.", 
        en: "Find useful walking routes to reach transport stops and key places around ENSTP. Routes are available on the interactive map." 
      }
    },
    {
      title: { fr: "Carte interactive", ar: "الخريطة التفاعلية", en: "Interactive Map" },
      icon: "🗺️",
      desc: { 
        fr: "Consulter notre carte interactive pour localiser les arrêts de bus, les points de transport et les itinéraires utiles autour de l'ENSTP.", 
        ar: "تصفح خريطتنا التفاعلية لتحديد مواقع الحافلات، نقاط النقل والمسارات المفيدة حول المدرسة.", 
        en: "View our interactive map to locate bus stops, transport points and useful routes around ENSTP." 
      },
      link: "https://www.google.com/maps/d/u/0/viewer?mid=1F5jfgmT1iBuBm3UY6&ll=36.7255818,3.0695956&z=15"
    },
    {
      title: { fr: "Applications VTC", ar: "تطبيقات النقل", en: "VTC Apps" },
      icon: "📱",
      desc: { 
        fr: "Utilisez Yassir, Heetch, inDrive ou Nroho pour vos déplacements.", 
        ar: "استخدم ياسر، هيتش، إن درايف أو نروحو للتنقل.", 
        en: "Use Yassir, Heetch, inDrive or Nroho for your trips." 
      }
    },
    {
      title: { fr: "Offre eTWASSEL", ar: "عرض eTWASSEL", en: "eTWASSEL Offer" },
      icon: "🎫",
      desc: { 
        fr: "Application pour voyager gratuitement en métro et tramway.\nFrais d'inscription : 150 DA au début de l'année universitaire.\nAvantage : gratuité des trajets pendant toute l'année.", 
        ar: "تطبيق للسفر مجاناً بالمترو والترامواي.\nرسوم التسجيل: 150 دج في بداية السنة الجامعية.\nالميزة: مجانية التنقل طوال السنة.", 
        en: "App to travel for free on metro and tramway.\nRegistration fee: 150 DA at the start of the academic year.\nAdvantage: free travel all year long." 
      },
      extra: { fr: "💡 Inscription au début de l'année", ar: "💡 التسجيل في بداية السنة", en: "💡 Registration at start of year" }
    }
  ]
});

// إضافة الترجمات
window.LANG_DATA = window.LANG_DATA || {};
const trans = {
  fr: { sectionTransport: "Transport", transportIntro: "Découvrez les transports autour de l'ENSTP." },
  ar: { sectionTransport: "النقل", transportIntro: "اكتشف وسائل النقل حول المدرسة." },
  en: { sectionTransport: "Transport", transportIntro: "Discover transport around ENSTP." }
};
Object.keys(trans).forEach(lang => {
  if (!window.LANG_DATA[lang]) window.LANG_DATA[lang] = {};
  Object.assign(window.LANG_DATA[lang], trans[lang]);
});
