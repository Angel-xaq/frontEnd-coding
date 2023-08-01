function radixSort(arr,maxDigit){
  const len = arr.length;
  if(len <= 1) return arr;
  let count = [];
  let dev = 1, mod = 10;
  for(let i = 0; i<maxDigit; i++,dev*=10,mod*=10){
     for(let j = 0; j< len; j++){
       let digit = parseInt((arr[j] % mod) / dev)
       if(!count[digit]) count[digit] = [];
       count[digit].push(arr[j])
     }  
     let pos = 0;
     for(let j = 0; j < count.length; j++){
        if(count[j]){
         let value
           while((value = count[j].shift())){
              arr[pos++] = value
           }
        }
     }
  }
  return arr
}

var arr = radixSort([1,5,4,3,26,8,6],5)
console.log(arr)






// var len = arr.length;
//   var counter = [];
//   if(len <= 1) return arr;
//   var mod = 10; 
//   var dev = 1;
//   for(let i =0 ; i < maxDigit; i++, mod *= 10, dev *=10){
//     for(let j = 0; j< len; j++){
//       var digit = parseInt((arr[j] % mod) /dev)
//       if(!counter[digit]) counter[digit] = [];
//       counter[digit].push(arr[j]);
//     }
//     var pos = 0;
//     for(let i = 0; i <counter.length; i++){
//       var value;
//       if(counter[i]!=null){
//         while((value = counter[i].shift())!=null){
//           arr[pos++] = value
//         }
//       }
//     }
//   }