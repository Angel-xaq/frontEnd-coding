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


