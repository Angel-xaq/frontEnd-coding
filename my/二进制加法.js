function binaryAdd(a, b) {
  //方法一，用parseInt都变成十进制，然后toString(2)转为二进制
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  //方法二，按位相加
  //padStart() 方法用另一个字符串填充当前字符串，直到达到给定的长度。填充是从当前字符串的开头开始的。
  //padStart(targetLength, padString)
  let maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, '0');  //将比较短的字符串用0填充到一样长度
  b = b.padStart(maxLen, '0');
  let cnt = 0;//进位
  let res = '';//结果字符串
  for (let i = maxLen - 1; i >= 0; i--) {  //从最低位开始
    let temp = parseInt(a[i]) + parseInt(b[i]) + cnt;
    let currentNum = temp % 2;
    cnt = Math.floor(temp / 2);  //拿到进位
    res = currentNum + res;  //字符串连接
  }
  if (cnt > 0) {
    res = cnt + res;  //最后还要再加上进位，本题就是
  }
  return res;
}
console.log(binaryAdd('1010', '111')) // '10001'