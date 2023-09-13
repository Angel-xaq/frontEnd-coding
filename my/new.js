function myNew(Con, ...args) {
  // 创建一个新的空对象
  let obj = {};
  // 将这个空对象的__proto__指向构造函数的原型
  // obj.__proto__ = Con.prototype;
  Object.setPrototypeOf(obj, Con.prototype);
  // 将this指向空对象
  let res = Con.apply(obj, args);
  // 对构造函数返回值做判断，然后返回对应的值
  return res instanceof Object ? res : obj;
}
//验证
//构造函数Person
function Person(name) {
  this.name = name;
   return {
    age: 22  // 当构造函数返回对象类型的数据时，会直接返回这个数据， new 操作符无效   console.log(per); 输出{age:22}
  }; 
  // return '十二点的程序员';  // 而当构造函数返回基础类型的数据，则会被忽略 console.log(per); 输出{name: "你好,new"}

}
let per = myNew(Person, '你好,new');
console.log(per); // {name: "你好,new"}
console.log(per.constructor === Person); // true
console.log(per.__proto__ === Person.prototype); // true


function A(){
  this.a = 1;
}
var b = new A();
console.log(b)
// 用new Object() 的方式新建了一个对象 obj
// 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
// 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
// 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
// 返回 obj
