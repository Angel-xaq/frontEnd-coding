function parseInt(str, radix) {     //parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数，radix 是 2-36 之间的整数，表示被解析字符串的基数。
  //例如1101：parseInt("1101", 2)表示13，parseInt("1101", 10)表示1101，parseInt("11", 8)表示9
  // console.log(str+'-'+radix)
  return str+'-'+radix; 
}
var a=["1", "2", "3", "4","5",6,7,8,9,10,11,12,13,14,15];
console.log(a.map(parseInt));   //传函数给map，radix其实是序号
// [
//   '1-0',   '2-1',   '3-2',
//   '4-3',   '5-4',   '6-5',
//   '7-6',   '8-7',   '9-8',
//   '10-9',  '11-10', '12-11',
//   '13-12', '14-13', '15-14'
// ]