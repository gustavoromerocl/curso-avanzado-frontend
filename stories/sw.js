/**
 * install - Descargar y guardar archivos
 * activate - Actualiza y limpia la cache del storege local del navegador
 * fetch
 */
const CACHE_NAME = 'STORIES_CACHE-v1';

self.addEventListener('install', function(){
    //Guardar archivos iniciales 
    caches.open(CACHE_NAME).then(function(cache){
        cache.addAll(['/index.html', '/dist/javascript/bundle.js', '/public/images/image2.jpg', '/public/images/image1.jpg'])
    })
});

self.addEventListener('activate', function(ev){
    ev.waitUntil( //indica que se debe cumplir primero la promesa antes de continuar
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(CACHE_NAME !== cacheName) return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(ev){
    //console.log(ev.request);
    ev.respondWith(
        caches.match(ev.request)
            .then(function(response){
                return response || fetch(ev.request);
            })
    );
});

