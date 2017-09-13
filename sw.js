var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
'inline.6495e5c9de9b1d42d2d2.bundle.js',
'main.860a5b1f88209692f06f.bundle.js',
'polyfills.550cf10c9aa54b8194c7.bundle.js',
'styles.d41d8cd98f00b204e980.bundle.css',
'vendor.0d664cdd95bd8157c0a6.bundle.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
