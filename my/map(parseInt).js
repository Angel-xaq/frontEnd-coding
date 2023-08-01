function parseInt(str, radix) { 
  console.log(str+'-'+radix)
  return str+'-'+radix; 
}
var a=["1", "2", "3", "4","5",6,7,8,9,10,11,12,13,14,15];
console.log(a.map(parseInt));
// [
//   '1-0',   '2-1',   '3-2',
//   '4-3',   '5-4',   '6-5',
//   '7-6',   '8-7',   '9-8',
//   '10-9',  '11-10', '12-11',
//   '13-12', '14-13', '15-14'
// ]
/*
[
  1, NaN, NaN, NaN, NaN, NaN,
  NaN, NaN, NaN,   9,  11,  13,
   15,  17,  19
]
*/