Array.prototype.myMap = function (fn, initialValue){
   initialValue = initialValue || [];
   let res = [];
   this.reduce((pre,cur,index,arr)=>{
       res.push(fn.call(initialValue,cur,index,arr))
   })
   return res
}
let arr1 = [1,2,3]; let arr2 = [3,4,5];
let arr3 = arr1.myMap(function(cur,index,arr){
  return cur+this.length+index
},arr2)
console.log(arr3)
