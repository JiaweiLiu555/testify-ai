const SHELL = "testify-shell-v1";
const PUBLIC_SHELL = ["/", "/exams", "/practice", "/alarm", "/manifest.webmanifest", "/favicon.svg"];
self.addEventListener("install", event => event.waitUntil(caches.open(SHELL).then(cache => cache.addAll(PUBLIC_SHELL))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== SHELL).map(key => caches.delete(key))))));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || event.request.url.includes("/api/")) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok && new URL(event.request.url).origin === location.origin) caches.open(SHELL).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match("/"))));
});
self.addEventListener("notificationclick", event => { event.notification.close(); event.waitUntil(clients.openWindow(event.notification.data?.url || "/alarm")); });
self.addEventListener("push", event => { const data = event.data?.json() || {}; event.waitUntil(self.registration.showNotification(data.title || "Testify Alarm", { body:data.body || "Your focused practice set is ready.", icon:"/favicon.svg", tag:"testify-alarm", requireInteraction:true, data:{url:"/alarm"} })); });
