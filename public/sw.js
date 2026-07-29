/* calnetstudy service worker
 *
 * Shell        → cache-first, refreshed in the background.
 * Note data    → stale-while-revalidate, so notes you've opened stay
 *                readable offline and update silently when you're online.
 *
 * Bump CACHE when the shell changes so old assets get evicted.
 */

var CACHE = 'calnetstudy-v1';

var SHELL = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.webmanifest',
  '/icon-192.png',
  '/icon-512.png',
  '/data/manifest.json',
  '/data/search.json'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(SHELL); })
      .catch(function () { /* a missing asset must not block install */ })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys.filter(function (k) { return k !== CACHE; })
              .map(function (k) { return caches.delete(k); })
        );
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Navigations: serve the app shell so deep links work offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(function () {
        return caches.match('/index.html').then(function (r) {
          return r || new Response('Offline', { status: 503 });
        });
      })
    );
    return;
  }

  var isData = url.pathname.indexOf('/data/') === 0;

  e.respondWith(
    caches.match(req).then(function (cached) {
      var network = fetch(req)
        .then(function (res) {
          if (res && res.ok) {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put(req, copy); });
          }
          return res;
        })
        .catch(function () { return cached; });

      // Data: return cache immediately, refresh behind the scenes.
      // Shell: same strategy — it's small and revalidates fast.
      return cached || network;
    })
  );
});
