function Super(){
    this.a =[1,2,3];
}

Super.prototype.say = function(){
    console.log(11);
}

function Sub(){

}

Sub.prototype = new Super();   //*重点，Sub的原型是Super的实例

var sub1=new Sub();
var sub2=new Sub();
sub1.a.push(4);
console.log(sub1.a);
console.log(sub2.a);   //*重点，此处存在引用值共享