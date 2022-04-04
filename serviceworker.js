var staticCacheName = "pwa";
 
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["/"]);
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

forceSWupdate () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.update()
      }
    })
  }
}
