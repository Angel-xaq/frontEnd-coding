// a=1;
// function test(e){
// 	function e(){
// 	}
// 	arguments[0]=2;
// 	console.log(e);  //2?  func?
// 	if(a){
// 		var b=3;
// 	}
// 	var c;
// 	a=4;
// 	var a;
// 	console.log(b); //unde
// 	f=5;
// 	console.log(c);  //und
// 	console.log(a);  //4
// }
// var a=1;
// test(1)
// console.log(!!' '+!!'')

// let str ="i am good man";
// let newStr = Array.prototype.slice.call(str);
// console.log(typeof newStr);
// console.log(newStr.reverse().join(""))//nam doog ma i
// console.log([]==false)//nam doog ma i
// function xq() { 
//     return new Promise((resolve, reject) =>{
// 		console.log('111');
//         setTimeout(() => {
//             console.log('张三去相亲!');
//             resolve('相亲成功!')
//         },2000)
//     })
// }
// function marry() {
//     return new Promise((resolve, reject) =>{
// 		console.log('222');
//         setTimeout(() => {
//             console.log('张三结婚了!');
//             resolve()
//         },1000)
//     })
// }
// function baby() {
// 	console.log('333');
//     setTimeout(() => {
//         console.log('小张出生了!');
//     },500)
// }
// xq()
// marry()
// baby()
// console.log('1主线程');					//整体script作为第一个宏任务进入主线程
// setTimeout(function() {				//setTimeout，其回调函数被分发到宏任务Event Queue（执行规则：从上到下排序，先进先执行）中
//     console.log('2宏任务');
//     process.nextTick(function() {
//         console.log('3宏任务里面的微任务');
//     })
//     new Promise(function(resolve) {
//         console.log('4微任务');
//         resolve();
//     }).then(function() {
//         console.log('5微任务')
//     })
// })
// process.nextTick(function() {	//process.nextTick()其回调函数被分发到微任务Event Queue中
//     console.log('6微任务');
// })
// new Promise(function(resolve) {		//Promise，new Promise直接执行，输出7
//     console.log('7微任务');
//     resolve();
// }).then(function() {
//     console.log('8微任务')			//then被分发到微任务Event Queue中,排在process.nextTick微任务后面。
// })
// setTimeout(function() {			//setTimeout，其回调函数被分发到宏任务Event Queue中,排在前面的setTimeout后面
//     console.log('9宏任务');
//     process.nextTick(function() {
//         console.log('10宏任务里面的微任务');
//     })
//     new Promise(function(resolve) {
//         console.log('11微任务');
//         resolve();
//     }).then(function() {
//         console.log('12微任务')
//     })
// })
 
//执行结果： 1主线程、7微任务、6微任务、8微任务、2宏任务、4微任务、3宏任务里面的微任务、5微任务、
//          9宏任务、11微任务、10宏任务里面的微任务、12微任务

//冒泡
function maoPao(arr){
    // const result=[];
    let isChange;
    for(let i=0;i<arr.length;i++){
        isChange=0;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; 
                isChange=1;
            }

        }
        if(isChange==0){
            break;
        }

    }
    return arr;

}
console.log(maoPao([5,3,2,7,8,4,6,3,1]))
//选择
function xuanze(arr){
    let maxIndex;
    for(let i=0;i<arr.length;i++){
        maxIndex=0;
        for(let j=0;j<arr.length-i;j++){
            maxIndex =arr[maxIndex]>arr[j]?maxIndex:j;
        }
        [arr[arr.length-1-i],arr[maxIndex]]=[arr[maxIndex],arr[arr.length-1-i]];
    }
    return arr;


}
console.log(xuanze([5,3,2,7,8,4,6,3,1]))


function insertSort(arr){
    if(arr.length<=1) return arr;
    let pre, cur;
    for(let i=1;i <arr.length;i++){  //将第0位看成了有序数据
      pre = i-1;
      cur = arr[i];
      while(pre>=0&&arr[pre]>cur){
        arr[pre+1]= arr[pre];   //放到后面一个位置
        pre--;      //不断往前，直到退出循环
      }
      arr[pre+1] = cur;  //退出循环说明找到了合适的位置了
    }
    return arr;
  }
console.log(insertSort([5,3,2,7,8,4,6,3,1]))

function shellSort(arr){
    if(arr.length<=1) return arr;
    let gap = 1;
    while(gap<(arr.length/3)){  //动态定义间隔序列
      gap = gap *3 +1;
    }
    let pre,cur;
    for(gap; gap>0; gap = Math.floor(gap/3)){
      for(let i = gap; i<arr.length; i++){
          pre = i-gap;
          cur = arr[i];
          while(pre>=0 && arr[pre]>cur){
            arr[pre+gap] = arr[pre];
            pre -= gap;
          }
          arr[pre+gap] = cur;
      }
    }
    return arr;
  }
  console.log(shellSort([5,3,2,7,8,4,6,3,1]))

  function mergeSort(arr){
    if(arr.length<=1) return arr;
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle); //取0~middle-1
    let right = arr.slice(middle);  //取middle~arr.length-1
    return merge(mergeSort(left),mergeSort(right));
  }
  function merge(left,right){
    let res = [];
    while(left.length && right.length){  //这里让两个序列插入后有序
        if(left[0]<right[0]) {
          res.push(left.shift())  //shift踢掉数组的第一个元素
        }
        else {
          res.push(right.shift());
        }
    }
    while(left.length) res.push(left.shift());
    while(right.length) res.push(right.shift());
    return res;
  }
  var arr = mergeSort([1,0,56,14,13,45,1]); 
  console.log(arr);

  function guibingpaixu(arr){
    if(arr.length<=1) return arr;
    let middle = Math.floor(arr.length/2);
    let left=arr.slice(0,middle);
    let right = arr.slice(middle,arr.length);
    return guibing(guibingpaixu(left),guibingpaixu(right));
  }

  function guibing(left,right){
    let res=[];
    while(left.length &&right.length){
        if(left[0]<right[0]){
            res.push(left.shift());
        }
        else{
            res.push(right.shift());
        }
    }
    while(left.length) res.push(left.shift());
    while(right.length) res.push(right.shift());
    return res;
  }
  var arr = guibingpaixu([1,0,56,14,13,45,1]); 
  console.log(arr); 

  function quickSort(arr,left,right){
    if(arr.length<=1) return arr;
    left = left===undefined ? 0:left
    right = right===undefined ? (arr.length-1):right;
    if(left<right){
      var x = arr[right], pivot= left - 1;
      for (var j = left; j <= right; j++) {  //找pivot
        if (arr[j] <= x) {
          pivot++;
          [arr[pivot],arr[j]] = [arr[j],arr[pivot]]; //交换，让pivot的左边都是比它小的
        }
      }
      quickSort(arr,left,pivot-1);   //递归
      quickSort(arr,pivot+1,right);
    }
    return arr;
  }
  var arr = quickSort([32,12,11,78,76,45,36]);
  console.log(arr);


  function myQucik(arr,left,right){
    if(arr.length<=1) return arr;
    left= left==undefined?0:left;
    right=right==undefined?(arr.length-1):right;
    if(left<right){
        let x=arr[right],pivot=left-1;
        for(let j=left;j<=right;j++){
            if(arr[j]<=x){
                pivot++;
                [arr[pivot],arr[j]] = [arr[j],arr[pivot]]; //交换，让pivot的左边都是比它小的
            }
        }
        myQucik(arr,left,pivot-1);
        myQucik(arr,pivot+1,right);
    }
    return arr;
  }
  var arr = myQucik([32,12,11,78,76,45,36]);
  console.log(arr);

  var Travel =function(root){
    let res=[];
    const dfs= function(root){
      if(root==null) return;
      res.push(root.val);
      dfs(root.left);
      dfs(root.right);
    }
    dfs(root);
    return root;
  }

  function fastPower(base, exp, mod) {
    let res = 1;
    base = base % mod;
  
    while (exp > 0) {
      if (exp % 2 === 1) {
        res = (res * base) % mod;
      }
  
      base = (base * base) % mod;
      exp = Math.floor(exp / 2);
    }
  
    return res;
  }
  
  // 示例使用
  const base = 2;
  const exp = Math.pow(10, 9) + 7 - 2;
  const mod = Math.pow(10, 9) + 7;
  
  const result = fastPower(base, exp, mod);
  console.log(result);
  console.log(550424600*9)