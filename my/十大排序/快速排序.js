function quickSort(arr, left, right) {
  if (arr.length <= 1) return arr;
  left = left === undefined ? 0 : left
  right = right === undefined ? (arr.length - 1) : right;
  if (left < right) {
    var x = arr[right], pivot = left - 1;
    for (var j = left; j <= right; j++) {  //找pivot
      if (arr[j] <= x) {
        pivot++;
        [arr[pivot], arr[j]] = [arr[j], arr[pivot]]; //交换，让pivot的左边都是比它小的
      }
    }
    // let pivot = partition(arr,left,right);
    quickSort(arr, left, pivot - 1);   //递归
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}
//上面那样写的话就不需要这个额外的函数找节点了
// function partition(arr,left,right){
//    let pivot = arr[left];
//    while(left<right){
//       while(left<right && arr[right]>pivot){
//         right--;
//       } 
//       arr[left] = arr[right];
//       while(left<right && arr[left]<pivot){
//         left++;
//       } 
//       arr[right] = arr[left];
//    }
//    arr[left] = pivot;
//    return left;
// }
var arr = quickSort([32, 12, 11, 78, 76, 45, 36]);
console.log(arr);

function quickSort1(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) {
    return arr;
  }
  let stack =[];
  // 创建一个栈，用于存储待处理的子数组的起始和结束索引  const stack = [];
  stack.push(0);
  stack.push(arr.length - 1);
  // 循环模拟递归
  while (stack.length > 0) {
    const end = stack.pop();
    const start = stack.pop();
    const pivotIndex = partition(arr, start, end);
    // 将左侧子数组的起始和结束索引入栈
    if (start < pivotIndex - 1) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }
    // 将右侧子数组的起始和结束索引入栈
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
  return arr;
}
function partition(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}
// 示例
const unsortedArray = [32, 12, 11, 78, 76, 45, 36];
const sortedArray = quickSort1(unsortedArray);
console.log(sortedArray);
