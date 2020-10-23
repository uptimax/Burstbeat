var onlineStatus = false;
 presence();
  window.addEventListener('online', e=>{
    presence();
    console.log('we are hot');
  });
  window.addEventListener('offline', e=>{
     onlineStatus = false;
   // presence();
    console.log('burnout', onlineStatus);
    
  });
  
  function presence(){
    database.ref('info/connected').on('value', res => {
      console.log(res.val())
      if (res.val() == false) {
        onlineStatus = false;
        console.log('offline');
        return '';
      }
    
      onlineStatus = true;
      console.log('online');
    });
  }
  