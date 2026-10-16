// ============================================
// data/alger.js — Loisirs à Alger
// Version 3.0 — مع صور من جذر المستودع
// ============================================

(function() {
  if (typeof window.SECTIONS === 'undefined') {
    window.SECTIONS = window.SECTIONS || [];
  }

  for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
    if (window.SECTIONS[i].id === 'alger') window.SECTIONS.splice(i, 1);
  }

  // دالة ترميز المسافات والأقواس في أسماء الملفات
  function enc(filename) {
    return encodeURIComponent(filename);
  }

  window.SECTIONS.push({
    id: "alger",
    icon: "🎉",
    titleKey: "sectionAlger",
    introKey: "algerIntro",
    type: "services",
    categories: [
      {
        id: "plages",
        icon: "🏖️",
        titleKey: "algerPlages",
        title: "Plages",
        intro: {
          fr: "Les meilleures plages d'Alger pour se détendre.",
          ar: "أجمل شواطئ الجزائر العاصمة للاسترخاء.",
          en: "The best beaches in Algiers to relax."
        },
        items: [
          {
            title: { fr: "Sidi Fredj", ar: "سيدي فرج", en: "Sidi Fredj" },
            icon: "🏖️",
            desc: { fr: "Plage familiale avec animations et restaurants.", ar: "شاطئ عائلي مع أنشطة ومطاعم.", en: "Family beach with activities and restaurants." },
            map: "Sidi Fredj Alger",
            images: [
              enc("SIDI-FREDJ.png"),
              enc("images (9).jpeg"),
              enc("images (10).jpeg")
            ],
            videos: []
          },
          {
            title: { fr: "Zeralda", ar: "زرالدة", en: "Zeralda" },
            icon: "🏖️",
            desc: { fr: "Sable fin et ambiance calme.", ar: "رمل ناعم وجو هادئ.", en: "Fine sand and calm vibes." },
            map: "Zeralda plage Alger",
            images: [
              enc("images (3).jpeg"),
              enc("images (4).jpeg"),
              enc("images (5).jpeg")
            ],
            videos: []
          },
          {
            title: { fr: "Bordj El Kiffan", ar: "برج الكيفان", en: "Bordj El Kiffan" },
            icon: "🏖️",
            desc: { fr: "Plage urbaine accessible.", ar: "شاطئ حضري يمكن الوصول إليه.", en: "Urban beach, easily accessible." },
            map: "Bordj El Kiffan plage",
            images: [
              enc("images (6).jpeg"),
              enc("images (7).jpeg"),
              enc("images (8).jpeg")
            ],
            videos: []
          },
          {
            title: { fr: "Les Dunes (Moretti)", ar: "الكثبان (موريتي)", en: "Les Dunes (Moretti)" },
            icon: "🏖️",
            desc: { fr: "Espaces verts + mer.", ar: "مساحات خضراء + البحر.", en: "Green spaces + sea." },
            map: "Les Dunes Moretti Alger",
            images: [
              enc("20200808_114207.jpg")
            ],
            videos: []
          }
        ]
      },
      {
        id: "parcs",
        icon: "🌳",
        titleKey: "algerParcs",
        title: "Parcs et jardins",
        intro: {
          fr: "Les poumons verts d'Alger.",
          ar: "الرئات الخضراء للجزائر.",
          en: "Algiers' green lungs."
        },
        items: [
          {
            title: { fr: "Jardin d'Essai du Hamma", ar: "حديقة التجارب بالحامة", en: "Jardin d'Essai du Hamma" },
            icon: "🌳",
            desc: { fr: "Le poumon vert d'Alger.", ar: "رئة الجزائر الخضراء.", en: "Algiers' green lung." },
            map: "Jardin d'Essai El Hamma Alger",
            images: [],
            videos: [
              { type: "youtube", id: "DOHY1JVqmDU", title: { fr: "Visite du Jardin d'Essai", ar: "زيارة حديقة التجارب", en: "Jardin d'Essai visit" } }
            ]
          },
          {
            title: { fr: "Parc de Ben Aknoun", ar: "حديقة بن عكنون", en: "Ben Aknoun Park" },
            icon: "🌳",
            desc: { fr: "Zoo et promenades.", ar: "حديقة حيوانات ومسارات.", en: "Zoo and walks." },
            map: "Parc Ben Aknoun Alger",
            images: [
              enc("images (11).jpeg"),
              enc("images (12).jpeg")
            ],
            videos: []
          },
          {
            title: { fr: "Bois des Arcades (Hydra)", ar: "غابة الأركاد (حيدرة)", en: "Bois des Arcades (Hydra)" },
            icon: "🌳",
            desc: { fr: "Idéal pour courir.", ar: "مثالي للجري.", en: "Ideal for running." },
            map: "Bois des Arcades Hydra Alger",
            images: [
              enc("images (13).jpeg"),
              enc("images (14).jpeg"),
              enc("images (15).jpeg")
            ],
            videos: []
          },
          {
            title: { fr: "Hamma Park", ar: "حديقة الحامة", en: "Hamma Park" },
            icon: "🌳",
            desc: { fr: "Parc verdoyant au cœur d'Alger.", ar: "حديقة خضراء في قلب الجزائر.", en: "Green park in the heart of Algiers." },
            map: "Hamma Park Alger",
            images: [],
            videos: [
              { type: "youtube", id: "NNHh_lcMfPo", title: { fr: "Visite du Hamma Park", ar: "زيارة حديقة الحامة", en: "Hamma Park visit" } }
            ]
          }
        ]
      },
      {
        id: "culture",
        icon: "🏛️",
        titleKey: "algerCulture",
        title: "Culture et patrimoine",
        intro: {
          fr: "Découvre l'histoire de la capitale.",
          ar: "اكتشف تاريخ العاصمة.",
          en: "Discover the history of the capital."
        },
        items: [
          {
            title: { fr: "La Casbah d'Alger", ar: "قصبة الجزائر", en: "The Casbah of Algiers" },
            icon: "🏛️",
            desc: { fr: "Patrimoine mondial UNESCO.", ar: "تراث عالمي لليونسكو.", en: "UNESCO World Heritage." },
            map: "Casbah Alger",
            images: [],
            videos: [
              { type: "youtube", id: "K7f2zx0UFsg", title: { fr: "Visite de la Casbah", ar: "زيارة القصبة", en: "Casbah visit" } }
            ]
          },
          {
            title: { fr: "Musée du Bardo", ar: "متحف الباردو", en: "Bardo Museum" },
            icon: "🏛️",
            desc: { fr: "Art et histoire.", ar: "فن وتاريخ.", en: "Art and history." },
            map: "Musée du Bardo Alger",
            images: [],
            videos: [
              { type: "youtube", id: "Bx-EhrdmjbA", title: { fr: "Bienvenue au Musée du Bardo", ar: "مرحباً بكم في متحف الباردو", en: "Welcome to Bardo Museum" } }
            ]
          },
          {
            title: { fr: "Musée des Beaux-Arts", ar: "متحف الفنون الجميلة", en: "Museum of Fine Arts" },
            icon: "🏛️",
            desc: { fr: "Collections d'art.", ar: "مجموعات فنية.", en: "Art collections." },
            map: "Musée des Beaux-Arts Alger",
            images: [
              enc("images (16).jpeg")
            ],
            videos: []
          },
          {
            title: { fr: "Basilique Notre-Dame d'Afrique", ar: "كنيسة سيدة إفريقيا", en: "Notre-Dame d'Afrique Basilica" },
            icon: "⛪",
            desc: { fr: "Vue panoramique sur la baie.", ar: "إطلالة بانورامية على الخليج.", en: "Panoramic view over the bay." },
            map: "Notre-Dame d'Afrique Alger",
            images: [
              enc("images (17).jpeg"),
              enc("images (18).jpeg"),
              enc("images (19).jpeg")
            ],
            videos: []
          },
          {
            title: { fr: "La Grande Poste", ar: "البريد المركزي", en: "La Grande Poste" },
            icon: "🏛️",
            desc: { fr: "Monument emblématique.", ar: "معلم مميز.", en: "Iconic monument." },
            map: "Grande Poste Alger",
            images: [],
            videos: [
              { type: "youtube", id: "QQbkX8MeCWI", title: { fr: "Visite de la Grande Poste", ar: "زيارة البريد المركزي", en: "Grande Poste visit" } }
            ]
          }
        ]
      },
      {
        id: "shopping-alger",
        icon: "🛍️",
        titleKey: "algerShopping",
        title: "Shopping et marchés",
        intro: {
          fr: "Où acheter à Alger.",
          ar: "أين تشتري في الجزائر.",
          en: "Where to buy in Algiers."
        },
        items: [
          {
            title: { fr: "Garden City", ar: "غاردن سيتي", en: "Garden City" },
            icon: "🛍️",
            desc: { fr: "Centre commercial moderne.", ar: "مركز تجاري عصري.", en: "Modern shopping mall." },
            map: "Garden City Alger",
            images: [],
            videos: [
              { type: "youtube", id: "MZl29gPBV6M", title: { fr: "Bienvenue à Garden City", ar: "مرحباً بكم في غاردن سيتي", en: "Welcome to Garden City" } },
              { type: "youtube", id: "CWeCAiqxtL4", title: { fr: "Visite de Garden City", ar: "زيارة غاردن سيتي", en: "Garden City visit" } }
            ]
          },
          {
            title: { fr: "Centre commercial Bab Ezzouar", ar: "مركز باب الزوار", en: "Bab Ezzouar Mall" },
            icon: "🛍️",
            desc: { fr: "Grand centre commercial.", ar: "مركز تجاري كبير.", en: "Large shopping center." },
            map: "Centre commercial Bab Ezzouar",
            images: [],
            videos: []
          }
        ]
      },
      {
        id: "nocturne",
        icon: "🌙",
        titleKey: "algerNocturne",
        title: "Vie nocturne",
        intro: {
          fr: "Sorties du soir.",
          ar: "خرجات المساء.",
          en: "Evening outings."
        },
        items: [
          {
            title: { fr: "Opéra d'Alger", ar: "أوبرا الجزائر", en: "Algiers Opera" },
            icon: "🎭",
            desc: { fr: "Concerts et spectacles.", ar: "حفلات وعروض.", en: "Concerts and shows." },
            map: "Opéra d'Alger",
            images: [
              enc("images (20).jpeg"),
              enc("images (21).jpeg")
            ],
            videos: []
          },
          {
            title: { fr: "Corniche d'Alger", ar: "كورنيش الجزائر", en: "Algiers Corniche" },
            icon: "🌙",
            desc: { fr: "Promenade en bord de mer.", ar: "نزهة على البحر.", en: "Seaside walk." },
            map: "Corniche Alger",
            images: [],
            videos: []
          }
        ]
      }
    ]
  });

  // ============ مفاتيح الترجمة ============
  if (typeof window.LANG_DATA === 'undefined') window.LANG_DATA = {};

  const translations = {
    fr: {
      sectionAlger: "Loisirs à Alger",
      algerIntro: "Découvre les meilleurs endroits pour te détendre.",
      algerPlages: "Plages",
      algerParcs: "Parcs et jardins",
      algerCulture: "Culture et patrimoine",
      algerShopping: "Shopping et marchés",
      algerNocturne: "Vie nocturne"
    },
    ar: {
      sectionAlger: "الترفيه في الجزائر",
      algerIntro: "اكتشف أفضل الأماكن للاسترخاء.",
      algerPlages: "الشواطئ",
      algerParcs: "الحدائق والمنتزهات",
      algerCulture: "الثقافة والتراث",
      algerShopping: "التسوق والأسواق",
      algerNocturne: "الحياة الليلية"
    },
    en: {
      sectionAlger: "Leisure in Algiers",
      algerIntro: "Discover the best places to relax.",
      algerPlages: "Beaches",
      algerParcs: "Parks and gardens",
      algerCulture: "Culture and heritage",
      algerShopping: "Shopping and markets",
      algerNocturne: "Nightlife"
    }
  };

  Object.keys(translations).forEach(lang => {
    if (!window.LANG_DATA[lang]) window.LANG_DATA[lang] = {};
    Object.assign(window.LANG_DATA[lang], translations[lang]);
  });

  console.log('✅ Section alger (Loisirs à Alger) chargée');
})();
