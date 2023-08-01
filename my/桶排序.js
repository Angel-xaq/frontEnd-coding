function bucketSort(arr,bucketSize){
  const len = arr.length;
  if(len<=1) return arr;
  let max = 0, min  = 0;
  for(let num of arr){
    if(num < min) min = num;
    if(num > max) max = num
  };
  let bucketCount = Math.floor((max-min)/bucketSize)+1;
  let buckets = Array.from({length:bucketCount},x=>[]);
  for(let num of arr){
     buckets[Math.floor((num-min)/bucketSize)].push(num)
  };
  let pos = 0;
  for(let i = 0; i<buckets.length; i++){
     if(buckets[i]){
        insertSort(buckets[i])
        for(let j = 0; j < buckets[i].length; j++){
           arr[pos++] = buckets[i][j]
        }
     }
  }
  return arr
}
function insertSort(arr){
  if(arr.length <=1) return arr;
  var pre, cur;
  for(let i = 1; i < arr.length; i++){
    pre = i-1;
    cur = arr[i];
    while(pre >=0 && arr[pre]>cur){
      arr[pre+1] = arr[pre];
      pre--;
    }
    arr[pre+1] = cur;
  }
  return arr
}

 var arr = bucketSort([1,5,4,3,26,8,6],3)
 console.log(arr)