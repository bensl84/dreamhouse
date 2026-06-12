/* Dream House service worker — version: dreamhouse-v3.2
   Makes the game installable + offline. Bump CACHE on every content change (and the
   version stamp + badge text in index.html + README) — the pre-publish check greps for a match. */
const CACHE = 'dreamhouse-v3.2';
// No bare './' here: iOS Safari's strict Cache API + GitHub Pages directory-URL normalization can make
// './' fail to match; the navigation fallback below already serves index.html for the bare URL.
const ASSETS = [
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon-180.png'
];

self.addEventListener('install', (e) => {
  // addAll is all-or-nothing: if ANY asset 404s the new SW never installs and the old one keeps serving.
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) =>
      hit || fetch(e.request).catch(() =>
        // only NAVIGATIONS fall back to the cached shell; other misses fail visibly
        e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()
      )
    )
  );
});
