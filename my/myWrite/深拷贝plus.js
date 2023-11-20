function deepClone(obj) {
    const map = new WeakMap();

    function isObject(obj) {
        return obj != null && (typeof obj === 'object' || typeof obj === 'function');
    }

    function clone(data) {
        if (!isObject(data)) {  //基础类型直接返回值
            return data;
        }
        const exist = map.get(data);
        if (exist) {
            return exist;
        }
        if (typeof data === 'function') {
            return new Function('return ' + data.toString())();
        }
        //日期或者正则对象则直接构造一个新的对象返回
        if ([Date, RegExp].includes(data.constructor)) {
            return new data.constructor(data);
        }
        //处理Array对象
        if (Array.isArray(data)) {
            let result = [];
            for (const key in data) {
                result.push(clone(data[key]));
            }
            return result;
        }
        //处理Map
        if (data instanceof Map) {
            const result = new Map();
            map.set(data, result);
            data.forEach((val, key) => {
                if (isObject(val)) {
                    result.set(key, clone(val));
                } else {
                    result.set(key, val);
                }
            })
            return result;
        }
        //处理Set
        if (data instanceof Set) {
            const result = new Set();
            map.set(data, result);
            data.forEach(val => {
                if (isObject(val)) {  //注意：set中的值为object的话也得深拷贝
                    result.add(clone(val));
                } else {
                    result.add(val);
                }
            })
            return result;
        }
        //收集键名（考虑了以Symbol作为key以及不可枚举的属性）
        const keys = Reflect.ownKeys(data);
         //利用Object的getOwnPropertyDescriptors方法可以获得对象的所有属性以及对应的属性描述
        const allDesc = Object.getOwnPropertyDescriptors(data);
        // 结合Object的create方法创建一个新对象，并继承传入原对象的原型链，这里得到的result是对data的浅拷贝
        const result = Object.create(Object.getPrototypeOf(data), allDesc);
        map.set(data, result); //新对象加入到map中，进行记录
        // Object.create()是浅拷贝，所以要判断并递归执行深拷贝
        keys.forEach(key => {
            const val = data[key];
            if (isObject(val)) {
                result[key] = clone(val);
            } else {
                result[key] = val;
            }
        })
        return result;
    }

    return clone(obj);
}

const obj = {
    // =========== 1.基础数据类型 ===========
    num: 0, // number
    str: '', // string
    bool: true, // boolean
    unf: undefined, // undefined
    nul: null, // null
    sym: Symbol('sym'), // symbol
    bign: BigInt(1n), // bigint

    // =========== 2.Object类型 ===========
    // 普通对象
    obj: {
        name: '我是一个对象',
        id: 1
    },
    // 数组
    arr: [0, 1, 2],
    // 函数
    func: function () {
        console.log('我是一个函数')
    },
    // 日期
    date: new Date(0),
    // 正则
    reg: new RegExp('/我是一个正则/ig'),
    // Map
    map: new Map().set('mapKey', 1),
    // Set
    set: new Set().add('set'),
    // =========== 3.其他 ===========
    [Symbol('1')]: 1  // Symbol作为key
};
// 4.添加不可枚举属性
Object.defineProperty(obj, 'innumerable', {
    enumerable: false,
    value: '不可枚举属性'
});

// 5.设置原型对象
Object.setPrototypeOf(obj, {
    proto: 'proto'
})

// 6.设置loop成循环引用的属性
obj.loop = obj;

const clonedObj = deepClone(obj);
clonedObj.reg=new RegExp('/我是一个/ig');
console.log(clonedObj);
console.log(obj);