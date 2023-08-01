throttle=(fn,delay)=>{
  let timer = null;
    return (...args)=>{
    if(timer) return;  //真就直接结束
    timer = setTimeout(()=>{
      fn.apply(this,args)
      timer = null
    },delay)
  }
}
//这个是学姐的，比较简洁的

//我的节流
function throttle(func, wait) {
  let timeout;
  return function() {
      let context = this;
      let args = arguments;
      if (!timeout) {   //如果一直调用，那么每隔wait，就+1，如果停止调用，则不会增加，下次调用重新计算时间
          timeout = setTimeout(() => {
              timeout = null;
              func.apply(context, args)
          }, wait)
      }
  }
}