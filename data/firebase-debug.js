// ============================================
// firebase-debug.js — أداة تشخيص
// ============================================

// سيعرض الأخطاء على الصفحة
window.addEventListener('error', (event) => {
  console.error('🔴 ERREUR:', event.message);
  showDebugMessage('🔴 ' + event.message, 'error');
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🔴 PROMISE:', event.reason);
  showDebugMessage('🔴 ' + event.reason, 'error');
});

function showDebugMessage(msg, type) {
  let box = document.getElementById('firebase-debug-box');
  if (!box) {
    box = document.createElement('div');
    box.id = 'firebase-debug-box';
    box.style.cssText = `
      position:fixed;bottom:0;left:0;right:0;
      max-height:40vh;overflow-y:auto;
      background:#1d2433;color:#fff;
      padding:12px;font-family:monospace;font-size:.75rem;
      z-index:99999;border-top:3px solid ${type === 'error' ? '#dc2626' : '#f59e0b'};
    `;
    document.body.appendChild(box);
  }
  
  const line = document.createElement('div');
  line.style.cssText = 'padding:4px 0;border-bottom:1px solid rgba(255,255,255,.1);';
  line.textContent = new Date().toLocaleTimeString() + ' — ' + msg;
  box.appendChild(line);
}

// اطبع رسالة بداية
console.log('✅ firebase-debug.js loaded');
showDebugMessage('✅ Debug chargé', 'ok');
