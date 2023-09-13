function myNew(Con, ...args) {
    let obj = {};  //创建空对象
    obj.__proto__ = Con.prototype;  //将对象的__proto__指向构造函数的prototype
    let res = Con.apply(obj, args);  //将构造函数的this指向这个对象
    return res instanceof Object ? res : obj;
    //判断构造函数的返回类型，如果是引用类型，就返回这个引用类型的对象；如果是基础值类型，就返回新创建的对象
}
//也可以写成参数为空的情况，通过arguments获得，结果和上面是一样的
function myNew1() {
    let obj = {};
    let Con = [].shift.call(arguments);   //获得构造函数
    obj.__proto__ = Con.prototype;
    let res = Con.apply(obj, arguments);
    return res instanceof Object ? res : obj;
}

function Person(name) {
    this.name = name;
    return {
        age: 22  // 当构造函数返回引用/对象类型时，会直接返回这个数据， new 操作符无效
    };
}
let per = myNew(Person, '你好,new');
console.log(per); //{age:22}
console.log(per.constructor === Person); // false
console.log(per.__proto__ === Person.prototype); // false


function Person1(name) {
    this.name = name;
    return '十二点的程序员';  //当构造函数返回基础类型的数据，则会被忽略，返回的是新建的对象

}
let per1 = myNew(Person1, '你好,new');
console.log(per1); //Person1 {name: "你好,new"}
console.log(per1.constructor === Person1); // true
console.log(per1.__proto__ === Person1.prototype); // true