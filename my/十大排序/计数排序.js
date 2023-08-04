function countSort(arr){
   if(arr.length<= 1) return arr;
   let count = [];
   for(let num of arr){   //统计个数 例如最大数是99，那就会有count[99]，这样count.length=100
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
   return arr;
 }
 console.log(countSort([2, 2, 3, 8, 3, 7, 8, 99, 3, 2]))