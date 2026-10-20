// ============================================
// data/admin.js — قسم إدارتي (نصوص مباشرة)
// ============================================

window.SECTIONS = window.SECTIONS || [];

// إزالة أي نسخة قديمة لتجنب التكرار
for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'admin') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "admin",
  icon: "🏛️",
  titleKey: "sectionAdmin", // هذه الكلمة فقط تبقى للترجمة في الصفحة الرئيسية
  introKey: "adminIntro",
  type: "items",

  items: [
    // 1. الإدارة العامة
    {
      title: "الإدارة العامة / Direction",
      icon: "🏛️",
      desc: "الإدارة العامة للمدرسة.",
      location: "Département des classes préparatoires — 1er étage",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: ""
    },

    // 2. Meriem Tebani
    {
      title: "مريم تيباني (Meriem Tebani)",
      icon: "📋",
      desc: "رئيسة مصلحة الأقسام التحضيرية (1ACP-2ACP).",
      location: "Département des classes préparatoires — 1er bureau à droite",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "m.tebani@enstp.edu.dz",
      details: "المهام الموجهة للطلبة:\n- ضمان المتابعة الإدارية للطلبة طوال مسارهم في الأقسام التحضيرية.\n- الإعلام والتوجيه بخصوص إجراءات وشكليات التمدرس.\n- تسليم الشهادات والوثائق الإدارية التي تدخل في اختصاص المصلحة.\n- متابعة التسجيلات، النتائج والملفات المدرسية.\n- مرافقة الطلبة في استخدام الأدوات الرقمية الموضوعة تحت تصرفهم (البريد الإلكتروني المؤسسي، Google Classroom).\n- معالجة الطلبات والشكاوى المتعلقة بتمدرسهم.\n- التكفل بكل طلب آخر يتعلق بالتمدرس وتوجيه الطلبة نحو المصالح المختصة حسب احتياجاتهم."
    },

    // 3. Mobarki Ahmed
    {
      title: "أ. مباركي أحمد (Mobarki Ahmed)",
      icon: "🎓",
      desc: "رئيس قسم الأقسام التحضيرية.",
      location: "Département des classes préparatoires — 2ème bureau à droite",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      details: "المهام الموجهة للطلبة:\n- الإشراف العام على سير الدراسة.\n- المصادقة على البرامج والتوقيتات.\n- اتخاذ القرارات المتعلقة بالحالات الأكاديمية الخاصة.\n- توجيه الطلبة نحو المصالح المختصة في حالة وجود مشكلة كبرى."
    },

    // 4. Fedghouch Ferhat
    {
      title: "أ. فدغوش فرحات (Fedghouch Ferhat)",
      icon: "⚖️",
      desc: "مسؤول الدراسات ورئيس مجلس التأديب.",
      location: "Bâtiment administratif",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      details: "المهام الموجهة للطلبة:\n- متابعة المواظبة والانتظام في الدروس والأعمال الموجهة.\n- إدارة الغيابات والمبررات.\n- السهر على احترام النظام الداخلي للمدرسة.\n- معالجة الملفات التأديبية (مجلس التأديب).\n- تقديم المشورة ومرافقة الطلبة الذين يواجهون صعوبات في التكيف."
    }
  ]
});
