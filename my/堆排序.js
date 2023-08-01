function heapSort(arr){
  if(arr.length<=1) return arr;
  buildMaxHeap(arr);  //初始创建堆
  for(let i = arr.length-1; i>=0;i--){
    [arr[i],arr[0]]= [arr[0],arr[i]];  //交换堆顶和无序区末尾
    heapify(arr,0,i);  //继续保证堆的性质
  }
  return arr;
}
function buildMaxHeap(arr){
  if(arr.length<=1) return arr;
  let middle = parseInt(arr.length/2);  //同样是向下取整
  for(let i = middle; i>=0; i--){
    heapify(arr,i,arr.length);
  }
}
function heapify(arr,i,len){  //维护堆的性质
  let left = 2*i+1,right = 2*i+2,largest = i;
  if(left < len && arr[left]>arr[largest]) largest = left;
  if(right< len && arr[right]>arr[largest]) largest = right;
  if(largest!=i){
    [arr[i],arr[largest]] = [arr[largest],arr[i]];
    heapify(arr,largest,len);
  }
}
console.log(heapSort([5,3,2,7,8,4,6,3,1]))