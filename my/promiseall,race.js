Promise.all = function(promises){
  return new Promise((resolve, reject)=>{
    const len = promises.length;
    const values = [len];
    var resolveNum = 0;
    for(let i =0;i <len; i++){
      Promise.resolve(promises[i]).then(value=>{
        values[i] = value;
        resolveNum++;
        if(resolveNum === len){
          resolve(values)
        }
      },reason=>{
        reject(reason)
      })
    }
  })
}
MyPromise.race=function (promises){
  return new MyPromise((resolve,reject)=>{
    for(let i =0; i<promises.length;i++){
        MyPromise.resolve(promises[i]).then(value=>{
          resolve(value)
        },reason=>{reject(reason)})
    }
  })
}