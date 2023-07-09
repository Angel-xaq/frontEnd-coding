// var add = (function (){
//   let count = 0;
//   return function (){
//     count++;
//     return (count);
//   }
// }
// )()
var add = (function (){
  let count = 0;
  return ()=>{   //闭包  返回这个箭头函数，就代表返回了add函数的局部变量count，可以在函数外部访问这个count
    count++;
    return count;
  }
})()
console.log(add());
console.log(add());
console.log(add());

