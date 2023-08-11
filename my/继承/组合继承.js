function Super(){
    this.a =[1,2,3];
}

Super.prototype.say = function(){
    console.log(11);
}

function Sub(){
    Super.call(this);
}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub

var sub1=new Sub();  //这里覆盖了上面new Super调用一次的结果
var sub2=new Sub();
sub1.a.push(4);
console.log(sub1.a);
console.log(sub2.a); 
sub1.say();
sub2.say();