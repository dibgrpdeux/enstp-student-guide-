// ============================================
// theme.js — نظام الألوان (النسخة البسيطة)
// ============================================

function applyTheme() {
  const theme = localStorage.getItem('theme') || 'orange';
  const mode = localStorage.getItem('mode') || 'light';
  
  const colors = {
    orange: { acc: "#c2410c", acc2: "#9a3412", soft: "#fde8dc" },
    red: { acc: "#dc2626", acc2: "#991b1b", soft: "#fee2e2" },
    yellow: { acc: "#ca8a04", acc2: "#a16207", soft: "#fef9c3" },
    green: { acc: "#059669", acc2: "#047857", soft: "#d1fae5" },
    teal: { acc: "#0d9488", acc2: "#0f766e", soft: "#ccfbf1" },
    blue: { acc: "#2563eb", acc2: "#1d4ed8", soft: "#dbeafe" },
    purple: { acc: "#7c3aed", acc2: "#6d28d9", soft: "#ede9fe" },
    pink: { acc: "#db2777", acc2: "#be185d", soft: "#fce7f3" },
    gray: { acc: "#475569", acc2: "#334155", soft: "#e2e8f0" }
  };

  const c = colors[theme] || colors.orange;
  document.documentElement.style.setProperty('--acc', c.acc);
  document.documentElement.style.setProperty('--acc2', c.acc2);
  document.documentElement.style.setProperty('--acc-soft', c.soft);
  
  if (mode === 'dark') {
    document.documentElement.setAttribute('data-mode', 'dark');
  } else {
    document.documentElement.removeAttribute('data-mode');
  }
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  applyTheme();
  const panel = document.getElementById('theme-panel');
  if (panel) panel.classList.remove('show');
}

function toggleThemePanel() {
  const panel = document.getElementById('theme-panel');
  if (panel) panel.classList.toggle('show');
}

function closeThemePanel() {
  const panel = document.getElementById('theme-panel');
  if (panel) panel.classList.remove('show');
}

function toggleMode() {
  const current = localStorage.getItem('mode') || 'light';
  localStorage.setItem('mode', current === 'light' ? 'dark' : 'light');
  applyTheme();
}

// تطبيق فوري عند التحميل
applyTheme();
