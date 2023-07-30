function Super(){
    this.a =[1,2,3];
}

Super.prototype.say = function(){
    console.log(11);
}

function Sub(){
    Super.call(this);  //绑定，这样不存在引用值共享问题
}

var sub1=new Sub();
var sub2=new Sub();
sub1.a.push(4);
console.log(sub1.a);
console.log(sub2.a);  