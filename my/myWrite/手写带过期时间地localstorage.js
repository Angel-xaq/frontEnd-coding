function setLocal(key, value) {
    let expireTime = new Date().getTime() + 10 * 60 * 1000; // 设置10分钟过期时间
    const obj = {
        value: value,
        expireTime: expireTime  //多添加一个属性
    };
    localStorage.setItem(key, JSON.stringify(obj));
}

function getLocal(key) {
    let item = localStorage.getItem(key);
    if (!item) {
        return null;
    }
    const obj = JSON.parse(item);
    let expireTime = obj.expireTime;
    let now = new Date().getTime();
    if (now > expireTime) { // 判断是否过期
        localStorage.removeItem(key);  //清除
        return null;
    }
    return obj.value;
}

setLocal("name",123)
getLocal("name")