const CACHE = 'ironlog-v10';
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg']))));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));
