// Minimal service worker so Chrome offers the "Install app" affordance and the
// app shell stays responsive when the user opens myexams without a network.
// Scope is derived from the SW location, so this works under any basePath.

const VERSION = "v1";
const SW_URL = new URL(self.location.href);
const SCOPE = SW_URL.pathname.replace(/[^/]*$/, "");
const CACHE = `myexams-${VERSION}`;

const PRECACHE = [
  SCOPE,
  `${SCOPE}icons/icon.svg`,
  `${SCOPE}icons/icon-192.png`,
  `${SCOPE}icons/icon-512.png`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await Promise.all(
        PRECACHE.map(async (url) => {
          try {
            const response = await fetch(url, { cache: "reload" });
            if (response.ok) await cache.put(url, response);
          } catch {
            // Ignore — first install may run without network.
          }
        }),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(SCOPE)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      try {
        const response = await fetch(request);
        if (response.ok && response.type === "basic") {
          cache.put(request, response.clone()).catch(() => {});
        }
        return response;
      } catch {
        const cached = await cache.match(request);
        if (cached) return cached;
        if (request.mode === "navigate") {
          const shell = await cache.match(SCOPE);
          if (shell) return shell;
        }
        throw new Error("offline and no cache match");
      }
    })(),
  );
});
