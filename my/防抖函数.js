var decounce=(fn,delay)=>{
  let timer = null;
  return (...args)=>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
        fn.apply(this,args)
    },delay)
  }
}