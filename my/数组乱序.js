arr = [1,2,3,4,5,6,7,8];
console.log(shuffle(arr))
function shuffle(arr){
  // const len = arr.length;
  // for(let i = 0; i< len; i++){
  //   let random = Math.round(Math.random() * (arr.length -1 - i)) + i;;  //Math.random()函数返回一个浮点数，伪随机数在范围从0 到小于1
  //   let temp = arr[random];
  //   arr[random] = arr[i];
  //   arr[i] = temp;
  // }
  //或者用这个更加标准，因为从后面开始，则只会与前面的元素交换
  for (let i = arr.length; i > 0; i--) {
    let random = Math.floor(Math.random() * i)   //Math.random()函数返回一个浮点数，伪随机数在范围从0 到小于1
    //   let temp = arr[random];
    let temp = arr[i - 1];
    arr[i - 1] = arr[random];
    arr[random] = temp;
  }
  return arr;
}