  var db = firebase.firestore();

 class Fetcher{
  constructor(){
    
  }
  getter(collection, element,limit, temp, onsuccess = false) {
  this.db.collection(collection).limit(limit).get().then(snapshot => {
    let docs = snapshot.docs;
    if (docs.length <= 0)
      return '';
    projectManager(docs);
    docs.forEach(doc => {
      element.innerHTML += temp(doc.data(), doc.id);
    });
    var lastitem = docs[docs.length - 1];
    onsuccess ? onsuccess(element, lastitem): '';
  })
}

clauser(collection, clause, element, limit = 1, temp, onsuccess = false, onfail = false){
  this.db.collection(collection).where(clause.field, clause.type, clause.cursor).limit(limit).get().then(snapshot => {
    let docs = snapshot.docs;
    if (docs.length <= 0)
      return '';
    projectManager(docs);
    docs.forEach(doc => {
      element.innerHTML += temp(doc.data(), doc.id);
    });
    
    if(onsuccess){
      onsuccess()
    }
  })
}

startAt(collection, element, start, limit = 1,temp, onsuccess = false, onfail = false) {
  
  if(onlineStatus == false){
      console.log('jdkxl');
    if (onfail) {
      console.log('just che:king');
      var fail = onfail.bind(this, collection, element, start, limit ,temp, onsuccess, onfail);
      fail(Fetcher.prototype.startAt);
      console.log('fireworks don fail')
    }
    return '';
  }
  console.log('loging is awesome');
  db.collection(collection).startAt(start).limit(limit).get().then(snapshot => {
    let docs = snapshot.docs;
    if (docs.length <= 0)
      return '';
    projectManager(docs);
    docs.forEach(doc => {
      element.innerHTML += temp(doc.data(), doc.id);
    });
  })
  
  
  
  .catch(err => {
      console.log('request failed');
    if (onfail) {
     var fail = onfail.bind(this, collection, element, start, limit, temp, onsuccess, onfail);
      fail(Fetcher.prototype.startAt);
    }
  })
  
  
}

startAfter(collection, element, start, limit = 1,temp) {
  this.db.collection(collection).startAt(start).limit(limit).get().then(snapshot => {
    let docs = snapshot.docs;
    if (docs.length <= 0)
      return '';
    projectManager(docs);
    docs.forEach(doc => {
      element.innerHTML += temp(doc.data(), doc.id);
    });
  })
}

}