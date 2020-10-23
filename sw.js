self.addEventListener('install', evt=>{
 evt.waitUntil(console.log("instaling SW"))
});
self.addEventListener('activate', evt=>{})
self.addEventListener('fetch', evt=>{})
