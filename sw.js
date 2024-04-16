var VERSION = 'version_00';
var cacheName = 'pwa';
var GHPATH = '/pwa';
var filesToCache = [
  '${GHPATH}/',
  '${GHPATH}/index.html',
  '${GHPATH}/css/style.css',
  '${GHPATH}/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
