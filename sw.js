const CACHE_NAME = "almumayaz-v1";
const APP_SHELL = ["./","./index.html","./manifest.webmanifest","./icon.svg"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(APP_SHELL)));
  self.skipWaiting();
});
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});