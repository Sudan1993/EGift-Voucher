var cacheName = 'CacheName';
var filesToCache = [
  '/',
  '/index.html',
  '/lib/ionic/css/ionic.css',
  '/lib/ion-md-input/css/ion-md-input.min.css',
  '/lib/ionic-material/dist/ionic.material.min.css',
  '/lib/ion-md-input/js/ion-md-input.min.js',
  '/lib/ionic-material/dist/ionic.material.min.js',
  '/lib/ionic/js/ionic.bundle.js',
  '/css/style.css',
  '/img/login_logo.png',
  '/img/login_background.jpg',
  '/img/anniv1.jpg',
  '/img/anniv2.jpg',
  '/img/anniv3.jpg',
  '/img/anniv4.jpg',
  '/img/tq.jpg',
  '/img/tq2.jpg',
  '/img/tq4.jpg',
  '/img/ty.jpg',
  '/templates/login.html',
  '/templates/activity.html',
  '/templates/friends.html',
  '/templates/gallery.html',
  '/templates/menu.html',
  '/templates/profile.html',
  '/js/app.js',
  '/js/controllers.js',
  '/js/GlobalService.js',
  '/manifest.json',
  'http://localhost:3000/invokeCards',
  'http://localhost:3000/invokeAnniversary',
  'http://localhost:3000/login?username=sudar&password=sudar'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});



self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
