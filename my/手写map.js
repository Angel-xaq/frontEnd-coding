var arr=[1,2,3]
Array.prototype.mymap = function(callback, thisArg){
    let length = this.length;
  let result = [];
  if (!Array.isArray(this)) throw new TypeError('this is not an array'); //如果不是数组调用返回错误
  if (typeof callback !== 'function') throw new TypeError(callback + 'is not a function');  //回调方法必须是个函数
  if (length === 0) {  //数组为空，返回空数组
    return result;
  }
  for (let i = 0; i < length; i++) {
    result[i] = callback.call(thisArg, this[i], i, this);  //这个call绑定的参数比较重要
  }
  return result;
}
console.log(arr.mymap((v)=>v+1));