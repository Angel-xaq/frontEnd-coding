var length = 10;
function fn() {
    console.log(this.length+1);
    return this.length+1;
}
var obj = {
    length: 5,
    test1: function() {
        return fn();
    }
};
obj.test2=fn;
obj.test1.call();//11  显式绑定  我感觉是因为涉及到一个函数调用另一个函数，所以是使用默认绑定规则
obj.test1();//11
obj.test2.call()//11   显式绑定  可以理解为绑定null，指向的是window, 这边是严格模式   改成call(obj)的话返回6
obj.test2()//6    隐式绑定
// obj.test1= function(){return fn()}
// obj.test1() = 执行window.fn() fn不是obj调的，test1才是所以答案为11；
// obj.test2() = obj.fn(); 所以为6
//这道题其实还是有点难理解的，没找到解答，算了