//这个参考手写map
var arr=[1,2,3,5,6];
Array.prototype.myfilter = function(fn, thisArg) {
  if(typeof fn !== 'function') throw new TypeError(fn + 'is not a function');  //fn必须是个函数
  let result = [];
  for(let i = 0; i < this.length; i++) {
    let condition = fn.call(thisArg, this[i], i, this);  //这个call绑定的参数比较重要
    if(condition){              //将满足条件的元素放入新数组
      result.push(this[i]);   
    }
  }
  return result;
}
console.log(arr.myfilter((v)=>v==2));