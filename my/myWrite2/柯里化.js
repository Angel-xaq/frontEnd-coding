//函数柯里化：将使用多个参数的一个函数转换为一系列使用一个参数的函数。
function curry(fn,...args){
    if(args.length>=fn.length){
        return fn(...args);
    }
    else{
        return (...args2)=>curry(fn,...args,...args2);
    }
}
// function add(a, b) {
//   return a + b;
// }
// var addCurry = curry(add);
// console.log(addCurry(1)(3));

// 实现相加
function add(...args) {
    const fn =(...args2)=>{
        return add(...args,...args2);
    }
    fn.sumOf = ()=>{
        return args.reduce((x,y)=>x+y,0);
    }
    return fn;
}
console.log(add(1, 2, 3).sumOf()) 
console.log(add(1)(2)(3).sumOf()) 
console.log(add(4, 5)(1)(2, 3).sumOf()) 
console.log(add(1, 1)(3)(6).sumOf()) 

//其他方法，可以方便写add方法，让柯里化的代码复杂点
function add1 (...args) {
    return args.reduce((a, b) => a + b);
}
function currying (fn) {
    let args = [];
    return function temp (...newArgs) {
        if (newArgs.length) {  //如果还有参数
            args = [...args,...newArgs];
            return temp;
        } 
        else {   //没有参数了
            let val = fn.apply(this, args);
            args = []; //保证再次调用时清空
            return val;
        }
    }
}
let addCurry = currying(add1);
console.log(addCurry(1)(2)(3)())  
console.log(addCurry(4, 5)(1)(2, 3)()) 
console.log(addCurry(1, 1)(3)(6)())  