function getType(value){
    if(value===null){
        return value+"";  //变成字符串输出
    }
    //引用类型的情况
    if(typeof value === "object"){
        let valueClass = Object.prototype.toString.call(value);  //重点是会使用这个函数
        let type = valueClass.split(" ")[1].split("");  //以数组为例，valueClass.split(" ")[1]是Array]，利用split("")拆成数组[ 'A', 'r', 'r', 'a', 'y', ']' ]
        type.pop();  //去掉]
        return type.join("").toLowerCase();   //因为typeof的输出是小写的，所以这边要改为小写
    }
    // 基本数据类型的情况和函数的情况
    else{
        return typeof value;
    }
}
var res = getType([1,12]);
var res = getType("jerry");
var res = getType(function(){});
var res = getType(12);
var res = getType(undefined);
console.log(res);

// 关于split  (" ")如果存在空格，就以空格为界划分数组元素，如果没有空格，就包裹一层为一个元素，("")直接拆成一个一个字符元素