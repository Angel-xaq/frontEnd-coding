//要求必须提供一个 then 方法来访问当前或最终的 value 或 reason。

//两个函数都是异步执行，会放入事件队列等待下一轮 tick。
//当调用 onFulfilled 函数时，会将当前 Promise 的 value 值作为参数传入。
//当调用 onRejected 函数时，会将当前 Promise 的 reason 失败原因作为参数传入。
//then 函数的返回值为 Promise。
//then 可以被同一个 Promise 多次调用。



const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executor) {
    var self = this;   // 保存初始化状态
    this.state = PENDING;    // 初始化状态
    this.value = null;     // 用于保存 resolve 或者 rejecte 传入的值
    this.fulfilledCallbacks = [];  // 用于保存 resolve 的回调函数
    this.rejectedCallbacks = [];  // 用于保存 reject 的回调函数

    function resolve(value) {
        // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
        if (value instanceof MyPromise) {
            return value.then(resolve, reject);
        }
        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = FULFILLED;
                self.value = value;
                self.fulfilledCallbacks.forEach(callback => { callback(value); });  // 看看有没有then里保留的待执行函数，执行函数
            }
        }, 0);
    }
    function reject(value) {
        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = REJECTED;   // 修改状态
                self.value = value;   // 设置传入的值
                self.rejectedCallbacks.forEach(callback => { callback(value); });  // 看看有没有then里保留的待执行函数，执行函数
            }
        }, 0);
    }

    // 将两个方法传入函数执行
    try {
        executor(resolve, reject);
    }
    catch (e) {
        reject(e);
    }

}

//这个写的还是有问题，无法链式调用
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {   //这是为了实现链式，所以返回MyPromise对象
        // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : function (value) {
            return value;
        };
        onRejected = typeof onRejected === "function" ? onRejected : function (error) {
            throw error;
        };
        if (this.state === PENDING) {  // 如果是等待状态，则将函数加入对应列表中
            this.fulfilledCallbacks.push(onFulfilled);
            this.rejectedCallbacks.push(onRejected);
        }

        // 如果状态已经凝固，则直接执行对应状态的函数
        if (this.state === FULFILLED) {
            onFulfilled(this.value);
        }
        if (this.state === REJECTED) {
            onRejected(this.value);
        }
    })
};

MyPromise.prototype.catch  = function (onRejected) {
    return this.then(null, onRejected);
}

//测试
console.log('第一步');
let a = new MyPromise((resolve, reject) => {
    console.log('第二步');
    setTimeout(() => {
        resolve('这次一定');
        console.log('第四步');
    });
});
a.then(
    result => {console.log(result)},
    error => {console.log(error)}
)
console.log('第三步');

