importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponsePlugin } = workbox.cacheableResponse;

registerRoute(
  ({ request }) => {
    return ['style', 'image', 'font'].includes(request.destination);
  },
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

self.addEventListener('install', () => {
  console.log('Service working is installing');
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  console.log('Service working is Activated');
  event.waitUntil(clients.claim());
});
