const CACHE_NAME = 'emniyet-taksi-v2';

// 1. Aşama: Uygulama kurulurken telefona indirilecek sabit dosyalar
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/ikon.png',
  '/taksi1.jpg',
  '/taksi3.jpg',
  '/taksi4.jpg',
  '/taksi5.jpg',
  '/taksi6.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 2. Aşama: Dinamik Önbellekleme (İnternetsiz çalışmayı sağlayan asıl kısım)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Dosya telefonda kayıtlıysa interneti kullanmadan direkt onu aç
        if (response) {
          return response;
        }
        
        // Kayıtlı değilse internetten çek ve bir dahaki sefere internetsiz açmak için telefona kaydet
        return fetch(event.request).then(networkResponse => {
          // FontAwesome (ikonlar) ve Tailwind (renkler/tasarım) gibi dış bağlantıları da çevrimdışı için kaydet
          if (event.request.url.startsWith('http')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          // İnternet yoksa ve dosya bulunamazsa sessizce bekle
          console.log('Çevrimdışı modda kaynak bulunamadı:', event.request.url);
        });
      })
  );
});