async function async1(){
  console.log('async1 start')//2
  await async2()
  console.log('async1 end')//wei 1 6
}
async function async2(){
  console.log('async2')//3
}
console.log('script start')//1
setTimeout(function(){
  console.log('setTimeOut')//宏1 8
}, 0)
async1()
new Promise(function(resolve){
  console.log('promise1')//4
resolve()
}).then(function(){
  console.log('promise2')//wei 2 7
})
console.log('script end')//5
  // 同步代码：script start; async1 start; async2; promise1; script end;
  // 微任务：async1 end; promise2
  // 宏任务：setTimeout
  // 如果是同步的，相当于把await后面的代码注册成一个微任务，在执行async函数后面注册的微任务继续push到任务队列，此时await注册的微任务在前；
  // 如果是异步的，await后面的代码会在本轮事件循环的最后执行；