// 例题2
var A = function() {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
  n: 2,
  m: 3
}//把A这个原型覆盖,指向了一个新的对象
// b.__proto__ = A.prototype//修改b的原型
var c = new A();
console.log(b.__proto__) //A{n:1}
console.log(b.n);//1
console.log(b.m);//undefined
console.log(c.__proto__) //{n:2,m:3}
console.log(c.n);//2
console.log(c.m);//3
