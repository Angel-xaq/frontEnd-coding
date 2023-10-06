# bind
bind 的区别在于会返回一个修改了 this 指向的新函数，并不会立即执行。  
bind 的实现包含了 JS 的两大核心内容：原型链和构造函数 (new) 。  
bind 方法的另一个特点是**支持柯里化**：函数的参数可以分多次传入，即可以在 bind 中传入一部分参数，在执行返回的函数的时候，再传入另一部分参数。  
bind 方法还有一个重要的的特点，绑定函数也可以使用 new 运算符构造，也就是说还**可以将 bind 返回的函数作为构造函数**。绑定的 this 失效了，因为此时的 this 已经指向了实例 obj，但传入的参数仍然生效。
```javascript
var name = 'Jack';
var Yve = {
    name: 'Yvette'
};
function person(age, job, gender) {
    console.log(this.name, age, job, gender);
}
var bindYve = person.bind(Yve, 22, 'engineer');
var obj = new bindYve('female');
// undefined 22 'engineer' 'female'
```
所以，在返回函数作为构造函数调用时，就不用修改 this 指向了，直接 self.apply(this)即可。因为作为构造函数调用时，this 就是指向实例，所以这里不需要做其他操作。  
我们可以用 **instanceof 来判断返回函数的原型是否在实例的原型链上**来判断返回函数是否被作为构造函数调用。  

作为构造函数调用时，实例还会继承函数的原型。  
我们可以修改返回函数的原型，**使返回函数的原型指向绑定函数的原型**（这样实例就可以继承函数的原型），然后在返回函数中用 instanceof 来判断绑定函数的原型是否在实例的原型链上。 因为实例的构造函数是返回函数，而返回函数的原型又指向了绑定函数的原型，所以绑定函数的原型肯定在实例的原型链上。


## 维护原型关系
上面我们修改返回函数的原型为绑定函数的原型，再配合 instanceof 来判断返回函数是否作为构造函数调用，思路是合理的，但直接让返回函数的原型指向绑定函数的原型就太粗暴了。  
了解堆栈就会知道，这样的写法其实只是做了一个简单的对象引用，即将返回函数的原型指向了绑定函数原型对象的引用。两个原型指向同一个对象，任何的操作都会相互影响。比如实例在原型上新增方法或者修改属性，绑定函数的原型也会跟着改变。  
```javascript
var name = 'Jack';
var Yve = {
    name: 'Yvette'
};

function person(age, job, gender) {
    console.log(this.name, age, job, gender);
}
var bindYve = person.bind2(Yve, 22, 'enginner');
var obj = new bindYve('female');

// 实例在原型上新增一个方法
obj.__proto__.clickLike = function(){
    console.log('一键三连');
}
obj.clickLike(); // 一键三连

// 绑定函数的原型也有了这个方法
person.prototype.clickLike(); // 一键三连


// 或者直接操作返回函数的原型，也是同样效果
// 返回函数的原型新增一个方法
bindYve.prototype.clickLike = function(){
    console.log('下次一定');
}
bindYve.prototype.clickLike(); // 下次一定

// 绑定函数的原型也有了这个方法
person.prototype.clickLike(); // 下次一定
```
解决这个问题我们**可以用一个空函数作为中间变量**，通过这个中间变量来维护原型关系，从而让 fBound.prototype 与 person.prototype 不再指向同一个原型对象。  
中间变量 fn 的实例 维护了返回函数 fBound 和 绑定函数 person 的原型关系，使我们可以继续使用 instanceof 来判断返回函数是否作为构造函数调用；同时，也“隔离”了返回函数原型和绑定函数原型，返回函数的原型指向了 fn 的实例，所以再怎么操作返回函数的 prototype 或者返回函数实例的__proto__属性都碰不着绑定函数的 prototype，解决了 fBound.prototype 与 person.prototype 指向同一个原型对象的问题。  

最终版本如[手写bind](/my/bind.js) 

参考：[掘金](https://juejin.cn/post/7158009281735262239)





