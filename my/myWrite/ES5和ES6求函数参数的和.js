//ES5
function sum(){
    var sum=0;
    Array.prototype.forEach.call(arguments,function(item){
        sum += item*1;
    })
    return sum;
}

//ES6  有了扩展运算符和箭头函数
function sum1(...nums){
    let sum=0;
    nums.forEach(item=>{
        sum += item*1;
    })
    return sum;
}

console.log(sum(1,2,3,4,5))
console.log(sum1(1,2,3,4,5))