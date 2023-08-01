function reduce(arr,fn,initialvalue){
  initialvalue = initialvalue === undefined?0:initialvalue;
  let res = initialvalue;
  for(let num of arr){
     res = fn(res,num)
  }
  return res
}
function fn(res,num){
  return res+num
}
var arr = [2,3,4,5];
var b = reduce(arr,fn,10);
var c = reduce(arr,fn)
console.log(b)