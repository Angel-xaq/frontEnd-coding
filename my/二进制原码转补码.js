//除了符号位按位取反 + 1
//这里取反涉及到二进制取反，所以要有二进制取反函数
//这里+1涉及到二进制加法，所以要有二进制加法函数
function BitwiseInversion(str) {
    return str.split('')
        .map(item => item === '0' ? '1' : '0')
        .join('');
}

function binaryAdd(a, b) {
    //方法一，用parseInt都变成十进制，然后toString(2)转为二进制
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}
let str='10110';
console.log(binaryAdd(str.at(0)+BitwiseInversion(str.slice(1)),'1'));  //11010
//at(0)是为了拿到符号位，slice(1)是为了去掉第一位的符号位