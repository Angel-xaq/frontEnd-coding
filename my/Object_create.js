function create(proto){
  function F() {
  }
  F.prototype = proto;
  console.log(F.__proto__.__proto__);    //F的__proto__指向Function.prototype，F.__proto__.__proto__指向Object.prototype
  return new F(); //注意这个返回的对象的.__proto__先指向proto，再指向Function.prototype，之后是Object.prototype。可以理解为这个proto的__proto__指向Function.prototype
}

let a = create(Number);
console.log(a.__proto__);  //[Function: Number]
console.log(a.__proto__.__proto__.__proto__===Object.prototype);  //a.__proto__先指向proto，再指向Function.prototype,之后是Object.prototype
let b = create(String);
console.log(b.__proto__);  //[Function: String]