function BitwiseInversion(str) {
    return str.split('')
        .map(item => item === '0' ? '1' : '0')
        .join('');
}
console.log(BitwiseInversion('10110'));  //01001