//方法一，正序遍历：
// 取出数组的第一个元素，随机产生一个索引值，将该第一个元素和这个索引对应的元素进行交换。
// 第二次取出数据数组第二个元素，随机产生一个除了索引为1的之外的索引值，并将第二个元素与该索引值对应的元素进行交换
// 按照上面的规律执行，直到遍历完成
function shuffle(arr){
    for(let i=0;i<arr.length;i++){
        let randomIndex = Math.round(Math.random()*(arr.length-1-i))+i;
        [arr[i],arr[randomIndex]]=[arr[randomIndex],arr[i]];
    }
    return arr;
}
arr = [1,2,3,4,5,6,7,8];
console.log(shuffle(arr));
//方法二，倒序遍历：
function shuffle1(arr){
    for(let i=arr.length;i>0;i--){
        let randomIndex = Math.floor(Math.random()*i);
        [arr[i-1],arr[randomIndex]]=[arr[randomIndex],arr[i-1]];
    }
    return arr;
}
arr1 = [1,2,3,4,5,6,7,8];
console.log(shuffle1(arr1));
