// 例题1
function A(name) {
  this.name = name;
}
A.prototype.getName = function(){
  console.log(this.name)
}
let a1 = new A('a1')
let a2 = new A('a2')
a1.getName();//a1
a2.getName();//a2
delete A.prototype.getName;
// a1.getName();//Error
// a2.getName();//Error
// 继承原型
