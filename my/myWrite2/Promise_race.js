function PromiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            // 当第一个 promise 成功或失败时返回结果     //因为Promise的状态只能改变一次
            Promise.resolve(promise).then(resolve, reject);  //用Promise.resolve()将参数"包一层"，使其变成一个promise对象
        }
    })
}
//test
const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('p1 延时3秒')
    }, 3000);
  });
  
  const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('p2 延时2秒')
    }, 2000);
  });
PromiseRace([p1,p2]).then(res=>console.log(res))
.catch(err=>console.log(err));
  // 2秒后打印   p2 延时2秒
  