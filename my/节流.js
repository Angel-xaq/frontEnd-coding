
throttle=(fn,delay)=>{
  let timer = null;
  return (...args)=>{
    if(timer) return;
    timer = setTimeout(()=>{
      fn.apply(this,args)
      timer = null
    },delay)
  }
}