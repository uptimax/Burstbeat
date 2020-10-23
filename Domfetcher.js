let getClass = (e, all = false)=>{
 return !all ? document.querySelector(`.${e}`): document.querySelectorAll(`.${e}`)
}

let getId = (e) => {
  return document.querySelector(`#${e}`);
} 

var geat = (e, all = false) => {
  ele = all ? document.querySelectorAll(`${e}`) : document.querySelector(`${e}`);
  return ele;
}