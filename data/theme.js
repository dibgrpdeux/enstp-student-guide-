// ============================================
// theme.js — نظام الألوان والوضع الليلي
// Guide de survie ENSTP
// 9 ألوان + وضع ليلي + حفظ تلقائي
// ============================================

const THEMES = {
  orange: {
    name: { fr: "Orange ENSTP", ar: "برتقالي ENSTP", en: "ENSTP Orange" },
    light: { acc: "#c2410c", acc2: "#9a3412", accSoft: "#fde8dc" },
    dark:  { acc: "#fb923c", acc2: "#ea580c", accSoft: "#3a2a20" }
  },
  red: {
    name: { fr: "Rouge", ar: "أحمر", en: "Red" },
    light: { acc: "#dc2626", acc2: "#991b1b", accSoft: "#fee2e2" },
    dark:  { acc: "#f87171", acc2: "#dc2626", accSoft: "#3b1d1d" }
  },
  yellow: {
    name: { fr: "Jaune", ar: "أصفر", en: "Yellow" },
    light: { acc: "#ca8a04", acc2: "#a16207", accSoft: "#fef9c3" },
    dark:  { acc: "#facc15", acc2: "#eab308", accSoft: "#3a3520" }
  },
  green: {
    name: { fr: "Vert", ar: "أخضر", en: "Green" },
    light: { acc: "#059669", acc2: "#047857", accSoft: "#d1fae5" },
    dark:  { acc: "#34d399", acc2: "#10b981", accSoft: "#1a3a2e" }
  },
  teal: {
    name: { fr: "Turquoise", ar: "تركواز", en: "Teal" },
    light: { acc: "#0d9488", acc2: "#0f766e", accSoft: "#ccfbf1" },
    dark:  { acc: "#2dd4bf", acc2: "#14b8a6", accSoft: "#1a3a37" }
  },
  blue: {
    name: { fr: "Bleu", ar: "أزرق", en: "Blue" },
    light: { acc: "#2563eb", acc2: "#1d4ed8", accSoft: "#dbeafe" },
    dark:  { acc: "#60a5fa", acc2: "#3b82f6", accSoft: "#1e2a45" }
  },
  purple: {
    name: { fr: "Violet", ar: "بنفسجي", en: "Purple" },
    light: { acc: "#7c3aed", acc2: "#6d28d9", accSoft: "#ede9fe" },
    dark:  { acc: "#a78bfa", acc2: "#8b5cf6", accSoft: "#2e2345" }
  },
  pink: {
    name: { fr: "Rose", ar: "وردي", en: "Pink" },
    light: { acc: "#db2777", acc2: "#be185d", accSoft: "#fce7f3" },
    dark:  { acc: "#f472b6", acc2: "#ec4899", accSoft: "#3a1d2e" }
  },
  gray: {
    name: { fr: "Gris", ar: "رمادي", en: "Gray" },
    light: { acc: "#475569", acc2: "#334155", accSoft: "#e2e8f0" },
    dark:  { acc: "#94a3b8", acc2: "#64748b", accSoft: "#2d3342" }
  }
};

// ============================================
// تطبيق الثيم
// ============================================
function applyTheme() {
  const theme = localStorage.getItem('theme') || 'orange';
  const mode = localStorage.getItem('mode') || 'auto';
  const t = THEMES[theme] || THEMES.orange;

  let actualMode = mode;
  if (mode === 'auto') {
    actualMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  document.documentElement.setAttribute('data-mode', actualMode);
  document.documentElement.setAttribute('data-theme', theme);

  const colors = actualMode === 'dark' ? t.dark : t.light;
  document.documentElement.style.setProperty('--acc', colors.acc);
  document.documentElement.style.setProperty('--acc2', colors.acc2);
  document.documentElement.style.setProperty('--acc-soft', colors.accSoft);

  document.querySelectorAll('[data-theme-btn]').forEach(b => {
    b.classList.toggle('active', b.dataset.themeBtn === theme);
  });

  const modeIcon = actualMode === 'dark' ? '☀️' : '🌙';
  document.querySelectorAll('[data-mode-toggle]').forEach(b => {
    b.textContent = modeIcon;
  });

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', colors.acc);
}

// ============================================
// تبديل الوضع
// ============================================
function toggleMode() {
  const current = localStorage.getItem('mode') || 'auto';
  let next;
  if (current === 'auto') next = 'dark';
  else if (current === 'dark') next = 'light';
  else next = 'auto';
  localStorage.setItem('mode', next);
  applyTheme();
}

// ============================================
// تعيين اللون
// ============================================
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  applyTheme();
  closeThemePanel();
}

// ============================================
// لوحة الألوان
// ============================================
function toggleThemePanel() {
  const panel = document.getElementById('theme-panel');
  if (panel) panel.classList.toggle('show');
}

function closeThemePanel() {
  const panel = document.getElementById('theme-panel');
  if (panel) panel.classList.remove('show');
}

// ============================================
// راقب تغيير تفضيلات النظام
// ============================================
if (window.matchMedia) {
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if ((localStorage.getItem('mode') || 'auto') === 'auto') {
        applyTheme();
      }
    });
  } catch(e) {}
}

// ============================================
// تطبيق فوري قبل التحميل
// ============================================
(function() {
  const theme = localStorage.getItem('theme') || 'orange';
  const mode = localStorage.getItem('mode') || 'auto';
  const t = THEMES[theme] || THEMES.orange;
  let actualMode = mode;
  if (mode === 'auto') {
    actualMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  const colors = actualMode === 'dark' ? t.dark : t.light;
  document.documentElement.style.setProperty('--acc', colors.acc);
  document.documentElement.style.setProperty('--acc2', colors.acc2);
  document.documentElement.style.setProperty('--acc-soft', colors.accSoft);
  document.documentElement.setAttribute('data-mode', actualMode);
  document.documentElement.setAttribute('data-theme', theme);
})();
