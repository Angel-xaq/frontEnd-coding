//方法1，reduce
function add(arr){
    let sum = arr.reduce((a,b)=>a+b,0);
    return sum;
}
let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(add(arr));
//对于嵌套数组的求和，先扁平化，转为字符串，再转为数组
function add2(arr){
    let arr1=arr.toString().split(',').map(Number);
    let sum = arr1.reduce((a,b)=>a+b,0);
    return sum;
}
console.log(add2(arr));
//方法2，递归实现
function add3(arr){
    if(arr.length==1) return arr[0];
    return arr[0]+add(arr.slice(1));
}
console.log(add3(arr));