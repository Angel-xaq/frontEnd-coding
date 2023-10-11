function jsonToTree(data) {
    let res = [];
    if (!Array.isArray(data)) {
        return res;
    }
    let map = {};
    data.forEach(item => {
        map[item.id] = item;  //使用map，将当前对象的id与当前对象对应存储起来
    });
    data.forEach(item => {
        let parent = map[item.pid];
        if (parent) {
            (parent.children || (parent.children = [])).push(item);  //根节点新建children属性，再添加对象
        }
        else {
            res.push(item);  //根节点
        }
    });
    return res;
}

source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 2,
    name: 'div'
}]
console.log(jsonToTree(source))

