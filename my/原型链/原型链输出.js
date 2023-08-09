var a = function () {
     this.b =3;
}
var c = new a();
a.prototype.b = 9;
var b = 7;
console.log(a());   //把a当作普通函数，而里面没有return，所以是undefined
console.log(b);  //7
console.log(c.b);  //3  从自己开始找
console.log(Object.prototype==Object);  //3  从自己开始找