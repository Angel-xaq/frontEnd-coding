//类似手写map

//reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

var arr=[1,2,3,4];
Array.prototype.myreduce = function(fn,initialValue){
    if(typeof fn !== 'function') throw new TypeError(fn + 'is not a function');   //fn必须是个函数
    let sum = initialValue===undefined? 0:initialValue;;
    for(let i=0; i<this.length; i++){
      sum = fn(sum,this[i],i,this);   //* 注意这里没有call绑定
    }
    return sum;
}
console.log(arr.myreduce((a,b)=>a+b));
console.log(arr.myreduce((a,b)=>a+b,5));
1