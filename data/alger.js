/* ============================================
   data/alger.js — Loisirs à Alger
   قسم الترفيه في الجزائر العاصمة
   ============================================ */

(function() {
  if (typeof window.SECTIONS === 'undefined') {
    console.warn('⚠️ SECTIONS غير معرّف بعد، سيتم إنشاء قسم alger لاحقًا');
    window.SECTIONS = window.SECTIONS || [];
  }

  // احذف أي قسم قديم بنفس الـ id
  for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
    if (window.SECTIONS[i].id === 'alger') window.SECTIONS.splice(i, 1);
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
          fr: "Les meilleures plages d'Alger pour se détendre et profiter du soleil.",
          ar: "أجمل شواطئ الجزائر العاصمة للاسترخاء والاستمتاع بالشمس.",
          en: "The best beaches in Algiers to relax and enjoy the sun."
        },
        items: [
          { title: { fr: "Sidi Fredj", ar: "سيدي فرج", en: "Sidi Fredj" }, icon: "🏖️", desc: { fr: "Plage familiale avec animations et restaurants.", ar: "شاطئ عائلي مع أنشطة ومطاعم.", en: "Family beach with activities and restaurants." }, map: "Sidi Fredj Alger" },
          { title: { fr: "Zeralda", ar: "زرالدة", en: "Zeralda" }, icon: "🏖️", desc: { fr: "Sable fin et ambiance calme, idéale pour se ressourcer.", ar: "رمل ناعم وجو هادئ، مثالي للاسترخاء.", en: "Fine sand and calm vibes, ideal to recharge." }, map: "Zeralda Alger" },
          { title: { fr: "Bordj El Kiffan", ar: "برج الكيفان", en: "Bordj El Kiffan" }, icon: "🏖️", desc: { fr: "Plage urbaine accessible en transport en commun.", ar: "شاطئ حضري يمكن الوصول إليه بالنقل العمومي.", en: "Urban beach accessible by public transport." }, map: "Bordj El Kiffan plage" },
          { title: { fr: "Les Dunes (Moretti)", ar: "الكثبان (موريتي)", en: "Les Dunes (Moretti)" }, icon: "🏖️", desc: { fr: "Espaces verts + mer, parfait pour un pique-nique.", ar: "مساحات خضراء + البحر، مثالي للنزهة.", en: "Green spaces + sea, perfect for a picnic." }, map: "Les Dunes Moretti Alger" }
        ]
      },
      {
        id: "parcs",
        icon: "🌳",
        titleKey: "algerParcs",
        title: "Parcs et jardins",
        intro: {
          fr: "Les poumons verts d'Alger pour étudier, courir ou se promener.",
          ar: "الرئات الخضراء للجزائر للدراسة أو الجري أو التنزه.",
          en: "Algiers' green lungs to study, run or walk."
        },
        items: [
          { title: { fr: "Jardin d'Essai du Hamma", ar: "حديقة التجارب بالحامة", en: "Jardin d'Essai du Hamma" }, icon: "🌳", desc: { fr: "Le poumon vert d'Alger, idéal pour réviser au calme.", ar: "رئة الجزائر الخضراء، مثالي للمراجعة بهدوء.", en: "Algiers' green lung, ideal for quiet study." }, map: "Jardin d'Essai El Hamma Alger" },
          { title: { fr: "Parc de Ben Aknoun", ar: "حديقة بن عكنون", en: "Ben Aknoun Park" }, icon: "🌳", desc: { fr: "Zoo et promenades, parfait pour se détendre.", ar: "حديقة حيوانات ومسارات، مثالي للاسترخاء.", en: "Zoo and walks, perfect to relax." }, map: "Parc Ben Aknoun Alger" },
          { title: { fr: "Bois des Arcades (Hydra)", ar: "غابة الأركاد (حيدرة)", en: "Bois des Arcades (Hydra)" }, icon: "🌳", desc: { fr: "Idéal pour courir et faire du sport.", ar: "مثالي للجري وممارسة الرياضة.", en: "Ideal for running and sports." }, map: "Bois des Arcades Hydra Alger" }
        ]
      },
      {
        id: "culture",
        icon: "🏛️",
        titleKey: "algerCulture",
        title: "Culture et patrimoine",
        intro: {
          fr: "Découvre l'histoire et la culture de la capitale.",
          ar: "اكتشف تاريخ وثقافة العاصمة.",
          en: "Discover the history and culture of the capital."
        },
        items: [
          { title: { fr: "La Casbah d'Alger", ar: "قصبة الجزائر", en: "The Casbah of Algiers" }, icon: "🏛️", desc: { fr: "Patrimoine mondial UNESCO, ruelles historiques.", ar: "تراث عالمي لليونسكو، أزقة تاريخية.", en: "UNESCO World Heritage, historic alleys." }, map: "Casbah Alger" },
          { title: { fr: "Musée du Bardo", ar: "متحف الباردو", en: "Bardo Museum" }, icon: "🏛️", desc: { fr: "Art et histoire dans un cadre magnifique.", ar: "فن وتاريخ في إطار رائع.", en: "Art and history in a beautiful setting." }, map: "Musée du Bardo Alger" },
          { title: { fr: "Musée des Beaux-Arts", ar: "متحف الفنون الجميلة", en: "Museum of Fine Arts" }, icon: "🏛️", desc: { fr: "Collections d'art algérien et international.", ar: "مجموعات فنية جزائرية وعالمية.", en: "Algerian and international art collections." }, map: "Musée des Beaux-Arts Alger" },
          { title: { fr: "Basilique Notre-Dame d'Afrique", ar: "كنيسة سيدة إفريقيا", en: "Notre-Dame d'Afrique Basilica" }, icon: "⛪", desc: { fr: "Vue panoramique sur la baie d'Alger.", ar: "إطلالة بانورامية على خليج الجزائر.", en: "Panoramic view over the Bay of Algiers." }, map: "Notre-Dame d'Afrique Alger" }
        ]
      },
      {
        id: "cafes",
        icon: "☕",
        titleKey: "algerCafes",
        title: "Cafés et sorties",
        intro: {
          fr: "Les meilleurs endroits pour se retrouver entre amis.",
          ar: "أفضل الأماكن للالتقاء مع الأصدقاء.",
          en: "The best places to meet up with friends."
        },
        items: [
          { title: { fr: "Sidi Yahia & Hydra", ar: "سيدي يحيى وحيدرة", en: "Sidi Yahia & Hydra" }, icon: "☕", desc: { fr: "Cafés modernes et ambiance étudiante.", ar: "مقاهي عصرية وجو طلابي.", en: "Modern cafés and student vibes." }, map: "Sidi Yahia Hydra Alger" },
          { title: { fr: "Rue Didouche Mourad", ar: "شارع ديدوش مراد", en: "Didouche Mourad Street" }, icon: "☕", desc: { fr: "Le cœur d'Alger, cafés et boutiques.", ar: "قلب الجزائر، مقاهي ومتاجر.", en: "The heart of Algiers, cafés and shops." }, map: "Rue Didouche Mourad Alger" },
          { title: { fr: "El Biar", ar: "الأبيار", en: "El Biar" }, icon: "☕", desc: { fr: "Salons de thé et restaurants chics.", ar: "صالونات شاي ومطاعم راقية.", en: "Tea rooms and upscale restaurants." }, map: "El Biar Alger" }
        ]
      },
      {
        id: "shopping-alger",
        icon: "🛍️",
        titleKey: "algerShopping",
        title: "Shopping et marchés",
        intro: {
          fr: "Où acheter ce dont tu as besoin à Alger.",
          ar: "أين تشتري ما تحتاجه في الجزائر.",
          en: "Where to buy what you need in Algiers."
        },
        items: [
          { title: { fr: "Bab El Oued", ar: "باب الوادي", en: "Bab El Oued" }, icon: "🛍️", desc: { fr: "Marché populaire, prix abordables.", ar: "سوق شعبي، أسعار في المتناول.", en: "Popular market, affordable prices." }, map: "Bab El Oued Alger" },
          { title: { fr: "Centre commercial Bab Ezzouar", ar: "مركز باب الزوار التجاري", en: "Bab Ezzouar Mall" }, icon: "🛍️", desc: { fr: "Grand centre commercial moderne.", ar: "مركز تجاري كبير وعصري.", en: "Large modern shopping center." }, map: "Centre commercial Bab Ezzouar" },
          { title: { fr: "Marché de la Casbah", ar: "سوق القصبة", en: "Casbah Market" }, icon: "🛍️", desc: { fr: "Artisanat et produits traditionnels.", ar: "صناعات تقليدية ومنتجات محلية.", en: "Crafts and traditional products." }, map: "Marché Casbah Alger" }
        ]
      },
      {
        id: "sport-alger",
        icon: "⚽",
        titleKey: "algerSport",
        title: "Sport et activités",
        intro: {
          fr: "Bouge et fais du sport à Alger.",
          ar: "تحرك ومارس الرياضة في الجزائر.",
          en: "Move and play sports in Algiers."
        },
        items: [
          { title: { fr: "Stade 5 Juillet", ar: "ملعب 5 جويلية", en: "July 5 Stadium" }, icon: "⚽", desc: { fr: "Matchs et grands événements sportifs.", ar: "مباريات وأحداث رياضية كبرى.", en: "Matches and major sports events." }, map: "Stade 5 Juillet Alger" },
          { title: { fr: "Salle Harcha Hassen", ar: "قاعة حرشة حسان", en: "Harcha Hassen Hall" }, icon: "🏀", desc: { fr: "Basket, handball et spectacles.", ar: "كرة سلة، كرة يد وعروض.", en: "Basketball, handball and shows." }, map: "Salle Harcha Hassen Alger" },
          { title: { fr: "Sports nautiques à Sidi Fredj", ar: "رياضات مائية في سيدي فرج", en: "Water sports at Sidi Fredj" }, icon: "🏄", desc: { fr: "Plongée, jet-ski et plus.", ar: "غوص، جيت سكي والمزيد.", en: "Diving, jet-ski and more." }, map: "Sidi Fredj sports nautiques" }
        ]
      },
      {
        id: "nocturne",
        icon: "🌙",
        titleKey: "algerNocturne",
        title: "Vie nocturne",
        intro: {
          fr: "Sorties du soir et ambiance nocturne.",
          ar: "خرجات المساء وجو الليل.",
          en: "Evening outings and night vibes."
        },
        items: [
          { title: { fr: "Corniche d'Alger", ar: "كورنيش الجزائر", en: "Algiers Corniche" }, icon: "🌙", desc: { fr: "Promenade en bord de mer, magnifique la nuit.", ar: "نزهة على البحر، رائعة ليلاً.", en: "Seaside walk, beautiful at night." }, map: "Corniche Alger" },
          { title: { fr: "Restaurants à Zeralda", ar: "مطاعم زرالدة", en: "Zeralda Restaurants" }, icon: "🍽️", desc: { fr: "Poisson frais et ambiance familiale.", ar: "سمك طازج وجو عائلي.", en: "Fresh fish and family atmosphere." }, map: "Restaurants Zeralda Alger" },
          { title: { fr: "Opéra d'Alger", ar: "أوبرا الجزائر", en: "Algiers Opera" }, icon: "🎭", desc: { fr: "Concerts et spectacles culturels.", ar: "حفلات وعروض ثقافية.", en: "Concerts and cultural shows." }, map: "Opéra d'Alger" }
        ]
      }
    ]
  });

  // ============ مفاتيح الترجمة ============
  if (typeof window.LANG_DATA === 'undefined') window.LANG_DATA = {};
  
  const translations = {
    fr: {
      sectionAlger: "Loisirs à Alger",
      algerIntro: "Découvre les meilleurs endroits pour te détendre, sortir et profiter de la capitale.",
      algerPlages: "Plages",
      algerParcs: "Parcs et jardins",
      algerCulture: "Culture et patrimoine",
      algerCafes: "Cafés et sorties",
      algerShopping: "Shopping et marchés",
      algerSport: "Sport et activités",
      algerNocturne: "Vie nocturne"
    },
    ar: {
      sectionAlger: "الترفيه في الجزائر",
      algerIntro: "اكتشف أفضل الأماكن للاسترخاء والخروج والاستمتاع بالعاصمة.",
      algerPlages: "الشواطئ",
      algerParcs: "الحدائق والمنتزهات",
      algerCulture: "الثقافة والتراث",
      algerCafes: "المقاهي والخرجات",
      algerShopping: "التسوق والأسواق",
      algerSport: "الرياضة والأنشطة",
      algerNocturne: "الحياة الليلية"
    },
    en: {
      sectionAlger: "Leisure in Algiers",
      algerIntro: "Discover the best places to relax, go out and enjoy the capital.",
      algerPlages: "Beaches",
      algerParcs: "Parks and gardens",
      algerCulture: "Culture and heritage",
      algerCafes: "Cafés and outings",
      algerShopping: "Shopping and markets",
      algerSport: "Sports and activities",
      algerNocturne: "Nightlife"
    }
  };

  Object.keys(translations).forEach(lang => {
    if (!window.LANG_DATA[lang]) window.LANG_DATA[lang] = {};
    Object.assign(window.LANG_DATA[lang], translations[lang]);
  });

  console.log('✅ Section alger (Loisirs à Alger) chargée');
})();
