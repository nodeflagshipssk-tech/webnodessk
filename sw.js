const CACHE = 'nodessk-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/css/portal.css',
  '/assets/logos/logo-node-ssk.jpg',
  '/assets/logos/logo-nf.png',
  '/pages/road-blackspot.html',
  '/pages/road-accident.html',
  '/pages/road-capacity.html',
  '/pages/road-community.html',
  '/pages/road-dashboard.html',
  '/pages/alc-tambon.html',
  '/pages/alc-drinker.html',
  '/pages/alc-merit.html',
  '/pages/alc-model.html',
  '/pages/alc-dashboard.html',
  '/pages/project-main.html',
  '/pages/project-sub.html',
  '/pages/project-team.html',
  '/pages/project-docs.html',
  '/pages/project-dashboard.html',
  '/pages/guide.html',
  '/pages/report.html',
  '/pages/contact.html',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const net = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
      return cached || net;
    })
  );
});
