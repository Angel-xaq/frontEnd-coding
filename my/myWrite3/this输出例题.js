function a() {
    console.log(this);
}

a.call(null);
//window
// 根据ECMAScript262规范规定：如果第一个参数传入的对象调用者是null或者undefined，call方法将把全局对象（浏览器上是window对象）作为this的值。所以，不管传入null 还是 undefined，其this都是全局对象window。所以，在浏览器上答案是输出 window 对象。
// 要注意的是，在严格模式中，null 就是 null，undefined 就是 undefined

var obj = {
    name: 'cuggz',
    fun: function () {
        console.log(this.name);
    }
}
obj.fun()     // cuggz
new obj.fun() // undefined

var obj1 = {
    say: function() {
      var f1 = () =>  {
        console.log("1111", this);
      }
      f1();
    },
    pro: {
      getPro:() =>  {
         console.log(this);
      }
    }
 }
 var o = obj1.say;
 o();
 obj1.say();
 obj1.pro.getPro();
// 1111 window对象
// 1111 obj对象
// window对象
// o()，o是在全局执行的，而f1是箭头函数，它是没有绑定this的，它的this指向其父级的this，其父级say方法的this指向的是全局作用域，所以会打印出window；
//* obj.say()，谁调用say，say 的this就指向谁，所以此时this指向的是obj对象；
// obj.pro.getPro()，我们知道，箭头函数时不绑定this的，getPro处于pro中，而对象不构成单独的作用域，所以箭头的函数的this就指向了全局作用域window。

//到6

var number = 2;
var obj3 = {
 number: 3,
 db1: (function(){
   console.log(this);
   this.number *= 4;
   return function(){
     console.log(this);
     this.number *= 5;
   }
 })()
}
obj3.db1();
console.log(obj3.number);     // 15
