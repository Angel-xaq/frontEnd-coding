function shellSort(arr){
  if(arr.length<=1) return arr;
  let gap = 1;
  const len = arr.length;
  while(gap<(len/3)){
     gap = gap *3 +1;
  }
  let pre,cur;
  for(gap; gap>0; gap = Math.floor(gap/3)){
     for(let i = gap; i<len; i++){
        pre = i-gap;
        cur = arr[i]
        while(pre>=0 && arr[pre]>cur){
            arr[pre+gap] = arr[pre];
            pre -= gap;
        }
        arr[pre+gap] = cur
     }
  }
  return arr
}
console.log(shellSort([5,3,2,7,8,4,6,3,1]))