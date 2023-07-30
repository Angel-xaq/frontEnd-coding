async function t1 () {
  console.log(1)//1
  console.log(2)//2
  new Promise( function ( resolve ) {
    console.log( 'promise3' )//3
    resolve();
  } ).then( function () {
    console.log( 'promise4' )// wei 1 9
  } )
  await new Promise( function ( resolve ) {
    console.log( 'b' )//4
    resolve();
  } ).then( function () {
    console.log( 't1p' )//wei2 10
  } )
  // wei 5
  console.log(3)//13
  console.log(4)//14
  new Promise( function ( resolve ) {
  console.log( 'promise5' )//15
  resolve();
  } ).then( function () {
  console.log( 'promise6' )//wei7 18
  } )
}
  
setTimeout( function () {
  console.log( 'setTimeout' )//宏1 19
}, 0 )

async function t2() {
  console.log(5)//16
  console.log(6)//17
  await Promise.resolve().then(() => console.log('t2p'))//wei4 12
  //wei 6
  console.log(7)//16
  console.log(8)//17
}
  
t1()
new Promise( function ( resolve ) {
  console.log( 'promise1' )//5
resolve();
} ).then( function () {
  console.log( 'promise2' )// wei3 11
} )
t2()
console.log('end');//8
// 同步代码：1 2 promise3 b promise1 5 6 end 
// 宏任务：setTimeout
// 微任务：promise4 t1p promise2 t2p  3 4 promise5 7 8 promise6
// await右边的代码当同步代码执行就好了
// await之后的代码必须等await语句执行完成后（包括微任务完成），才能执行后面的，
// 也就是说，只有运行完await语句，才把await语句后面的全部代码加入到微任务行列，
// 所以，在遇到await promise时，必须等await promise函数执行完毕
// 才能对await语句后面的全部代码加入到微任务中，所以，
// 在等待await Promise.then微任务时，
// 1.运行其他同步代码，
// 2.等到同步代码运行完，开始运行await promise.then微任务，
// 3.await promise.then微任务完成后，把await语句后面的全部代码加入到微任务行列，
// 4.根据微任务队列，先进后出执行微任务