Function.prototype.myapply = function (context, args=[]){
  if(this === Function.prototype){
    return undefined;//防止Function.prototype.myapply直接调用
  }
  if(args && !(args instanceof Array)){  //这里判断参数是不是数组，因为apply需要传入的是数组
    throw("myapply 只接受数组作为参数");   
  }
  var context = context || window;  //this可能传入 null
  let fn = Symbol();
  context[fn] = this;               //1、给context添加fn属性,将方法挂载到传入的context的fn属性上
  const res = context[fn](...args); //2、将挂载的方法调用
  delete context[fn];               //3、将我们添加的属性方法删除
  return res;
}
function add (a,b){
  return this.c+a+b;
}
var obj = {c:1}
console.log(add.myapply(obj,[1,2]))