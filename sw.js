/* Service Worker — Krótkofalarstwo Kompendium
   Strategia: cache-first dla statyk, network-first dla HTML (żeby zmiany się propagowały). */

const CACHE = 'ham-radio-v1';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.json',
    './favicon.svg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    // Obsługujemy tylko ten sam origin — nie cachujemy widgetów zewnętrznych
    if (url.origin !== self.location.origin) return;

    const isHTML = req.mode === 'navigate' ||
                   (req.headers.get('accept') || '').includes('text/html');

    if (isHTML) {
        // network-first dla HTML
        event.respondWith(
            fetch(req)
                .then((res) => {
                    const clone = res.clone();
                    caches.open(CACHE).then((c) => c.put(req, clone));
                    return res;
                })
                .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
        );
        return;
    }

    // cache-first dla statyk
    event.respondWith(
        caches.match(req).then((cached) => {
            if (cached) return cached;
            return fetch(req).then((res) => {
                const clone = res.clone();
                caches.open(CACHE).then((c) => c.put(req, clone));
                return res;
            }).catch(() => cached);
        })
    );
});
