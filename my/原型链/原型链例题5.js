// 例题5
function A() {
}
A.prototype.n = 0;
A.prototype.add = function () {
  this.n += 1;
}
a = new A();
b = new A();
a.add();//a=A{n:1} a.__proto__ = {n:0,add:f()}
console.log(b.add())//b=A{n:1},b.__proto__ = {n:0,add:f()}   原型继承