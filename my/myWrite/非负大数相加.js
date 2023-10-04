function sumBigNumber(a, b) {
    //类比二进制加法
    let maxLen = Math.max(a.length,b.length);
    a=a.padStart(maxLen,'0');
    b=b.padStart(maxLen,'0');
    let cnt = 0;
    let res='';
    for(let i=maxLen-1;i>=0;i--){
        let temp = parseInt(a[i])+parseInt(b[i])+cnt;
        let currentNum = temp%10;
        cnt = Math.floor(temp/10);
        res = currentNum+res;
    }
    if(cnt>0){
        res = cnt+res;
    }
    return res;
}
let a = "9007199254740991";
let b = "1234567899999999999";
console.log(sumBigNumber(a,b));
