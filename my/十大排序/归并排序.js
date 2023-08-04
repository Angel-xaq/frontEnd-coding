function mergeSort(arr){
  if(arr.length<=1) return arr;
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0,middle); //取0~middle-1
  let right = arr.slice(middle);  //取middle~arr.length-1
  return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
  let res = [];
  while(left.length && right.length){  //这里让两个序列插入后有序
      if(left[0]<right[0]) {
        res.push(left.shift())  //shift踢掉数组的第一个元素
      }
      else {
        res.push(right.shift());
      }
  }
  while(left.length) res.push(left.shift());
  while(right.length) res.push(right.shift());
  return res;
}
var arr = mergeSort([1,0,56,14,13,45,1]);
console.log(arr);