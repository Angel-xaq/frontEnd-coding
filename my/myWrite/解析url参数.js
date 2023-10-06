//将url中参数部分的字符串截取出来，最终拆为一个个的键值对，存在对象中。
function fetchData(url) {
	var obj = {};
	var temp;
	var str = url.split('?')[1]; //name=QinYanFei&age=22&sex=0&phone=13083771680
	var arr = str.split('&'); // ["name=QinYanFei", "age=22", "sex=0", "phone=13083771680"]
	for (var index of arr) { //for in是遍历（object）键名，for of是遍历（array）键值。
		temp = index.split('='); // 依次["name", "QinYanFei"]  ["age", "22"]  ["sex", "0"] ["phone", "13083771680"]
		obj[temp[0]] = temp[1]; //键值：键名
	}
	return obj;
}
var url = 'www.imooc.com?name=xiaodangao&age=22&sex=0&phone=19023271580';
console.log(fetchData(url))//{name: "xiaodangao", age: "22", sex: "0", phone: "13083771680"}
