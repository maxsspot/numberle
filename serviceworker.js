let CACHE_NAME = 'numerale2.5';
let urlsToCache = [
    '/',
    '/index.html',
    '/ab2038.1-1160085212.jpg',
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
