//类似手写map

//some() 方法用于检测数组中的元素是否满足指定条件（函数提供）
//some() 方法会依次执行数组的每个元素：
    //如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
    //如果没有满足条件的元素，则返回false。
var arr=[1,2,3,4];
Array.prototype.mysome = function(fn,thisArg){
    let length = this.length;
    if(typeof fn !== 'function') throw new TypeError(fn + 'is not a function');   //fn必须是个函数
    for(let i=0; i<length; i++){
        let condition = fn.call(thisArg,this[i],i,this);
        if(condition){     //只要有一个满足条件的元素，就返回true，不再判断
            return true;
        }
    }
    return false;
}
console.log(arr.mysome((v)=>v==5));

