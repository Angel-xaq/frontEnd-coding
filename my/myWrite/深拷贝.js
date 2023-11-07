//基本数据类型存放在栈中，它们之间的拷贝均为深拷贝，即两者再无任何关联


//1、用已有的函数实现
//JSON.parse(JSON.stringify(obj))，利用JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象。
//但是存在问题：拷贝的对象中如果有函数，undefined，symbol，当使用JSON.stringify()进行处理之后，都会消失。
let obj1 = {
    a: 0,
    b: {
        c: 0
    }
};
let obj2 = JSON.parse(JSON.stringify(obj1));
obj1.a = 1;
obj1.b.c = 1;
console.log(obj1); // {a: 1, b: {c: 1}}
console.log(obj2); // {a: 0, b: {c: 0}}

//2、手写实现深拷贝
function deepCopy(obj, cache = new WeakMap()) {
    if (!obj || !(typeof obj === "object" || typeof obj === "function")) return obj;   //处理基本数据类型
    //处理引用类型

    let newObj = Array.isArray(obj) ? [] : {}  //判断obj是数组还是对象
    if (cache.has(obj)) {    //判断缓存中是否存在对象的拷贝
        return cache.get(obj);
    }
    cache.set(obj, newObj);  //将拷贝对象存入缓存中
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key], cache);
        }
    }
    return newObj;
}
// 在 WeakMap 中，键只能是对象引用，不能是基本数据类型。
// 在 WeakMap 中，当一个键不再被其他对象引用时，该键会自动从 WeakMap 中被移除，因为 WeakMap 对键是弱引用的。
// WeakMap 没有提供直接的遍历方法或迭代器。由于无法枚举 WeakMap 的键，也无法获得 WeakMap 的大小。

let obj3 = {
    a: 0,
    b: {
        c: 0,
    }
};
let obj4 = deepCopy(obj3);
obj3.a = 1;
obj3.b.c = 1;
console.log(obj3); // {a: 1, b: {c: 1}}
console.log(obj4); // {a: 0, b: {c: 0}}


//最全的考虑所有类型的深拷贝
//判断一个对象的具体类型
const mapType = '[object Map]';
const setType = '[object Set]';
const arrayType = '[object Array]';
const objectType = '[object Object]';
const deepmap = [mapType, setType, arrayType, objectType]

const boolType = '[object Boolean]';
const dateType = '[object Date]';
const numberType = '[object Number]';
const stringType = '[object String]';
const symbolType = '[object Symbol]';
const errorType = '[object Error]';
const regexpType = '[object RegExp]';
const funcType = '[object Function]';

//先考虑是否是对象
function isObject(target) {
    const type = typeof target;
    return target != null && (type === 'object' || type === 'function')
}
function getType(target) {
    return Object.prototype.toString().call(target)
}
function getInit(target) {
    return new target.constructor()
}
function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}
function cloneRegExp(regexp) {
    const result = new RegExp(regexp.source, reFlags.exec(regexp))
    result.lastIndex = regexp.lastIndex;
    return result
}

function cloneOtherType(target, type) {
    const Ctor = target.constructor;
    switch (type) {
        case boolType:
        case numberType:
        case stringType:
        case errorType:
        case dateType:
            return new Ctor(target);
        case regexpType:
            return cloneRegExp(target);
        case symbolType:
            return cloneSymbol(target);
        case funcType:
            return target;
        default:
            return null;
    }
}
function clonedeep(target, map = new WeakMap()) {
    //处理基本数据类型
    if (!isObject(target)) {
        return target
    }
    //处理引用类型
    else {
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, result);
        let result;
        const type = getType(target);
        //处理可继续遍历的引用类型
        if (deepmap.includes(type)) {
            result = getInit(target);
            // 处理 Set
            if (type === setType) {
                target.forEach(value => {
                    result.add(deepclone(value, map));
                });
                return result;
            }
            // 处理 Map
            if (type === mapType) {
                target.forEach((value, key) => {
                    result.set(key, deepclone(value, map));
                });
                return result;
            }
            //处理对象或者数组
            for (const key in target) {
                result[key] = clonedeep(target[key], map);
            }
            return result;
        } else {  //处理不可便利的引用类型
            cloneOtherType(target, type);
        }
    }
}


//浅拷贝
//如果有的属性的值为引用类型的话，那么会将这个引用的地址复制给对象
console.log('---浅拷贝---')
//Object.assign()
const obj = { name: 'Alice', b: { age: 20 } };
const copyObj = Object.assign({}, obj);
copyObj.b.age = 30;
console.log(obj);
console.log(copyObj);
//扩展运算符
let obj11 = { a: 1, b: { c: 1 } }
let obj22 = { ...obj11 };
obj11.a = 2;
console.log(obj11); //{a:2,b:{c:1}}
console.log(obj22); //{a:1,b:{c:1}}
obj11.b.c = 2;
console.log(obj11); //{a:2,b:{c:2}}    属性的值为引用类型的话，会将这个引用的地址复制给对象
console.log(obj22); //{a:1,b:{c:2}}

// 数组的方法   浅拷贝  slice
const arr = [1, 2, [3]];
const copyArr = arr.slice();
copyArr[2][0] = 5;
console.log(arr);
console.log(copyArr);
// 数组的方法   浅拷贝  concat
let arr1 = [1, 2, [3], 4];
const copyArr2 = arr1.concat(); // [1,2,3,4]
copyArr2[2][0] = 5;
console.log(arr1);
console.log(copyArr2);

//手写浅拷贝
function shallowCopy(obj) {
    if (!obj || !(typeof obj === "object" || typeof obj === "function")) return obj;   //处理基本数据类型
    //处理引用类型
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];    //没有递归
        }
    }
    return newObj;
}
let params = { a: 1, b: { c: 1 } }
let newObj1 = shallowCopy(params)
// 拷贝对象中---基本类型老死不相往来，引用类型藕断丝连
params.a = 222
params.b.c = 666
console.log(params); // { a: 222, b: { c: 666 } }
console.log(newObj1); // { a: 1, b: { c: 666 } }
