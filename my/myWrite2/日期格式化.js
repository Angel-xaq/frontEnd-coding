function dateFormat(date,format){
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    format = format.replace(/yyyy/,year);
    format = format.replace(/MM/,month);
    format = format.replace(/dd/,day);
    return format;
}
//test
console.log(dateFormat(new Date('2023-10-01'), 'yyyy/MM/dd')) 
console.log(dateFormat(new Date('2024-05-01'), 'MM/dd/yyyy'))
console.log(dateFormat(new Date('2023-12-01'), 'yyyy年MM月dd日'))
var today = new Date();
console.log(today)
//方法汇总
console.log(today.getFullYear());
console.log(today.getMonth()+1);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());