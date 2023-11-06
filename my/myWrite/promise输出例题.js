
//第1题
const promise1 = new Promise((resolve, reject) => {
    console.log('promise1');
})

console.log('1', promise1);
//promise1
// 1 Promise { <pending> }  promise1没有被resolve或者reject，因此状态还是pending

//第2题
const promise2 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
    console.log(2);
})

promise2.then(() => { //promise.then才是微任务
    console.log(3);
})
console.log(4);
//1 2 4 3

//第三题  key
const promise3 = new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
        console.log('timerStart')
        resolve('success')
        console.log('timerEnd')
    }, 0)
    console.log(2)
})

promise3.then(res => {
    console.log(res)
})

console.log(4)
//1 2 4 "timerStart" "timerEnd" "success"  关键在于success是在timerEnd后面
//遇到promise.then，但其状态还是为pending，这里理解为先不执行。
//一轮循环过后，进入第二次宏任务，发现延迟队列中有setTimeout定时器，执行它
//首先执行timerStart，然后遇到了resolve，将promise的状态改为resolved且保存结果并将之前的promise.then推入微任务队列
//继续执行同步代码timerEnd
//宏任务全部执行完毕，查找微任务队列，发现promise.then这个微任务，执行它。

//第4题
Promise.resolve().then(() => {
    console.log('promise1')
    const timer2 = setTimeout(() => {
        console.log('timer2')
    }, 0)
})

const timer1 = setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(() => {
        console.log('promise2')
    })
}, 0)

console.log('start')
// start  promise1  timer1  promise2  timer2
// 刚开始整个脚本作为第一次宏任务来执行

//第5题
const promise5 = new Promise((resolve, reject) => {
    reject('error')
    resolve('success2')
})

promise5.then(res => {
    console.log('then1: ', res)
}).then(res => {
    console.log('then2: ', res)
}).catch(err => {
    console.log('catch: ', err)
}).then(res => {
    console.log('then3: ', res)
})
//catch:  error
//then3:  undefined
// catch不管被连接到哪里，都能捕获上层未捕捉过的错误。至于then3也会被执行，那是因为catch()也会返回一个Promise，且由于这个Promise没有返回值，所以打印出来的是undefined。

//第6题
//理解promise的链式调用
Promise.resolve(1)
  .then(res => {
    console.log(res)
    return 2
  })
  .catch(err => {
    return 3
  })
  .then(res => {
    console.log(res)
  })
//1 2
//走第一个和第三个then

//第7题
Promise.resolve()
  .then(() => {
    return new Error('error!!!')
  })
  .then(res => {
    console.log('then: ', res)
  })
  .catch(err => {
    console.log('catch: ', err)
  })
//then:  Error: error!!!
//返回任意一个非promise的值都会被包裹成promise对象，因此这里的return new Error('error!!!')也被包裹成了return Promise.resolve(new Error('error!!!'))。
// 我的理解是没有reject就不走catch

//第8题
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
//1
// .then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。
// 第一个then和第二个then中传入的都不是函数，一个是数字类型，一个是对象类型，因此发生了透传，将resolve(1) 的值直接传到最后一个then里。

//第9题
Promise.reject('err!!!')
  .then(
    res => {
      console.log('success', res)
    },
    err => {
      console.log('error', err)
    }
  )
  .catch(err => {
    console.log('catch', err)
  })
//error error!!!
// .then函数中有两个参数，第一个参数是用来处理Promise成功的函数，第二个则是处理失败的函数。
//所以这里直接走then，只有当then没有写第二个函数时走catch。走了then执行里面的第二个函数后理解为它是成功的所以不走catch

//第10题
//return new Error和throw new Error是不一样的
// 前者就是一个返回，会被then捕捉，不会被catch捕捉，后者一定是被catch捕捉
Promise.resolve()
  .then(
    function success(res) {
      throw new Error('error!!!')
    },
    function fail1(err) {
      console.log('fail1', err)
    }
  )
  .catch(function fail2(err) {
    console.log('fail2', err)
  })
//fail2 Error: error!!!
//then里第一个函数爆出的错误是被catch捕捉到，而不会被then的第二个函数捕捉到

//第11题
function runAsync(x) {
    const p = new Promise(resolve => {
      setTimeout(() => {
        console.log(x);
        resolve(x);
      }, 1000)
    })
    return p
  }
  
  Promise.all([runAsync(1), runAsync(2), runAsync(3)]).then(res => {
    console.log(res)
  })
// 1
// 2
// 3
// [ 1, 2, 3 ]

//第12题
function runAsync(x) {
    const p = new Promise( r => {
      setTimeout(() => {
        r(x, console.log(x))
      }, 1000)
    })
    return p
  }
  function runReject(x) {
    const p = new Promise((res, rej) =>
      setTimeout(() => {
        rej(`Error: ${x}`, console.log(x))
      }, 1000 * x)
    )
    return p
  }
  Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
    .then(res => console.log(res))
    .catch(err => console.log(err))
// 1
// 3
// 2
// Error: 2
// 4
// .catch是会捕获最先的那个异常，就是runReject(2)的结果，理解为这几个函数是同时开始的

//第13题
// async await的题目
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}

async1()

console.log('start')
// async1 start
// async2
// start
// async1 end
//碰到了await，它会阻塞async1后面代码的执行，因此会先去执行async2中的同步代码async2，然后跳出async1函数，执行同步代码start
//可以理解为「紧跟着await后面的语句相当于放到了new Promise中，下一行及之后的语句相当于放在Promise.then中」

//第14题
async function async1() {
    console.log('async1 start')
    await new Promise(resolve => {
        console.log('promise1');
        resolve(1);
    })
    console.log('async1 success');
    return 'async1 end'
}

console.log('srcipt start')

async1().then(res => console.log(res))

console.log('srcipt end')
// srcipt start
// async1 start
// promise1
// srcipt end
// async1 success
// async1 end
// 如果去掉resolve(1)，则await后面的Promise的状态始终是pending状态，所以在await之后的内容是不会执行的，也包括async1后面的 .then。输出：
// srcipt start
// async1 start
// promise1
// srcipt end

//第15题
const async1 = async () => {
    console.log('async1')
    setTimeout(() => {
        console.log('timer1')
    }, 2000)
    await new Promise(resolve => {
        console.log('promise1')
    })
    console.log('async1 end')
    return 'async1 success'
}
console.log('script start')
async1().then(res => console.log(res))
console.log('script end')
Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .catch(4)
    .then(res => console.log(res))
setTimeout(() => {
    console.log('timer2')
}, 1000)
// script start
// async1
// promise1
// script end
// 1
// timer2
// timer1
//注意：await后的new Promise要是没有返回值的话则不执行后面的内容。.then函数中的参数如果不是函数的话会发生透传

//第16题
const p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('resolve3')
        console.log('timer1')
    }, 0)
    resolve('resovle1')
    resolve('resolve2')
})
    .then(res => {
        console.log(res)
        setTimeout(() => {
            console.log(p1)
        }, 1000)
    })
    .finally(res => {
        console.log('finally', res)
    })
// resovle1
// finally undefined
// timer1
// Promise { undefined }
    
// .finally()方法的回调函数不接受任何的参数，也就是说你在.finally()函数中是没法知道Promise最终的状态是resolved还是rejected的
// 它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。
// 所以finally()中的res是一个迷惑项。输出finally undefined
// 最后一个定时器打印出的p1其实是.finally的返回值，而.finally的返回值如果在没有抛出错误的情况下默认会是上一个Promise的返回值，
// 而这道题中.finally上一个Promise是.then()，但是这个.then()并没有返回值，所以p1打印出来的Promise的值会是undefined，如果在定时器的下面加上一个return 1，则值就会变成1


//promise里面必须是resolve reject来表示成功或者失败，直接return一个值是不会被then捕捉到的，then catch里面才是用return来被链式调用

// 参考 https://juejin.cn/post/7151636219036696613#heading-40