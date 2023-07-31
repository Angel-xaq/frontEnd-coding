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

//我的
function Super(){
  this.a =[1,2,3];
}

Super.prototype.say = function(){
  console.log(11);
}

function Sub(){
  Super.call(this);
}

function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype); // 创建对象  绕开了new superType()
  prototype.constructor = subType;                    // 增强对象
  subType.prototype = prototype;                      // 指定对象
}

inheritPrototype(Sub, Super);

var sub1=new Sub(); 
var sub2=new Sub();
sub1.a.push(4);
console.log(sub1.a);
console.log(sub2.a); 
sub1.say();
sub2.say();