// ============================================
// text-size.js — التحكم في حجم النصوص
// Guide de survie ENSTP
// ============================================
// 3 أحجام: small (14px), normal (16px), large (19px)
// + 2 أحجام إضافية: xlarge (22px), xxlarge (26px)
// ============================================

const TEXT_SIZES = {
  small:  { base: 14, name: { fr: "Petit",   ar: "صغير",   en: "Small"   }, icon: "🅰️-" },
  normal: { base: 16, name: { fr: "Normal",  ar: "عادي",   en: "Normal"  }, icon: "🅰️"  },
  large:  { base: 19, name: { fr: "Grand",   ar: "كبير",   en: "Large"   }, icon: "🅰️+" },
  xlarge: { base: 22, name: { fr: "Très grand", ar: "كبير جداً", en: "X-Large" }, icon: "🅰️++" }
};

// الحجم الافتراضي
const DEFAULT_TEXT_SIZE = 'normal';

// ============================================
// تطبيق حجم النص
// ============================================
function applyTextSize() {
  const size = localStorage.getItem('textSize') || DEFAULT_TEXT_SIZE;
  const config = TEXT_SIZES[size] || TEXT_SIZES.normal;
  
  // طبّق على الجذر
  document.documentElement.style.fontSize = config.base + 'px';
  document.documentElement.setAttribute('data-text-size', size);
  
  // حدّث الزر النشط
  document.querySelectorAll('[data-text-size-btn]').forEach(b => {
    b.classList.toggle('active', b.dataset.textSizeBtn === size);
  });
}

// ============================================
// تعيين حجم النص
// ============================================
function setTextSize(size) {
  if (!TEXT_SIZES[size]) return;
  localStorage.setItem('textSize', size);
  applyTextSize();
  closeTextSizePanel();
}

// ============================================
// زيادة حجم النص
// ============================================
function increaseTextSize() {
  const order = ['small', 'normal', 'large', 'xlarge'];
  const current = localStorage.getItem('textSize') || DEFAULT_TEXT_SIZE;
  const idx = order.indexOf(current);
  if (idx < order.length - 1) {
    setTextSize(order[idx + 1]);
  }
}

// ============================================
// تقليل حجم النص
// ============================================
function decreaseTextSize() {
  const order = ['small', 'normal', 'large', 'xlarge'];
  const current = localStorage.getItem('textSize') || DEFAULT_TEXT_SIZE;
  const idx = order.indexOf(current);
  if (idx > 0) {
    setTextSize(order[idx - 1]);
  }
}

// ============================================
// لوحة حجم النص
// ============================================
function toggleTextSizePanel() {
  const panel = document.getElementById('text-size-panel');
  if (panel) panel.classList.toggle('show');
}

function closeTextSizePanel() {
  const panel = document.getElementById('text-size-panel');
  if (panel) panel.classList.remove('show');
}

// ============================================
// تطبيق فوري قبل التحميل الكامل
// ============================================
(function() {
  const size = localStorage.getItem('textSize') || DEFAULT_TEXT_SIZE;
  const config = TEXT_SIZES[size] || TEXT_SIZES.normal;
  document.documentElement.style.fontSize = config.base + 'px';
})();
