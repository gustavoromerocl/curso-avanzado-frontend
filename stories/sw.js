/**
 * install - Descargar y guardar archivos
 * activate
 * fetch
 */
const CACHE_NAME = 'STORIES_CACHE-v2';

self.addEventListener('install', function(){
    //Guardar archivos iniciales 
    caches.open(CACHE_NAME).then(function(cache){
        cache.addAll(['/index.html', '/dist/javascript/bundle.js'])
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