function inherit(subType, superType) {
    function F() {};
    F.prototype = superType.prototype;
    subType.prototype = new F();
    subType.prototype.constructor = superType;
    subType.prototype.uber = superType.prototype;   //uber不知道是什么，感觉是固有的属性
}

function Super(){
    this.a =[1,2,3];
}

Super.prototype.say = function(){
    console.log(11);
}

function Sub(){
    Super.call(this);
}

inherit(Sub, Super);

var sub1=new Sub(); 
var sub2=new Sub();
sub1.a.push(4);
console.log(sub1.a);
console.log(sub2.a); 
sub1.say();
sub2.say();
