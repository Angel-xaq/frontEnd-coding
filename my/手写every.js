//类似手写some

//every() 方法测试一个数组内的所有元素是否都能通过指定函数的测试。它返回一个布尔值
var arr=[2,3,4];
Array.prototype.myevery = function(fn,thisArg){
    let length = this.length;
    if(typeof fn !== 'function') throw new TypeError(fn + 'is not a function');   //fn必须是个函数
    for(let i=0; i<length; i++){
        let condition = fn.call(thisArg,this[i],i,this);
        if(!condition){      //只要有一个不满足条件，就返回false，不再判断
            return false;
        }
    }
    return true;   //都满足时，返回true
}
console.log(arr.myevery((v)=>v>1));