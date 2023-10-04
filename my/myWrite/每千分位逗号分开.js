function format(n){
    let num = n.toString(); // 转成字符串
    let decimals = '';
    // 判断是否有小数
    if(num.indexOf('.') > -1){
        decimals = num.split('.')[1];
        num = num.split('.')[0];
    }
    let len = num.length;
    let temp = '';
    decimals ? temp = '.' + decimals : temp;
    if (len <= 3) {
        return num + temp;
    } else {
        let remainder = len % 3;
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp;
        } else { // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp;   //*重点，用正则表达式
        }
    }
}
console.log(format(1141273.32422));  // 1,141,273.32422