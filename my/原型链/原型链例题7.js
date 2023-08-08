function A() {
  this.test = 1
}

var a = new A();
a.test//1

a = new A;
a.test//1

a = A()
console.log(a.test)//Error

console.log(A.test) //undefined
// 使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。
// new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
// *重点  而 a = A() 只是把 A 作为普通函数，这个普通函数内部并无 return 所以 a 只是 undefined，a.test 就会报错。
// 至于 A.test， A 只是个函数定义，A 本身没得到执行，自然不会有什么 test 属性，只能往 Function.prototype 上找，自然还是找不到了