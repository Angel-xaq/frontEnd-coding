Function.prototype.mybind = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);  //这个是第一次传进来的参数，去掉了第一个的对象
  //var args = [...arguments].slice(1);  同样的写法
  
  var fBound = function (){
    // 这里的arguments是指mybind返回的函数传入的参数
    // 用apply来改变this指向
    //args.concat(...arguments);  同样的写法
    var arr =args.concat(Array.prototype.slice.call(arguments)); //拼接两次的所有参数：拼接mybind方法传入的参数和mybind方法返回的函数传入的参数
    if(this instanceof self){    //作为构造函数调用时，this指向实例
      self.apply(this,arr);
    }
    else{
      self.apply(context,arr);
    }
  }
  //下面这一块有点类似圣杯模式
  var fn = function () {};  //用一个空函数 fn 作为中间变量
  fn.prototype = this.prototype;  // 使中间变量 fn 的 prototype 指向绑定函数的 prototype
  fBound.prototype = new fn();
  return fBound;
}
function person(a,b,c){
  console.log(this.name);
  console.log(a,b,c);
}
person.prototype.collection = '收';
var egg = {name:'蛋'};
var bibi = person.mybind(egg,'点赞','投币');
bibi()
var b = new bibi('充电')  //this失效了，绑定在这个b上，所以没有name
console.log(b.collection)