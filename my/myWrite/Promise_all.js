function PromiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            throw new TypeError(`argument must be a array`);   //输入必须是个数组
        }
        var resolvedCount = 0;   //计算成功个数
        var promiseNum = promises.length;
        var res = [];
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i]).then(value => {   //遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
                resolvedCount++; 
                res[i] = value;  //*注意，必须用下标存入，为了保证顺序不变，不可以用push
                if (resolvedCount == promiseNum) {
                    return resolve(res);
                }
            }, error => {       //* then里面放了两个函数，一个是value，一个是error，如果是成功的话就执行then中的第一个函数，失败执行第二个
                return reject(error);
            })
        }
    })
}
//test
let p1 = new Promise(function (resolve, reject) {
    resolve(1)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
PromiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]   按照传入的顺序
})