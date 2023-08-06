//这个是找当前趟的最大的元素，放到当前趟数组的最后一位
function selectSort(arr){
  if(arr.length<=1) return arr;
  let maxIndex;
  for(let i=0; i<arr.length-1; i++){
      maxIndex = 0;
      for(let j = 0; j <arr.length-i; j++){
         if(arr[j]>arr[maxIndex]) 
            maxIndex = j;
      }
      [arr[maxIndex],arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[maxIndex]];
  }
   return arr;
}
console.log(selectSort([5,3,2,7,8,4,6,3,1]))

//下面这个是找当前趟的最小的元素，放到当前趟数组的第一位
// function selectSort(arr){
//    if(arr.length<=1) return arr;
//    let minIndex;
//    for(let i=0; i<arr.length-1; i++){
//       minIndex = i;  //每次开始比较的位置
//       for(let j=i+1; j <arr.length-i; j++){
//          if(arr[j]<arr[minIndex]) 
//             minIndex = j;
//       }
//       [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
//    }
//    return arr;
// }