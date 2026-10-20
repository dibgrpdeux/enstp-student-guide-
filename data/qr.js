// ============================================
// data/qr.js — قسم رموز QR (محدث)
// ============================================

window.SECTIONS = window.SECTIONS || [];

for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'qr') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "qr",
  icon: "📱",
  titleKey: "sectionQR",
  introKey: "qrIntro",
  type: "qr",
  autoGenerate: true
});

// إضافة الترجمات إذا لم تكن موجودة
window.LANG_DATA = window.LANG_DATA || {};
if (!window.LANG_DATA.fr) window.LANG_DATA.fr = {};
if (!window.LANG_DATA.ar) window.LANG_DATA.ar = {};
if (!window.LANG_DATA.en) window.LANG_DATA.en = {};

window.LANG_DATA.fr.qrDownload = "📥 Télécharger";
window.LANG_DATA.fr.qrOpen = "🔗 Ouvrir le lien";
window.LANG_DATA.ar.qrDownload = "📥 تحميل الرمز";
window.LANG_DATA.ar.qrOpen = "🔗 فتح الرابط";
window.LANG_DATA.en.qrDownload = "📥 Download";
window.LANG_DATA.en.qrOpen = "🔗 Open link";
