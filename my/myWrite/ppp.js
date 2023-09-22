function PromiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            throw new TypeError(`argument must be a array`);
        }
        var resolvedCount = 0;
        var promiseNum = promises.length;
        var res = [];
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolvedCount++;
                res[i]=value;
                if(resolvedCount===promiseNum){
                    return resolve(res);
                }
            }, error => {
                return reject(error);
            })
        }
    })
}

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