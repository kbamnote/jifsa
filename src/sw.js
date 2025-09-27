// Service Worker for caching strategies
const CACHE_NAME = 'jifsa-careers-v1.0.0';
const DATA_CACHE_NAME = 'jifsa-careers-data-v1.0.0';

// Static assets to cache during installation - ONLY production assets
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/assets/', // Vite will generate hashed assets
  '/src/assets/logo.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  event.waitUntil(
    Promise.all([
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== DATA_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip caching for requests to other domains (APIs, etc.)
  if (url.origin !== location.origin) {
    return;
  }

  // For HTML requests, serve the cached version but update in background
  if (request.destination === 'document') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(request).then((response) => {
          // Clone the response before using it
          cache.put(request, response.clone());
          return response;
        }).catch(() => {
          // If network fails, try cache
          return cache.match(request);
        });
      })
    );
    return;
  }

  // For other assets, use cache-first strategy
  event.respondWith(
    caches.match(request).then((response) => {
      // Return cached version if available
      if (response) {
        return response;
      }
      
      // Otherwise fetch from network and cache
      return fetch(request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          // Cache the response for future requests
          cache.put(request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});