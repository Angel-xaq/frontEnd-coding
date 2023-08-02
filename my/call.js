Function.prototype.mycall = function (context,...args) {
  if(this === Function.prototype){
    return undefined; //防止Function.prototype.myapply直接调用
  }
  var context = context || window;  //this可能传入 null
  let fn = Symbol();   //优化，保证定义的值是唯一的
  context[fn] = this;               //1、给context添加fn属性,将方法挂载到传入的context的fn属性上
  const res = context[fn](...args); //2、将挂载的方法调用
  delete context[fn];               //3、将我们添加的属性方法删除
  return res    //返回调用的函数函数
}
function add (a,b){
    return this.c+a+b;
}
var obj = {c:1}
console.log(add.mycall(obj,1,2))