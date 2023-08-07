// 例题4
function Person(name) {
  this.name = name
}
let p = new Person('Tom');
console.log(p.__proto__);//Person.prototype
console.log(Person.__proto__);//Function.prototype
