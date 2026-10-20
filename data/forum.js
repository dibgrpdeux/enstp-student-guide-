// ============================================
// data/forum.js — قسم ملتقى الطلبة
// ============================================

window.SECTIONS = window.SECTIONS || [];

for (let i = window.SECTIONS.length - 1; i >= 0; i--) {
  if (window.SECTIONS[i].id === 'forum') window.SECTIONS.splice(i, 1);
}

window.SECTIONS.push({
  id: "forum",
  icon: "🎓",
  titleKey: "sectionForum",
  introKey: "forumIntro",
  type: "custom",
  render: function() { return renderForumSection(); }
});

function renderForumSection() {
  const lang = (typeof window.getCurrentLang === 'function')
    ? window.getCurrentLang()
    : (localStorage.getItem('lang') || 'fr');
  const t = (key) => (window.LANG_DATA && window.LANG_DATA[lang] && window.LANG_DATA[lang][key]) || key;

  let currentUser = null;
  try {
    if (typeof auth !== 'undefined' && auth && auth.currentUser) currentUser = auth.currentUser;
  } catch (e) {}

  let html = '';
  html += '<button class="back" onclick="renderHome()">' + t('back') + '</button>';
  html += '<h2>🎓 ' + t('sectionForum') + '</h2>';
  html += '<p style="color:var(--mut);margin-bottom:20px">' + t('forumIntro') + '</p>';

  html += '<div class="card-3d" style="padding:24px;text-align:center;background:linear-gradient(135deg,var(--acc-soft),var(--card));border:2px solid var(--acc)">';
  html += '<div style="font-size:4rem;margin-bottom:16px">🎓</div>';
  html += '<h3 style="color:var(--acc);margin:0 0 12px;font-size:1.4rem">' + t('sectionForum') + '</h3>';
  html += '<p style="color:var(--ink);line-height:1.7;margin-bottom:20px;font-size:.95rem">' + t('forumDesc') + '</p>';

  html += '<div style="text-align:left;margin:20px 0;padding:16px;background:#fff;border-radius:12px">';
  html += '<p style="margin:0 0 8px;font-weight:700;color:var(--acc)">✨ ' + t('forumFeatures') + '</p>';
  html += '<ul style="margin:0;padding-' + (lang === 'ar' ? 'right' : 'left') + ':20px;color:var(--mut);font-size:.9rem;line-height:1.8">';
  html += '<li>' + t('forumFeature1') + '</li>';
  html += '<li>' + t('forumFeature2') + '</li>';
  html += '<li>' + t('forumFeature3') + '</li>';
  html += '</ul></div>';

  html += '<div style="display:flex;flex-direction:column;gap:12px;margin-top:20px">';

  if (currentUser) {
    html += '<button onclick="window.location.href=\'forum.html\'" style="padding:16px;background:linear-gradient(135deg,var(--acc),var(--acc2));color:#fff;border:0;border-radius:14px;font-size:1.1rem;font-weight:800;cursor:pointer;font-family:inherit;box-shadow:0 8px 20px rgba(194,65,12,.4)">';
    html += '💬 ' + t('forumEnter') + ' — ' + (currentUser.displayName || currentUser.email);
    html += '</button>';
  } else {
    html += '<button onclick="window.location.href=\'register.html\'" style="padding:16px;background:linear-gradient(135deg,var(--acc),var(--acc2));color:#fff;border:0;border-radius:14px;font-size:1.1rem;font-weight:800;cursor:pointer;font-family:inherit;box-shadow:0 8px 20px rgba(194,65,12,.4)">📝 ' + t('forumRegister') + '</button>';
    html += '<button onclick="window.location.href=\'login.html\'" style="padding:16px;background:var(--card);color:var(--acc);border:2px solid var(--acc);border-radius:14px;font-size:1.05rem;font-weight:700;cursor:pointer;font-family:inherit">🔐 ' + t('forumLogin') + '</button>';
  }

  html += '</div>';
  html += '<div style="margin-top:24px;padding:14px;background:var(--acc-soft);border-radius:12px;border-' + (lang === 'ar' ? 'right' : 'left') + ':4px solid var(--acc)">';
  html += '<p style="margin:0;font-size:.85rem;color:var(--ink);line-height:1.6"><b>⚠️ ' + t('forumNote') + ':</b> ' + t('forumNoteText') + '</p>';
  html += '</div></div>';

  return html;
}

if (typeof window !== 'undefined') {
  window.renderForumSection = renderForumSection;
}
