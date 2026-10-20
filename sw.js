// ============================================
// sw.js — Service Worker
// Guide de survie ENSTP
// Version 3.0.0
// ============================================

const CACHE_VERSION = '3.0.0';
const CACHE_NAME = `enstp-guide-v${CACHE_VERSION}`;
const CACHE_EXTERNAL = `enstp-external-v${CACHE_VERSION}`;
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
  './ai-search.js',
  './firebase-config.js',
  './auth.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// ============================================
// ملفات data/ (بدون green.js)
// ============================================
const DATA_ASSETS = [
  './data/config.js',
  './data/index.js',
  './data/ecole.js',
  './data/admin.js',
  './data/profs.js',
  './data/profs.json',
  './data/forum.js',
  './data/services.js',
  './data/cite.js',
  './data/transport.js',
  './data/sport.js',
  './data/courses.js',
  './data/qr.js',
  './data/about.js',
  './data/shopping.js',
  './data/alger.js'
  './data/campus-map.html' // <--- أضف هذا السطر هنا

];

// ============================================
// ملفات خارجية (CDN + Firebase)
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
  console.log('[SW] Installing ' + CACHE_VERSION + '...');

  event.waitUntil(
    Promise.all([
      // Core
      caches.open(CACHE_NAME).then((cache) =>
        cache.addAll(CORE_ASSETS).catch((err) => {
          console.warn('[SW] Core asset failed:', err);
        })
      ),
      // Data
      caches.open(CACHE_NAME).then((cache) =>
        cache.addAll(DATA_ASSETS).catch((err) => {
          console.warn('[SW] Data asset failed:', err);
        })
      ),
      // External (لا تفشل install إذا فشل أحدها)
      caches.open(CACHE_EXTERNAL).then((cache) =>
        Promise.all(
          EXTERNAL_ASSETS.map((url) =>
            cache.add(url).catch(() => console.log('[SW] Skip external:', url))
          )
        )
      )
    ]).then(() => self.skipWaiting())
  );
});

// ============================================
// Activate — حذف الكاش القديم
// ============================================
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating ' + CACHE_VERSION + '...');

  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME && key !== CACHE_EXTERNAL)
            .map((key) => {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            })
        )
      )
      .then(() => self.clients.claim())
  );
});

// ============================================
// Fetch — Cache First + Background Update
// ============================================
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // تجاهل الطلبات غير GET
  if (request.method !== 'GET') return;

  // تجاهل Firebase و Gemini و API
  if (
    request.url.includes('firestore.googleapis.com') ||
    request.url.includes('identitytoolkit.googleapis.com') ||
    request.url.includes('firebaseio.com') ||
    request.url.includes('generativelanguage.googleapis.com') ||
    request.url.includes('/api/')
  ) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      // 1) إذا موجود في الكاش → رجّعه فوراً + حدّث في الخلفية
      if (cached) {
        fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              const cacheName = request.url.startsWith(self.location.origin)
                ? CACHE_NAME
                : CACHE_EXTERNAL;
              caches.open(cacheName).then((cache) => {
                cache.put(request, response.clone()).catch(() => {});
              });
            }
          })
          .catch(() => {});
        return cached;
      }

      // 2) غير موجود → اجلبه من الشبكة وخزّنه
      return fetch(request)
        .then((response) => {
          if (!response || response.status !== 200) return response;

          const responseClone = response.clone();
          const cacheName = request.url.startsWith(self.location.origin)
            ? CACHE_NAME
            : CACHE_EXTERNAL;

          caches.open(cacheName).then((cache) => {
            cache.put(request, responseClone).catch(() => {});
          });

          return response;
        })
        .catch(() => {
          // 3) فشل الشبكة → بدائل
          if (request.destination === 'document') {
            return caches
              .match(OFFLINE_URL)
              .then((offline) => offline || caches.match('./guide.html'));
          }

          if (request.destination === 'image') {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">' +
                '<rect fill="#e5e1d8" width="400" height="300"/>' +
                '<text x="200" y="150" text-anchor="middle" fill="#94a3b8" ' +
                'font-family="system-ui" font-size="16">📴 Image hors ligne</text>' +
              '</svg>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          }

          return new Response('', { status: 408 });
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
    } catch (e) {
      data.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      vibrate: [200, 100, 200],
      data: { url: data.url },
      actions: [
        { action: 'open', title: '📖 Ouvrir' },
        { action: 'close', title: '❌ Fermer' }
      ]
    })
  );
});

// ============================================
// Notification Click
// ============================================
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'close') return;

  const url = event.notification.data.url || './guide.html';

  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (
            client.url.includes(self.location.origin) &&
            'focus' in client
          ) {
            return client.focus();
          }
        }
        if (clients.openWindow) return clients.openWindow(url);
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
