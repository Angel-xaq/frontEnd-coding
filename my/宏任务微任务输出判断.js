async function test1() {
	console.log('start test1');//1
	console.log(await test2());//wei 3 7
	console.log('end test1');//8
}
async function test2() {
	console.log('test2');//2
	return await 'return test2 value'//wei 1
}
test1();

console.log('start async');//3

setTimeout(() => {
	console.log('setTimeout');//9
}, 0);

new Promise((resolve, reject) => {
	console.log('promise1');//4
	resolve();
}).then(() => {
	console.log('promise2');//wei 2 6
});

console.log('end async');//5
// async，在await后面跟的是同步代码时，会进入await方法内部并执行到return前，
// 然后跳出该async方法，执行与该async方法并列的同步任务,最后在将await后面的代码
// 注册到微任务去
