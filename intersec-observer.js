
function colorGenerator(){
  red = (Math.random() * (Math.random()*999).toFixed(3)).toFixed(5);
  blue = (Math.random() * (Math.random()*999).toFixed(3)).toFixed(5);
  green = (Math.random() * (Math.random()*999).toFixed(3)).toFixed(5);
  alpha = (Math.random()*1).toFixed(3);
  //console.log(`rgba(${red}, ${blue}, ${green}, ${alpha})`);
  //return `rgba(${red}, ${blue}, ${green}, ${alpha})`;
  return `rgba(${red}, ${blue}, ${green}, 1)`;
}



class ISO{
  constructor(element){
    this.element = element;
  }
  
  init(){
    
    var callback = this.callback.bind(this);
    this.iso = new IntersectionObserver(callback);
  }
  
  callback(entry){
   var entries = entry[0];
    if(entries.isIntersecting){
      this.handle(entries);
    }
  }
  
  observe(){
    this.init();
    this.iso.observe(this.element);
  }
}