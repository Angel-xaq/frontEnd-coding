arr = [1,2,3,4,5,5,6,7,8];
console.log(shuffle(arr))
function shuffle(arr){
  const len = arr.length;
  let random;
  for(let i = 0; i< len; i++){
    let random = Math.floor(Math.random()*len);
    let temp = arr[random];
    arr[random] = arr[i];
    arr[i] = temp
  }
  return arr
}