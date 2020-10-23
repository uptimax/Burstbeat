



let fetcher = new Fetcher();
fetcher.db = firebase.firestore();
firebase.firestore().enablePersistence().catch(err=>{
  if(err.code == 'umnimplemented'){
    consile.log('unimplemented');
  }
  if(err.code == 'failed-precondition'){
    console.log('failed precondition')
  }
})
window.addEventListener('DOMContentLoaded',init,false);
function init(){
  M.AutoInit();
  let updates = document.querySelector("#updates .update")
  fetcher.getter('Music',updates,10,directive1,(e,last)=>{
    loader = geat('#updates .loader');
    loadobserver = new ISO(loader);
    Reflect.set(loadobserver,'handle',(e)=>{
      
        var loader = e.target;
        e.target.classList.add('openloader');
        if(e.target.state == 'retrying'){
          return '';
        }
        console.log('instersecting');
      fetcher.startAt('Music',updates,last,1,directive1, ()=>{
        
        e.target.classList.remove('openloader');
        loader.state = 'ready';
      }, (collection, element, start, limit ,temp, onsuccess, onfail, query)=>{
         console.log('firework error');
        loader.state = 'retrying';
        
        var spiner = loader.querySelector('.spiner');
        var retry = loader.querySelector('.retry');
        var retryBtn = loader.querySelector('.retry-btn');
        
        (async ()=>{
           return Promise.resolve().then(()=>setTimeout(()=>{
              retry.classList.remove('shrink');
              spiner.classList.add('shrink');
              Promise.resolve(retryBtn.clicked = false);
            }, 2000));
            
        })();
        
        retryBtn.addEventListener('click', e=>{
          if(retryBtn.clicked == true){
            console.log('am taken');
            return '';
          }
          console.log('clicked')
          
          retryBtn.clicked = true;
          loader.querySelector('.spiner').classList.remove('shrink');
          loader.querySelector('.retry').classList.add('shrink');
          
          
          query(collection, element, start, limit, temp, onsuccess, onfail)
          
          
        },false)
        
      });
  
      
    });
    loadobserver.observe();
  },(query)=>{
    console.log('fireworks fail');
    //query(collection, clause, element, limit = 1, temp, onsuccess = false, onfail = false)
  });
}

/*
function initsupertabs(e){
  let types = e.getAttribute("data-type");
  var clause = {field:'gerne',type:'array-contain',types};
  fetcher.clauser("Music", clause,getId(types+' .'+ types),7,directive1);
}
*/

//active route

function activate(e){
  id = e.getAttribute("data-id");
  console.log(window.objectTree)
  console.log("cc");
}