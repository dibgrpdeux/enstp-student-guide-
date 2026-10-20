// ============================================
// data/shopping.js — التسوق والأكل
// ============================================

window.SECTIONS = window.SECTIONS || [];

(function() {
  for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
    if (window.SECTIONS[i].id === 'shopping') window.SECTIONS.splice(i, 1);
  }

  const CATS = {
    manger:   { icon: "🍽️", fr: "Manger",       ar: "المطاعم",       en: "Food" },
    cafe:     { icon: "☕", fr: "Cafés",         ar: "المقاهي",       en: "Cafés" },
    courses:  { icon: "🛒", fr: "Courses",       ar: "التسوق اليومي", en: "Groceries" },
    pharma:   { icon: "💊", fr: "Pharmacies",    ar: "الصيدليات",     en: "Pharmacies" },
    copie:    { icon: "🖨️", fr: "Copie & Print", ar: "النسخ والطبع",  en: "Print & Copy" },
    sport:    { icon: "🏋️", fr: "Sport",         ar: "الرياضة",       en: "Sports" },
    beaute:   { icon: "💈", fr: "Beauté",        ar: "الحلاقة",       en: "Beauty" },
    tel:      { icon: "📱", fr: "Téléphonie",    ar: "الهواتف",       en: "Phones" },
    vetements:{ icon: "👕", fr: "Vêtements",     ar: "الملابس",       en: "Clothing" },
    services: { icon: "🏦", fr: "Services",      ar: "الخدمات",       en: "Services" },
    mosquee:  { icon: "🕌", fr: "Mosquées",      ar: "المساجد",       en: "Mosques" }
  };

  const ENSTP = [36.7255818, 3.0695956];

  function parseGPS(str) {
    if (!str) return null;
    try {
      if (Array.isArray(str)) return str;
      if (typeof str === 'string') {
        const cleaned = str.replace(/[\[\]]/g, '').split(',').map(Number);
        if (cleaned.length === 2 && !isNaN(cleaned[0]) && !isNaN(cleaned[1])) return cleaned;
      }
    } catch (e) {}
    return null;
  }

  const RAW = [
    // ============ MANGER (🍽️) ============
    ["manger","Ovni Burger","+213791389001",4.6,1,[["11:00","02:00"]],{5:[["17:00","02:00"]]},"Burgers","[36.7294789,3.0727182]",{}, ""],
    ["manger","CHEESE KOU","+213562656809",4.2,1,[["10:30","01:00"]],{},"Burgers, tacos, pizzas","[36.7226875,3.0739069]",{}, ""],
    ["manger","KGB","+213541041085",3.8,1,[["10:30","02:00"]],{5:[["07:00","02:00"]]},"Burgers","[36.7296152,3.0765289]",{web:"https://koubagourmentburgerkgb.lovable.app/"}, "tTcA4WxMmYU"],
    ["manger","DZ TACOS","+213558363274",3.8,1,[["11:00","01:00"]],{5:[["17:00","01:00"]]},"Tacos, pizza","[36.7220684,3.076564]",{ig:"https://instagram.com/dztacos16"}, ""],
    ["manger","Chippy Pizza","+213549238957",3.8,2,[["11:00","23:00"]],{4:[["11:00","23:30"]],5:[["15:00","23:30"]]},"Pizzeria","[36.7274727,3.0651558]",{}, ""],
    ["manger","So Pizz Vieux Kouba","+213557603186",4.5,1,[["11:00","23:00"]],{4:[["11:00","24:00"]],5:[["17:00","24:00"]]},"Pizzeria","[36.7294389,3.0743456]",{}, "Fd-Xfzggt4A"],
    ["manger","Pizza Fun","+213552339073",4.0,3,[["11:00","22:30"]],{5:[["16:30","22:30"]]},"Pizzeria","[36.7275167,3.0651086]",{}, ""],
    ["manger","Mo Pizza Kouba","+213552554140",4.4,2,[["11:00","23:55"]],{4:[["11:00","00:30"]],5:[["18:00","00:30"]]},"Pizzas, sandwichs","[36.7289283,3.0804309]",{}, ""],
    ["manger","Pizza Show","+213790741322",3.7,1,[["11:00","01:00"]],{5:[["17:00","02:00"]],0:[["11:00","24:00"]]},"Pizzas","[36.7303492,3.0843623]",{}, ""],
    ["manger","Chicken Spot Kouba","+213559112233",4.3,1,[["11:00","23:30"]],{5:[["16:00","23:30"]]},"Poulet frit, grillades","[36.7285,3.0752]",{}, ""],
    ["manger","Tacos World","+213661445566",4.1,1,[["11:00","01:00"]],{},"Tacos, burgers","[36.7268,3.0771]",{}, ""],
    ["manger","Snack El Wafa","+213550778899",4.0,1,[["08:00","23:00"]],{},"Sandwichs, chawarma","[36.7259,3.0714]",{}, ""],
    ["manger","Grill House Alger","+213771223344",4.5,2,[["12:00","23:30"]],{5:[["18:00","23:30"]]},"Grillades, couscous","[36.7312,3.0731]",{}, ""],
    ["manger","Pizza Roma","+213553667788",4.2,1,[["11:00","23:00"]],{},"Pizza italienne","[36.7243,3.0688]",{}, ""],
    ["manger","Kebab Istanbul","+213559334455",4.4,1,[["11:00","00:00"]],{5:[["17:00","00:00"]]},"Kebab, turc","[36.7276,3.0802]",{}, ""],
    ["manger","Chawarma King","+213770112233",4.0,1,[["11:00","01:30"]],{},"Chawarma, falafel","[36.7264,3.0745]",{}, ""],

    // ============ CAFÉS (☕) ============
    ["cafe","Green Terrace","+213770203542",4.5,0,[["07:30","22:00"]],{4:[["07:30","24:00"]],5:[["15:00","24:00"]]},"Salon de thé, crêpes, gaufres","[36.7297067,3.0745479]",{}, ""],
    ["cafe","Brioch'art Kouba","+213559475640",4.5,2,[["07:00","22:00"]],{},"Café, viennoiseries","[36.7298356,3.075571]",{}, ""],
    ["cafe","Omar Kouba cacahouètes","",4.8,0,[["15:00","03:00"]],{},"Café, thé","[36.7269374,3.0705958]",{}, ""],
    ["cafe","Pâtisserie Le Palais des saveurs","+213661981010",3.9,0,[["07:00","22:00"]],{},"Pâtisserie","[36.730135,3.0622083]",{}, ""],
    ["cafe","Pâtisserie César","+213669846909",3.9,0,[["09:00","19:00"]],{},"Pâtisserie","[36.7303142,3.0840737]",{}, ""],
    ["cafe","Pâtisserie La fève","+213550057682",4.3,0,[["06:00","19:00"]],{},"Pâtisserie","[36.7284191,3.0825518]",{}, ""],
    ["cafe","Café Central Kouba","+213559112200",4.3,1,[["07:00","23:00"]],{},"Café, jus","[36.7289,3.0732]",{}, ""],
    ["cafe","Café de la Place","+213661223300",4.1,1,[["06:30","22:00"]],{},"Café, petit-déjeuner","[36.7271,3.0764]",{}, ""],
    ["cafe","Salon El Bahdja","+213770334400",4.6,2,[["08:00","23:00"]],{5:[["14:00","23:00"]]},"Salon de thé premium","[36.7305,3.0715]",{}, ""],
    ["cafe","Celtic Coffee","",4.2,1,[["08:00","23:00"]],{},"Café, boissons","[36.7290, 3.0740]",{}, "8VGVnonAnIg"],

    // ============ COURSES (🛒) ============
    ["courses","Supérette El-Benna","",3.8,0,[["07:00","22:30"]],{5:[["08:00","12:00"],["13:30","22:30"]]},"Courses","[36.7246946,3.0744576]",{}, "_bspquujzqg"],
    ["courses","Supérette Sifou Jolie Vue","+213783186861",4.1,0,[["07:00","24:00"]],{},"Courses (pas de carte)","[36.7232702,3.071961]",{}, ""],
    ["courses","Soummam","",4.1,1,[["09:00","19:00"]],{0:[]},"Boulangerie, pâtisserie","[36.7287341,3.0725755]",{}, "kPLMeh9niw4"],
    ["courses","Boulangerie La baguette","",4.7,0,[],{},"Horaires non indiqués","[36.7248389,3.0717908]",{}, ""],
    ["courses","Marché Ali Mendjeli","+213553112200",4.3,1,[["07:00","19:00"]],{5:[["07:00","12:00"]]},"Marché de proximité","[36.7261,3.0702]",{}, ""],
    ["courses","Boulangerie El Baraka","+213661998877",4.5,0,[["05:00","21:00"]],{},"Pain, viennoiseries","[36.7288,3.0746]",{}, ""],
    ["courses","Supérette Al Amal","+213770445566",3.9,0,[["07:30","22:00"]],{},"Courses, boissons","[36.7255,3.0781]",{}, ""],
    ["courses","Primeur El Feth","",4.2,0,[["07:00","20:00"]],{},"Fruits & légumes","[36.7294,3.0718]",{}, ""],

    // ============ PHARMA (💊) ============
    ["pharma","Pharmacie BAIDA","+213540175021",4.8,0,[["09:00","02:00"]],{5:[]},"Ouverte tard","[36.7262975,3.0782722]",{}, "ujIck_QBRGk"],
    ["pharma","Pharmacie Hassani Hocine","+213550361618",3.0,0,[["08:00","02:00"]],{},"Horaires à confirmer","[36.7279488,3.0788779]",{}, ""],
    ["pharma","Pharmacie AIT AISSA","+213770516293",4.1,0,[["00:00","24:00"]],{},"24h/24","[36.7309633,3.0886542]",{}, ""],
    ["pharma","Pharmacie BOUALEM","+21323703254",4.1,0,[["09:00","20:00"]],{5:[]},"","[36.730316,3.0679402]",{}, ""],
    ["pharma","Pharmacie El Chifa","+213661223344",4.4,0,[["08:30","21:00"]],{},"Conseil, garde","[36.7276,3.0731]",{}, ""],

    // ============ COPIE (🖨️) ============
    ["copie","Copie Quick Vieux Kouba","+213550722835",4.1,0,[["07:30","21:00"]],{5:[]},"Photocopie","[36.7291088,3.074546]",{fb:"http://www.facebook.com/copie.quick"}, ""],
    ["copie","Librairie 3ami Daoud","+213549143675",4.5,0,[["07:15","23:00"]],{5:[["16:00","23:00"]]},"Papeterie, livres","[36.7297506,3.0734749]",{}, "0TiwKh8Bc2g"],
    ["copie","Imprimerie FMCOLOR","+213551305233",4.0,0,[["08:00","20:00"]],{5:[],6:[["10:00","20:00"]]},"Impression","[36.72126,3.0777467]",{}, ""],
    ["copie","Cyber Imprim","+213770556677",4.2,0,[["08:30","22:00"]],{},"Impression, reliure","[36.7274,3.0755]",{}, ""],

    // ============ SPORT (🏋️) ============
    ["sport","Bk sports Kouba","+213550669696",4.5,0,[["08:00","24:00"]],{5:[["08:30","12:00"],["16:00","21:00"]],0:[["08:00","23:00"]]},"Salle de sport","[36.7278532,3.0888096]",{}, ""],
    ["sport","Fitness City","+213770585959",4.4,0,[["05:00","22:00"]],{5:[["15:00","21:00"]],6:[["07:00","22:00"]]},"Salle de sport, espace femmes","[36.7242332,3.0917418]",{}, ""],
    ["sport","Body Boost Gym","",4.8,0,[["06:30","23:00"]],{5:[["15:00","23:00"]]},"Salle de sport","[36.7190907,3.0847302]",{}, ""],
    ["sport","BE FITNESS","+213551366369",3.9,0,[],{},"Horaires non indiqués","[36.7235234,3.0748996]",{}, ""],

    // ============ BEAUTÉ (💈) ============
    ["beaute","Golden Barber","+213550249997",4.7,0,[["10:00","21:00"]],{5:[["15:00","20:00"]],0:[]},"Coiffeur","[36.7305383,3.0654661]",{}, ""],
    ["beaute","Barber Sperdi","+213552054935",4.9,0,[["09:00","02:00"]],{5:[["14:00","02:00"]]},"Barbier","[36.7255506,3.0887766]",{}, ""],
    ["beaute","Signature Cut","+213555618071",5.0,0,[["10:30","24:00"]],{5:[["10:00","24:00"]]},"Barbier","[36.7255207,3.0723259]",{}, ""],
    ["beaute","Salon Charlie Chaplin","+213773652983",4.0,0,[["10:00","22:00"]],{},"Coiffeur, un peu cher","[36.7289555,3.0724801]",{}, ""],
    ["beaute","Salon Nour","+213661778899",4.4,0,[["09:30","21:00"]],{},"Salon femmes","[36.7271,3.0803]",{}, ""],

    // ============ TÉLÉPHONIE (📱) ============
    ["tel","YOKA PHONE","+213559216195",4.7,0,[["10:30","22:00"]],{5:[["16:30","22:00"]]},"Téléphones, accessoires","[36.7291607,3.0738177]",{}, ""],
    ["tel","Rogers Phone","+213540124946",4.8,0,[["11:00","23:30"]],{5:[["16:00","23:30"]]},"Téléphones, accessoires","[36.7289015,3.0769381]",{}, ""],
    ["tel","Prestige Mobile","+213561306108",4.5,0,[["09:00","22:00"]],{5:[["09:30","12:00"],["15:00","23:00"]]},"Téléphones, accessoires","[36.7291285,3.0736874]",{}, ""],
    ["tel","Univers Phone Kouba","+213549893995",4.7,0,[["09:00","21:00"]],{},"Téléphones, accessoires","[36.7297848,3.0744086]",{}, ""],
    ["tel","Mobile Center","+213770998877",4.3,0,[["10:00","22:00"]],{},"Réparation téléphones","[36.7281,3.0762]",{}, ""],
    ["tel","Brothers Phone","",4.5,0,[["09:00","21:00"]],{},"Téléphones","[36.7280, 3.0750]",{}, "1-eKHcz31Oc"],

    // ============ VÊTEMENTS (👕) ============
    ["vetements","Kouba Fashion","+213559223344",4.2,1,[["09:30","21:00"]],{},"Vêtements homme/femme","[36.7289,3.0739]",{}, ""],
    ["vetements","Boutique El Aniq","+213661887766",4.4,2,[["10:00","21:30"]],{},"Vêtements modernes","[36.7276,3.0755]",{}, ""],
    ["vetements","Sport Wear DZ","+213770445599",4.1,2,[["10:00","21:00"]],{},"Vêtements sport","[36.7297,3.0713]",{}, ""],
    ["vetements","Chaussures Center","+213553667799",4.3,1,[["09:00","20:30"]],{},"Chaussures homme/femme","[36.7268,3.0773]",{}, ""],

    // ============ SERVICES (🏦) ============
    ["services","Bureau de Poste Kouba","+21321XXXXXX",4.0,0,[["08:00","16:30"]],{5:[["08:00","12:00"]]},"Poste, retrait","[36.7274,3.0731]",{}, ""],
    ["services","CNAS Kouba","",3.8,0,[["08:00","16:00"]],{5:[["08:00","12:00"]]},"Sécurité sociale","[36.7278,3.0751]",{}, ""],
    ["services","Banque BNA Kouba","",4.0,0,[["08:00","16:00"]],{5:[["08:00","12:00"]]},"Banque, DAB","[36.7281,3.0764]",{}, ""],
    ["services","Bureau de change","",4.2,0,[["09:00","18:00"]],{},"Change devises","[36.7290,3.0738]",{}, ""],
    ["services","Laverie Express","+213551223344",4.4,0,[["08:00","20:00"]],{},"Lavage, repassage","[36.7262,3.0762]",{}, ""],

    // ============ MOSQUÉES (🕌) ============
    ["mosquee","مسجد عبد اللطيف سلطاني","",4.9,0,[],{},"مسجد","[36.7280, 3.0740]",{}, "q9iK6P3XsYA"]
  ];

  const items = RAW.map(function(a, i) {
    return {
      i: i,
      c: a[0] || 'manger',
      n: a[1] || 'Sans nom',
      t: a[2] || '',
      r: a[3] || 0,
      p: a[4] || 0,
      h: a[5] || [],
      x: a[6] || {},
      note: a[7] || '',
      g: parseGPS(a[8]),
      l: a[9] || {},
      video: a[10] || ""
    };
  });

  window.SECTIONS.push({
    id: "shopping",
    icon: "🍽️",
    titleKey: "sectionShopping",
    introKey: "shoppingIntro",
    type: "shops",
    categories: Object.keys(CATS).map(function(key) {
      return {
        id: key,
        icon: CATS[key].icon,
        titleKey: "shop_" + key,
        title: CATS[key].fr,
        items: items.filter(function(x) { return x.c === key; })
      };
    }).filter(function(c) { return c.items.length > 0; })
  });

  window.SHOP_DATA = { items: items, cats: CATS, enstp: ENSTP };

  window.LANG_DATA = window.LANG_DATA || {};
  const trans = {
    fr: {
      sectionShopping: "Manger & Shopping",
      shoppingIntro: "Tous les commerces autour de l'ENSTP.",
      shop_manger: "🍽️ Manger", shop_cafe: "☕ Cafés", shop_courses: "🛒 Courses",
      shop_pharma: "💊 Pharmacies", shop_copie: "🖨️ Copie & Print", shop_sport: "🏋️ Sport",
      shop_beaute: "💈 Beauté", shop_tel: "📱 Téléphonie", shop_vetements: "👕 Vêtements",
      shop_services: "🏦 Services", shop_mosquee: "🕌 Mosquées",
      shopOpen: "Ouvert", shopClosed: "Fermé", shopCall: "📞 Appeler", shopGo: "🚶 Y aller"
    },
    ar: {
      sectionShopping: "الأكل والتسوق",
      shoppingIntro: "كل المتاجر حول ENSTP.",
      shop_manger: "🍽️ المطاعم", shop_cafe: "☕ المقاهي", shop_courses: "🛒 التسوق اليومي",
      shop_pharma: "💊 الصيدليات", shop_copie: "🖨️ النسخ والطبع", shop_sport: "🏋️ الرياضة",
      shop_beaute: "💈 الحلاقة", shop_tel: "📱 الهواتف", shop_vetements: "👕 الملابس",
      shop_services: "🏦 الخدمات", shop_mosquee: "🕌 المساجد",
      shopOpen: "مفتوح", shopClosed: "مغلق", shopCall: "📞 اتصل", shopGo: "🚶 اذهب"
    },
    en: {
      sectionShopping: "Food & Shopping",
      shoppingIntro: "All shops around ENSTP.",
      shop_manger: "🍽️ Food", shop_cafe: "☕ Cafés", shop_courses: "🛒 Groceries",
      shop_pharma: "💊 Pharmacies", shop_copie: "🖨️ Print & Copy", shop_sport: "🏋️ Sports",
      shop_beaute: "💈 Beauty", shop_tel: "📱 Phones", shop_vetements: "👕 Clothing",
      shop_services: "🏦 Services", shop_mosquee: "🕌 Mosques",
      shopOpen: "Open", shopClosed: "Closed", shopCall: "📞 Call", shopGo: "🚶 Go"
    }
  };
  Object.keys(trans).forEach(function(lang) {
    if (!window.LANG_DATA[lang]) window.LANG_DATA[lang] = {};
    Object.assign(window.LANG_DATA[lang], trans[lang]);
  });
})();
