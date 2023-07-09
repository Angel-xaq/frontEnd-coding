function Person(name, age) {
  this.name = name;
  this.age = age;
  this.eat = function() {
    console.log(age + "岁的" + name + "在吃饭。");
  }
}

Person.run = function () {}
Person.prototype.walk = function () {}

let p1 = new Person("jsliang", 24);
let p2 = new Person("jsliang", 24);

console.log(p1.eat === p2.eat); // false 
console.log(p1.run === p2.run); // true
console.log(p1.walk === p2.walk); // true
// new 操作符使得构造函数内的 eat 函数（对象），是在堆中新开一份空间放置，所以两个实例对象它自然不共享。
// 而原型上两个实例对象自然都是同一份，walk 方法相同。
// 需要注意的是 p1.run 和 p2.run 都是 undefined。   *重点
// 因为 run 方法只是作为 Person 自己的静态属性，p1 和之后的原型链上是找不到的。如果放在Person里面的话，那就是false