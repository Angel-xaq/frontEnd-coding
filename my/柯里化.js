// function add (...args){
//   const fn = (...addition)=>{
//     let args2 = args.concat(addition);
//     return add(...args2)
//   }
//   fn.sumOf=()=>{
//     console.log(args.reduce((p,v)=>p+v,0))
//   }
//   return fn
// }
// add(1, 2, 3).sumOf()
// add(1)(2)(3).sumOf()  
// add(1, 2)(3).sumOf()   
// add(4, 5)(1)(2, 3).sumOf()   
// add(1, 1)(3)(6).sumOf()  
function add(a, b) {
  return a + b;
}

// 执行 add 函数，一次传入两个参数即可
console.log(add(1, 2) )// 3
// 假设有一个 curry 函数可以做到柯里化
var addCurry = curry(add);
console.log(addCurry(1)(2))// 3
function curry(fn,...args){
 if(args.length>=fn.length){
     return fn(...args)
 }else{
     return (...args2)=> curry(fn,...args,...args2)
 }
}
add(1, 2, 3).sumOf()
add(1)(2)(3).sumOf()  
add(1, 2)(3).sumOf()   
add(4, 5)(1)(2, 3).sumOf()   
add(1, 1)(3)(6).sumOf() 
function add(...args){
    const fn = (...args2)=>{
         return add (...args,...args2)
    }
    fn.sumOf = ()=>{
         console.log(args.reduce((x,v)=>x+v,0))
    }
    return fn;

}