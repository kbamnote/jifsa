// Service Worker for caching strategies
const CACHE_NAME = 'jifsa-careers-v2';
const DATA_CACHE_NAME = 'jifsa-careers-data-v2';

// Static assets to cache during installation
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/index.css',
  '/src/App.css'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/get/read-form'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('Opened static cache');
          return cache.addAll(STATIC_ASSETS);
        }),
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

  // Handle API requests with network-first strategy
  if (API_ENDPOINTS.some(endpoint => url.pathname.includes(endpoint))) {
    event.respondWith(
      networkFirst(request, DATA_CACHE_NAME)
    );
    return;
  }

  // Handle static assets with cache-first strategy
  if (STATIC_ASSETS.includes(url.pathname) || isStaticAsset(url.pathname)) {
    event.respondWith(
      cacheFirst(request, CACHE_NAME)
    );
    return;
  }

  // For other requests, try network first, then cache
  event.respondWith(
    networkFirst(request, CACHE_NAME)
  );
});

// Cache-first strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    
    // Cache the response for future requests
    const cache = await caches.open(cacheName);
    cache.put(request, networkResponse.clone());
    
    return networkResponse;
  } catch (error) {
    // If network fails and not in cache, return a fallback
    return new Response('Offline content', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// Network-first strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    // Cache the response for future requests
    const cache = await caches.open(cacheName);
    cache.put(request, networkResponse.clone());
    
    return networkResponse;
  } catch (error) {
    // If network fails, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // If nothing works, return a fallback
    return new Response('Network error occurred', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Check if a URL points to a static asset
function isStaticAsset(pathname) {
  const staticExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2'];
  return staticExtensions.some(ext => pathname.endsWith(ext));
}