//instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中
/*
实现步骤：
    首先获得对象的原型
    然后获取类型的原型
    然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null
*/

function myInstanceof(obj,myClass){
    let proto = Object.getPrototypeOf(obj);  //获取obj对象的原型
    let prototype = myClass.prototype;
    while(true){
        if(!proto) return false;   //一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null
        if(proto===prototype) return true;  //如果出现就表示在原型链上
        proto=Object.getPrototypeOf(proto);  //继续获取原型
    }
}
function A(){

}
let b=new A();
var res = myInstanceof(b,A);
var res = myInstanceof(function D(){},Object);
console.log(res);  //true