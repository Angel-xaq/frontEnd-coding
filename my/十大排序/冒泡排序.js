function bubbleSort(arr){
  if(arr.length<=1) return arr;
  let isChange;  //标志
  for(let i = 0; i<arr.length-1; i++){
    isChange = 0;  //每比较一趟就重新初始化为0
    for(let j = 0; j<arr.length-1-i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];  //交换
        isChange = 1;
      }
    }
    if(isChange == 0){  //优化：如果比较完一趟没有发生置换，那么说明已经排好序了，跳出最外面的循环结束
      break;
    }
  }
  return arr;
}
console.log(bubbleSort([5,3,2,7,8,4,6,3,1]))