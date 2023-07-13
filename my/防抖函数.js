var decounce=(fn,delay)=>{
  let timer = null;
  return (...args)=>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
        fn.apply(this,args)
    },delay)
  }
}
//这个是学姐的，比较简洁的非立即执行防抖函数

//我的防抖
function debounce(func, wait) {  
let timeout;   //这个只会在首次调用的时候执行
return function () {
    const args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        func.apply(this, args)   //调用间隔小于wait的时候不执行
    }, wait);  
}
}  