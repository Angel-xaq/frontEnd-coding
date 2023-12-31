// function mergeSort(arr1,arr2){
//   let res = [];
//   while(arr1.length && arr2.length){
//     if(arr1[0]>arr2[0]){
//       res.push(arr2.shift())
//     }else if(arr1[0]<arr2[0]) {
//       res.push(arr1.shift())
//     }else {
//       let temp = arr1[0];
//       if(arr1[0]===arr2[0] && arr1[0] ==temp){
//         res.push(temp);
//         arr1.shift();
//         arr2.shift();
//       }else if (arr1[0]!==arr2[0] && arr1[0] ==temp){
//         res.push(arr1.shift())
//       }else if (arr1[0]!==arr2[0] && arr2[0] ==temp){
//         res.push(arr2.shift())
//       }
//     }
//   }
//   while(arr1.length) res.push(arr1.shift())
//   while(arr2.length) res.push(arr2.shift())
//   return res
// }
// let res = []
// function merge(arr1,arr2){
//   if(!arr1.length && !arr2.length)return;
//   if(!arr1.length)res.push(arr2.shift())
//   if(!arr2.length)res.push(arr1.shift())
//   if(arr1[0]<arr2[0]){
//     res.push(arr1.shift()) 
//   } 
//   else if(arr1[0]=arr2[0]){
//     res.push(arr2.shift())
//     arr1.shift()
//   }
//   merge(arr1,arr2)
//   return res
// }
function merge(arr1,arr2){
  let res = [];
  mergeSort= (arr1,arr2)=>{
      if(!arr1.length && !arr2.length) return;
      if(!arr1.length) res.push(arr2.shift());
      if(!arr2.length) res.push(arr1.shift());
      if(arr1[0]<arr2[0]) res.push(arr1.shift());
      else if(arr1[0]==arr2[0]){
          res.push(arr2.shift());
          arr1.shift();
      }else{
          res.push(arr2.shift())
      }
      mergeSort(arr1,arr2);
  }
  mergeSort(arr1,arr2);
  return res
}
var arr1=[1,2,3,3,4,5],arr2=[1,3,4,5,6,6];
console.log(merge(arr1,arr2))