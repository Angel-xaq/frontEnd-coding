function radixSort(arr,maxDigit){
  if(arr.length<= 1) return arr;
  let count = [];
  let dev = 1, mod = 10;
  for(let i = 0; i<maxDigit; i++,dev*=10,mod*=10){//注意这里是大循环啊，第一圈下来变成[1,3,4,5,26,6,8]，在这个基础上做第二圈，所以可以
     for(let j = 0; j< arr.length; j++){
       let digit = parseInt((arr[j] % mod) / dev)
       if(!count[digit]) count[digit] = [];
       count[digit].push(arr[j]);
     }  
     let pos = 0;
     for(let j = 0; j < count.length; j++){
        if(count[j]){ 
            let value;
            while((value = count[j].shift())){
               arr[pos++] = value;
            }
         }
     }
  }
  return arr;
}
var arr = radixSort([22,35,14,68,97,20,26,75],2)
console.log(arr)
