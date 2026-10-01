const CACHE_NAME = 'emniyet-taksi-v3';

// Yollar GÖRELİ (./) olmalı: site /emniyet-taksi-web/ alt klasöründe çalışıyor
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './ikon.png',
  './taksi1.jpg',
  './taksi3.jpg',
  './taksi4.jpg',
  './taksi5.jpg',
  './taksi6.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // Tek bir dosya bulunamasa bile kurulum bozulmasın
      Promise.all(urlsToCache.map(u => cache.add(u).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Önce internet, olmazsa önbellek: site güncellenince müşteri hep yenisini görür
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (url.hostname.endsWith('google.com')) return; // harita iframe'i önbelleğe alınmaz

  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then(m =>
          m || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())
        )
      )
  );
});