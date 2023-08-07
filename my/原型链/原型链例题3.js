// 例题3
Function.prototype.a = () => {
  console.log(1);
}
Object.prototype.b = () => {
  console.log(2);
}
function A() {}
const a = new A();//对象
a.a();//Error
a.b();//2
A.a();//1
A.b();//2
// 原型链:  a-->A.prototype-->Object.prototype       A-->Function.prototype-->Object.prototype

// 对于 new 出来的对象 a 的属性，原型链查找的顺序应该是
// 1. a 自身
// 2. `a.__proto__` 相当于 A.prototype
// 3. `A.prototype.__proto__` 相当于 Object.prototype
// 4. `Object.prototype.__proto__` 这个为 null，原型链查找到头。
// 对于 function 定义的函数 A 的属性，原型链查找顺序应该是
// 1. A 自身
// 2. `A.__proto__` 相当于 Function.prototype
// 3. `Function.prototype.__proto__` 等于 Object.prototype
// 4. `Object.prototype.__proto__` 这个为 null，原型链查找到头。



