//reduce实现map
Array.prototype.myMap = function(fn,thisArg=[]) {
  if(typeof fn !== 'function') throw new TypeError(fn + 'is not a function');   //fn必须是个函数
  return this.reduce((pre,cur,index,arr) => {
    return pre.concat(fn.call(thisArg,cur,index,arr));    //*重点，concat()方法用于合并两个或多个数组
  },[])   //*注意[]不可以省略
}
const arr = [2,3,1,5];
const temp = arr.myMap(item => item * 3);
console.log(temp);
