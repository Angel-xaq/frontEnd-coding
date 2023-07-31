arr = [1,2,3,4,5,[1,3,4,5],[1,3]]
function flatten(arr) {
    return arr.reduce((pre, cur)=>{  //pre存放结果，也是第一个开始的数
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, []);
}
console.log(flatten(arr));
