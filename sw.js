var asset = [
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
'https://code.jquery.com/jquery-3.5.1.js',
'https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js',
'https://www.gstatic.com/firebasejs/7.19.1/firebase-firestore.js',
'https://www.gstatic.com/firebasejs/7.19.1/firebase-database.js'
];

var staticCaches = 'static-v1';
var staticCaches = 'dynamic-v1';
var fluidSize = 10;

function cacheClearer(cacheref, size){
  caches.open(cacheRef).then(cache=>{
    cache.keys().then(keys=>{
      if(keys.length > size){
        cache.delete(keys[0]);
      }
    })
  })
}

self.addEventListener('install',evt=>{
  evt.waitUntil(
    caches.open(cache=>{
     return cache.addAll(asset);
    })
    )
});

self.addEventListener('activate',async (evt)=>{
  evt.waitUntil(
    (await caches.keys()).filter(keys=>{
      return keys !== staticCaches && keys !== fluidCaches;
    }).map(key=> caches.delete(key))
    );
});

self.addEventListener('fetch',evt=>{
  evt.respondWith(
     caches.match(evt.request.url).then(cachesRes=>{
      return cachesRes || fetch(evt.request).then(fetchRes=>{
        return caches.open(fluidCaches).then(cache=>{
          cache.put(evt.request.url, fetchRes.clone());
          cacheClearer(fluidCaches, fluidSize);
          return fetchRes;
        })
      })
    })
    )
});