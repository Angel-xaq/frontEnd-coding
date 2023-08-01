function countSort(arr){
  const len = arr.length;
  if(len <= 1) return arr;
  let count = [];
  for(let num of arr){
     if(!count[num]) count[num]= 0;
     count[num]++;
  }
  let pos = 0;
  for(let i = 0; i< count.length; i++){
     while(count[i]){
        arr[pos++] = i;
        count[i]--;
     }
  }
  return arr
}
console.log(countSort([1,2,5,4,7,2,3]))