//间隔1秒打印01234
// 使用闭包实现
for (var i = 0; i < 5; i++) {
    function task(i){
        setTimeout(()=>{
            console.log(i);
        },i*1000)
    }
    task(i);
    // (function (i) {   //立即执行函数
    //     setTimeout(function () {
    //         console.log(i);
    //     }, i * 1000);
    // })(i);
}
// 使用 let 块级作用域
for (let i = 0; i < 5; i++) {
    setTimeout(()=> {
        console.log(i);
    }, i * 1000);
}


for(var i = 0; i < 10; i++) {
	setTimeOut(function(){
		console.log(i);
	})
}
// 先在全局定义变量 i, 然后执行 for 循环，执行一次 for 循环，分别将 i++ 放入函数调用栈队列，setTimeout 放入task队列 一次。
// 因为需要将函数调用栈队列里的任务执行结束后，再往下执行task任务
// 所以 i++ 一直在执行，10次 i++ 执行结束， i 的值为10（为什么不是9？因为 i++ 在值为9时，还会进行一次i++操作，最后一个循环完 i 的值为10，不满足条件，不再循环）。
// 至此，函数调用栈队列任务执行结束，再去执行task里的十个setTimeout任务，而此时i的值为10，所以输出10个10。
//解决方法是：1、使用立刻执行函数。这样 console.log(i) 中的i就保存在每一次循环生成的立刻执行函数中的作用域里了。
//2、改为let，let为块级作用域，所以每一次 for 循环，console.log(i); 都引用到 for 代码块作用域下的i，因为这样被引用，所以 for 循环结束后，这些作用域在 setTimeout 未执行前都不会被释放。