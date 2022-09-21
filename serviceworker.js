var staticCacheName = "numerale1.1";

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('numerale1.1').then(function(cache) {
      return cache.addAll([
        '/',
      ])
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

const ASSETS = [
    "/"
];
