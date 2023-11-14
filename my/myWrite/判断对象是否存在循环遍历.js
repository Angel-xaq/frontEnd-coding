function hasCircularReference(obj, seen = new WeakSet()) {
    if (typeof obj !== 'object' || obj === null) {
        return false;  // 不是对象或为null，没有循环引用
    }

    if (seen.has(obj)) {
        return true;  // 发现循环引用
    } 
    seen.add(obj);

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && hasCircularReference(obj[key], seen)) {
            return true;  // 子对象存在循环引用        
        }
    }
    seen.delete(obj);  // 在回溯之前删除当前对象，以避免影响其他检查
    return false;  // 没有循环引用
}

const a = {};
a.b = a
console.log(hasCircularReference(a));  // 输出 true，存在循环引用
