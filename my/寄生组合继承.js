function Parent(zoo){
  this.zoo = zoo
}
Parent.prototype.n = 1;
function Child(name,zoo){
  this.name = name;
  Parent.call(this,zoo)
}
indirect = (child,parent)=>{
  var target = Object.create(parent.prototype);
  target.constructor = child;
  child.prototype = target;
}
indirect(Child,Parent)
var child = new Child('a','c')
console.log(child.n)


function Super(){
    this.a =[1,2,3];
}

Super.prototype.say = function(){
    console.log(11);
}

function Sub(){
    Super.call(this);
}

Sub.prototype = Object.create(Super.prototype);  //绕开了new Super()

var sub1=new Sub();  //这里覆盖了上面new Super调用一次的结果
var sub2=new Sub();
sub1.a.push(4);
console.log(sub1.a);
console.log(sub2.a); 
sub1.say();
sub2.say();