function insertSort(arr){
  if(arr.length<=1) return arr;
  let pre, cur;
  for(let i=1;i <arr.length;i++){  //将第0位看成了有序数据
    pre = i-1;
    cur = arr[i];
    while(pre>=0&&arr[pre]>cur){
      arr[pre+1]= arr[pre];   //放到后面一个位置
      pre--;      //不断往前，直到退出循环
    }
    arr[pre+1] = cur;  //退出循环说明找到了合适的位置了
  }
  return arr;
}
console.log(insertSort([5,3,2,7,8,4,6,3,1]))