/**
 * install - Descargar y guardar archivos
 * activate
 * fetch
 */
const CACHE_NAME = 'STORIES_CACHE-v1';

self.addEventListener('install', function(){
    //Guardar archivos iniciales 
    caches.open(CACHE_NAME).then(function(cache){
        cache.addAll(['/index.html'])
    })
})