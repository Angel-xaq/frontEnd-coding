a=1;
function test(e){
	function e(){
	}
	arguments[0]=2;
	console.log(e);  //2?  func?
	if(a){
		var b=3;
	}
	var c;
	a=4;
	var a;
	console.log(b); //unde
	f=5;
	console.log(c);  //und
	console.log(a);  //4
}
var a=1;
test(1)
console.log(!!' '+!!'')

let str ="i am good man";
let newStr = Array.prototype.slice.call(str);
console.log(typeof newStr);
console.log(newStr.reverse().join(""))//nam doog ma i
console.log([]==false)//nam doog ma i
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
console.log('1主线程');					//整体script作为第一个宏任务进入主线程
setTimeout(function() {				//setTimeout，其回调函数被分发到宏任务Event Queue（执行规则：从上到下排序，先进先执行）中
    console.log('2宏任务');
    process.nextTick(function() {
        console.log('3宏任务里面的微任务');
    })
    new Promise(function(resolve) {
        console.log('4微任务');
        resolve();
    }).then(function() {
        console.log('5微任务')
    })
})
process.nextTick(function() {	//process.nextTick()其回调函数被分发到微任务Event Queue中
    console.log('6微任务');
})
new Promise(function(resolve) {		//Promise，new Promise直接执行，输出7
    console.log('7微任务');
    resolve();
}).then(function() {
    console.log('8微任务')			//then被分发到微任务Event Queue中,排在process.nextTick微任务后面。
})
setTimeout(function() {			//setTimeout，其回调函数被分发到宏任务Event Queue中,排在前面的setTimeout后面
    console.log('9宏任务');
    process.nextTick(function() {
        console.log('10宏任务里面的微任务');
    })
    new Promise(function(resolve) {
        console.log('11微任务');
        resolve();
    }).then(function() {
        console.log('12微任务')
    })
})
 
//执行结果： 1主线程、7微任务、6微任务、8微任务、2宏任务、4微任务、3宏任务里面的微任务、5微任务、
//          9宏任务、11微任务、10宏任务里面的微任务、12微任务
