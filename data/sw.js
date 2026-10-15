 // ============================================
// sw.js — Service Worker
// Guide de survie ENSTP
// Version 2.0 — With PWA + Push Notifications
// ============================================

const CACHE_NAME = 'enstp-guide-v3.0.0';
const CACHE_EXTERNAL = 'enstp-external-v3.0.0';
const OFFLINE_URL = './offline.html';

// ============================================
// الملفات المحلية الأساسية
// ============================================
const CORE_ASSETS = [
  './',
  './index.html',
  './guide.html',
  './forum.html',
  './chat.html',
  './feedback.html',
  './login.html',
  './register.html',
  './offline.html',
  './style.css',
  './lang.js',
  './theme.js',
  './text-size.js',
  './search.js',
  './firebase-config.js',
  './auth.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// ============================================
// ملفات data/
// ============================================
const DATA_ASSETS = [
  './data/config.js',
  './data/index.js',
  './data/ecole.js',
  './data/admin.js',
  './data/profs.js',
  './data/forum.js',
  './data/services.js',
  './data/cite.js',
  './data/transport.js',
  './data/metro.js',
  './data/sport.js',
  './data/podcast.js',
  './data/courses.js',
  './data/green.js',
  './data/qr.js',
  './data/about.js',
  './data/shopping.js'
];

// ============================================
// ملفات خارجية (CDN، صور)
// ============================================
const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80'
];

// ============================================
// Install
// ============================================
self.addEventListener('install', (event) => {
  console.log('[SW] Installing v3.0.0...');
  
  event.waitUntil(
    Promise.all([
      // Core assets
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CORE_ASSETS).catch(err => {
          console.log('[SW] Core error:', err);
        });
      }),
      // Data assets
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(DATA_ASSETS).catch(err => {
          console.log('[SW] Data error:', err);
        });
      }),
      // External assets
      caches.open(CACHE_EXTERNAL).then((cache) => {
        return Promise.all(
          EXTERNAL_ASSETS.map(url => 
            cache.add(url).catch(() => console.log('[SW] Skip:', url))
          )
        );
      })
    ]).then(() => self.skipWaiting())
  );
});

// ============================================
// Activate
// ============================================
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== CACHE_EXTERNAL)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ============================================
// Fetch — Cache First + Network fallback
// ============================================
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // تجاهل الطلبات غير GET
  if (request.method !== 'GET') return;
  
  // تجاهل Firebase requests (لا يمكن تخزينها)
  if (request.url.includes('firestore.googleapis.com') ||
      request.url.includes('identitytoolkit.googleapis.com') ||
      request.url.includes('firebaseio.com') ||
      request.url.includes('googleapis.com/v1') ||
      request.url.includes('generativelanguage.googleapis.com')) {
    return;
  }
  
  event.respondWith(
    caches.match(request).then((cached) => {
      // إذا مخزّن، ارجعه فوراً
      if (cached) {
        // حدّث في الخلفية
        fetch(request).then((response) => {
          if (response && response.status === 200) {
            const cacheName = request.url.startsWith(self.location.origin) 
              ? CACHE_NAME 
              : CACHE_EXTERNAL;
            caches.open(cacheName).then((cache) => {
              cache.put(request, response.clone()).catch(() => {});
            });
          }
        }).catch(() => {});
        
        return cached;
      }
      
      // غير مخزّن — اجلبه
      return fetch(request).then((response) => {
        if (!response || response.status !== 200) return response;
        
        const responseClone = response.clone();
        const cacheName = request.url.startsWith(self.location.origin) 
          ? CACHE_NAME 
          : CACHE_EXTERNAL;
        
        caches.open(cacheName).then((cache) => {
          cache.put(request, responseClone).catch(() => {});
        });
        
        return response;
      }).catch(() => {
        // فشل — ارجع offline page
        if (request.destination === 'document') {
          return caches.match(OFFLINE_URL).then(cached => {
            return cached || caches.match('./guide.html');
          });
        }
        
        // صورة — placeholder
        if (request.destination === 'image') {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="#e5e1d8" width="400" height="300"/><text x="200" y="150" text-anchor="middle" fill="#94a3b8" font-family="system-ui" font-size="16">📴 Image hors ligne</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
      });
    })
  );
});

// ============================================
// Push Notifications
// ============================================
self.addEventListener('push', (event) => {
  console.log('[SW] Push received');
  
  let data = {
    title: 'ENSTP Guide',
    body: 'Nouvelle notification',
    icon: './icon-192.png',
    badge: './icon-192.png',
    url: './guide.html'
  };
  
  if (event.data) {
    try {
      data = { ...data, ...event.data.json() };
    } catch(e) {
      data.body = event.data.text();
    }
  }
  
  const options = {
    body: data.body,
    icon: data.icon,
    badge: data.badge,
    vibrate: [200, 100, 200],
    data: { url: data.url },
    actions: [
      { action: 'open', title: '📖 Ouvrir' },
      { action: 'close', title: '❌ Fermer' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// ============================================
// Notification click
// ============================================
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'close') return;
  
  const url = event.notification.data.url || './guide.html';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // إذا كانت النافذة مفتوحة، ركّز عليها
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      // وإلا، افتح نافذة جديدة
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

// ============================================
// Messages من الصفحة
// ============================================
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data === 'CHECK_UPDATE') {
    self.registration.update();
  }
});
