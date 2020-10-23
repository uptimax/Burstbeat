
var routes = {};
var objectTree = new Proxy(routes, routeHandler);

function projectManager(obj) {
  
let keys = [...obj.map(obj => obj.id)];
  let index = 0;
  obj.forEach(doc => {
    if(Reflect.has(objectTree, "/" + keys[index]))
    return '';
    Reflect.set(objectTree, "/" + keys[index], doc.data())
    index++;
  })
window.objectTree = objectTree;
}
