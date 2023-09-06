//类似手写map
// forEach的基本功能是遍历一个数组

Array.prototype.myforEach = function (fn) {
    let context = arguments[1];
    if(typeof fn !== 'function') throw new TypeError(fn + 'is not a function');   //fn必须是个函数
    for (let i = 0; i < this.length; i++) {
        fn.call(context, this[i], i, this);
    }
} 

let arr = [1, 2, 3];
arr.myforEach((item, index, array) => {
  console.log(item,index,array);
});
