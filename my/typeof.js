// 八大基本类型： Number, String, Boolean, Null, Undefined, Symbol, BigInt, Object
console.log(typeof undefined);//undefined;
console.log(typeof null)//object
console.log(typeof NaN)//number   *重点
console.log(typeof [])//object
var a = Symbol(1);// 因为 symbol 没有字面量 ,为了避免创建 Symbol 原始值包装对象 
console.log(typeof a)//symbol
var b = Symbol(1);
console.log(a===b)//false
const symbol1 = Symbol.for('test');
const symbol2 = Symbol.for('test');
console.log(symbol1 === symbol2); // true
// 有一个全局的symbol注册中心，用Symbol.for()创建的symbol会添加到这个注册中心，
// 并用它的 description作为索引键。
// 也就是说，如果你用Symbol.for()创建带有相同description的两个symbol，它们就是相等的。