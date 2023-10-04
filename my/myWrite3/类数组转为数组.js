//类数组分为两类：1、函数参数对象arguments，箭头函数没有arguments参数
//2、利用querySelectorAll、getElementsByName获取到的NodeList，利用getElementsByTagName、getElementsByClassName获取到的HTMLCollection
// 类数组具备length属性，没有数组的方法
// 类数组转为数组的方法
//1、通过 call 调用数组的 slice 方法
Array.prototype.slice.call(arrayLike);
//2、通过 Array.from 方法
Array.from(arrayLike);
//3、通过展开运算符
function foo(){
    var args = [...arguments];
}
//4、通过 call 调用数组的 splice 方法
Array.prototype.splice.call(arrayLike, 0);
//5、通过 apply 调用数组的 concat 方法
Array.prototype.concat.apply([], arrayLike);