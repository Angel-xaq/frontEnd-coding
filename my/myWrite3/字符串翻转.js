//首先字符串转为数组
let str ="i am happy";
//1、split方法
//let newStr = str.split('');
//2、解构[...str]
// let newStr = [...str];
//3、Array.from
let newStr = Array.from(str);
//转为数组后调用reverse方法，再用join方法('')转为字符串
console.log(newStr.reverse().join(''));
//4、利用循环
let newStr1 = "";
for(let i=0; i<str.length;i++){
    let s = str.charAt(str.length-i-1)
    newStr1 += s;
}
console.log(newStr1)
