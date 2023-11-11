let obj = {
    name: 'a',
    io: {
        gg: 'd'
    },
}
let a = { ...obj };
a.name = 'b';
console.log(obj)

const array = [0, 1, 2, 3, 4]
array.splice(3, 1)
console.log(array)

var arr = [1, 5, 3,5,98,8,9,5,8];

const numbers = [1, 2, 3, 4, 5,6];
numbers.splice(0,8)
// const filteredNumbers = numbers.filter(num => {
//   if (num === 4) {
//     // throw new Error('出现错误');
//     // console.log(111);
//     return;
//   }
//   return num % 2 === 0;
// });

console.log(numbers);
console.log(1||2&&0);

var reg=/\d/g;
var str="11123bcd";
var res=str.replace(reg,5); //将数字换为a
console.log(res); 8//a1123bcd 只要匹配到符合规则的就返回

console.log('script start');
setTimeout(() => { console.log("setTimeout") }, 0);
new Promise(resolve => {
  console.log("Promise");
  resolve();
}).then(res => {
  console.log("promise1");
}).then(res => {
  console.log("promise2");
});
console.log("script end");