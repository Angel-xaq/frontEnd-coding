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