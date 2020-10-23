
//let fetcher = new Fetcher();
let routeHandler = {
  get(target, key, value){
     let data = target[key];
     let eleclass = key.replace(/\//g,'');
     let temp = directive4(data, eleclass);
     let viewContainer = getClass('views');
     let cond = false;
     let currentview;
     try{
       currentview = document.querySelector(`.views .${eleclass}`);
       if(currentview == null)
       throw " ";
       cond = true;
     }catch(e){
       cond = false;
       //console.log('falsy');
     }
    console.log(cond)
     !cond ? (function(){
       //console.log('putting')
       viewContainer.innerHTML += temp;
     })():(function() {
       let last = currentview.outerHTML = temp;
       viewContainer.insertAdjacentHTML('beforeend',last)
       //console.log('available')
     })();
     
     let others = getClass('views').lastElementChild.querySelector('others');
     var clause = { field: 'Artist', type: "==", cursor: target[key].Artist };
     clauser('Music', clause, others, 7,directive1);
     
     var comments = getClass('views').lastElementChild.querySelector('comments')
     var clause = {field:'songid',type:"==",cursor:key};
     clauser('comments',clause,getClass('.views'+keys+'.comments'), directive2);
     
  },
  set(target, key, value){
     target[key] = value;
  },
  has(target, key){
    console.log('checking');
    return target[key] || false;
  }
}