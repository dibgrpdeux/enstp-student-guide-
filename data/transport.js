// ============================================
// data/transport.js — قسم النقل (مترجم بالكامل)
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
  
  mapEmbed: "https://www.google.com/maps/d/embed?mid=1F5jfgmT1iBuBm3UY6&ehbc=2E312F",
  mapTitle: { fr: "Carte interactive des transports", ar: "خريطة النقل التفاعلية", en: "Interactive transport map" },

  items: [
    // ========== 1. الحافلات ==========
    {
      title: { fr: "Bus universitaire", ar: "النقل الجامعي", en: "University bus" },
      icon: "🎓",
      desc: { 
        fr: "Bus de l'école desservant les cités universitaires.", 
        ar: "حافلات المدرسة التي تخدم الإقامات الجامعية.", 
        en: "School bus serving university residences." 
      },
      map: "arrêt bus universitaire ENSTP Kouba",
      hours: { fr: "Horaires affichés à l'école", ar: "المواعيد معلنة في المدرسة", en: "Schedules displayed at school" },
      extra: { fr: "🎫 Gratuit pour les étudiants résidents", ar: "🎫 مجاني للطلبة المقيمين", en: "🎫 Free for resident students" }
    },
    {
      title: { fr: "Bus public", ar: "النقل العمومي", en: "Public bus" },
      icon: "🚌",
      desc: { 
        fr: "Lignes vers centre-ville, gare routière et métro.", 
        ar: "خطوط نحو وسط المدينة، المحطة البرية والمترو.", 
        en: "Lines to downtown, bus station and metro." 
      },
      map: "arrêt bus près de ENSTP Kouba",
      hours: { fr: "6h - 21h", ar: "6:00 - 21:00", en: "6am - 9pm" },
      extra: { fr: "🎫 30-50 DA le ticket", ar: "🎫 30-50 دج التذكرة", en: "🎫 30-50 DA per ticket" }
    },
    {
      title: { fr: "Arrêt 1 — CNEP", ar: "الموقف 1 — CNEP", en: "Stop 1 — CNEP" },
      icon: "🚏",
      desc: { 
        fr: "En face CNEP Banque. Distance: 350m (5 min). Destinations: Ben Omar.", 
        ar: "مقابل بنك CNEP. المسافة: 350م (5 دقائق). الوجهات: بن عمر.", 
        en: "Opposite CNEP Bank. Distance: 350m (5 min). Destinations: Ben Omar." 
      },
      map: "CNEP Banque Kouba Alger",
      extra: { fr: "🕐 ~5 min à pied", ar: "🕐 ~5 دقائق مشي", en: "🕐 ~5 min walk" }
    },
    {
      title: { fr: "Arrêt 2 — Gare routière", ar: "الموقف 2 — المحطة البرية", en: "Stop 2 — Bus station" },
      icon: "🚏",
      desc: { 
        fr: "Gare routière de Kouba. Distance: 500m (7 min). Destinations: plusieurs.", 
        ar: "المحطة البرية القبة. المسافة: 500م (7 دقائق). الوجهات: متعددة.", 
        en: "Kouba bus station. Distance: 500m (7 min). Destinations: multiple." 
      },
      map: "Gare routière Kouba Alger",
      extra: { fr: "🕐 ~7 min à pied", ar: "🕐 ~7 دقائق مشي", en: "🕐 ~7 min walk" }
    },

    // ========== 2. التكاسي والتطبيقات ==========
    {
      title: { fr: "Taxis collectifs", ar: "سيارات أجرة جماعية", en: "Shared taxis" },
      icon: "🚕",
      desc: { 
        fr: "Taxis partagés vers le centre. Tarif fixe par place.", 
        ar: "تكاسي مشتركة نحو المركز. سعر ثابت للمقعد.", 
        en: "Shared taxis to the center. Fixed price per seat." 
      },
      map: "Ben Omar Kouba Alger"
    },
    {
      title: { fr: "Yassir", ar: "ياسر", en: "Yassir" },
      icon: "🟠",
      desc: { 
        fr: "Le leader en Algérie. Prix fixé à l'avance.", 
        ar: "الرائد في الجزائر. سعر ثابت مسبقاً.", 
        en: "The leader in Algeria. Fixed upfront price." 
      },
      link: "https://play.google.com/store/apps/details?id=com.yassir.mobapp",
      extra: { fr: "⭐ 4.5/5", ar: "⭐ 4.5/5", en: "⭐ 4.5/5" }
    },
    {
      title: { fr: "Heetch", ar: "هيتش", en: "Heetch" },
      icon: "🔵",
      desc: { 
        fr: "Prix abordables et offre simple.", 
        ar: "أسعار معقولة وعرض بسيط.", 
        en: "Affordable prices and simple offer." 
      },
      link: "https://play.google.com/store/apps/details?id=com.heetch",
      extra: { fr: "⭐ 4.4/5", ar: "⭐ 4.4/5", en: "⭐ 4.4/5" }
    },
    {
      title: { fr: "inDrive", ar: "إن درايف", en: "inDrive" },
      icon: "🟢",
      desc: { 
        fr: "Proposez votre prix ! Le chauffeur peut négocier.", 
        ar: "اقترح سعرك! السائق يمكنه التفاوض.", 
        en: "Propose your price! Driver can negotiate." 
      },
      link: "https://play.google.com/store/apps/details?id=sinet.startup.inDriver",
      extra: { fr: "⭐ 4.6/5", ar: "⭐ 4.6/5", en: "⭐ 4.6/5" }
    },

    // ========== 3. المترو والترامواي ==========
    {
      title: { fr: "Métro & Tramway", ar: "المترو والترامواي", en: "Metro & Tramway" },
      icon: "🚇",
      desc: { 
        fr: "Comment se rendre au métro depuis l'école + tarifs.", 
        ar: "كيفية الوصول إلى المترو من المدرسة + التسعيرة.", 
        en: "How to get to metro from school + fares." 
      },
      map: "Métro Haï El Badr Alger"
    },
    {
      title: { fr: "Carte SITRAM (gratuite)", ar: "بطاقة سيترام (مجانية)", en: "SITRAM card (free)" },
      icon: "💳",
      desc: { 
        fr: "Carte de transport gratuite pour les étudiants.", 
        ar: "بطاقة نقل مجانية للطلبة.", 
        en: "Free transport card for students." 
      },
      extra: { fr: "🎓 GRATUITE pour les étudiants", ar: "🎓 مجانية للطلبة", en: "🎓 FREE for students" }
    },

    // ========== 4. eTWASSEL ==========
    {
      title: { fr: "Offre eTWASSEL", ar: "عرض eTWASSEL", en: "eTWASSEL Offer" },
      icon: "🎫",
      desc: { 
        fr: "Application pour voyager gratuitement en métro et tramway.", 
        ar: "تطبيق للسفر مجاناً بالمترو والترامواي.", 
        en: "App to travel for free on metro and tramway." 
      },
      extra: { fr: "💡 Inscription au début de l'année", ar: "💡 التسجيل في بداية السنة", en: "💡 Registration at start of year" }
    },

    // ========== 5. المطار والقطار ==========
    {
      title: { fr: "Aéroport Houari Boumediene", ar: "مطار هواري بومدين", en: "Houari Boumediene Airport" },
      icon: "✈️",
      desc: { 
        fr: "Prendre un taxi vers Caroubier puis bus direct, ou taxi direct (~40 min).", 
        ar: "خذ سيارة أجرة إلى القروبي ثم حافلة مباشرة، أو سيارة أجرة مباشرة (~40 دقيقة).", 
        en: "Take taxi to Caroubier then direct bus, or direct taxi (~40 min)." 
      },
      map: "Aéroport Houari Boumediene Alger",
      extra: { fr: "💡 Prévoir 2h d'avance", ar: "💡 توقع ساعتين مسبقاً", en: "💡 Arrive 2h early" }
    }
  ]
});
