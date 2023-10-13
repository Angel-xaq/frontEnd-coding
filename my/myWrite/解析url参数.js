//将url中参数部分的字符串截取出来，最终拆为一个个的键值对，存在对象中。简单版本
function fetchData(url) {
	let obj = {};
	var str = url.split('?')[1]; //name=QinYanFei&age=22&sex=0&phone=13083771680
	if(str){
		var arr = str.split('&'); // ["name=QinYanFei", "age=22", "sex=0", "phone=13083771680"]
		arr.forEach(index=>{
			const [key, value] = index.split('=');  // 依次["name", "QinYanFei"]  ["age", "22"]  ["sex", "0"] ["phone", "13083771680"]
			obj[key] = decodeURIComponent(value);  //要对值进行 URL 解码以处理特殊字符
		});
	}
	return obj;
}
var url = 'www.imooc.com?name=xiaodangao&age=22&sex=0&phone=19023271580';
console.log(fetchData(url))//{name: "xiaodangao", age: "22", sex: "0", phone: "13083771680"}

//进阶，支持JSON字符串   它将被解析为相应的JavaScript对象，并作为参数对象的值
function fetchData1(url) {
	let obj = {};
	var str = url.split('?')[1]; //name=QinYanFei&age=22&sex=0&phone=13083771680
	if(str){
		var arr = str.split('&'); // ["name=QinYanFei", "age=22", "sex=0", "phone=13083771680"]
		arr.forEach(index=>{
			const [key, value] = index.split('=');  // 依次["name", "QinYanFei"]  ["age", "22"]  ["sex", "0"] ["phone", "13083771680"]
			let decodedValue = decodeURIComponent(value);  //要对值进行 URL 解码以处理特殊字符
			try {
				obj[key] = JSON.parse(decodedValue);
			  } catch (error) {
				// 如果解析 JSON 失败，则将原始字符串存储到参数对象中
				obj[key] = decodedValue;
			  }
	
		});
	}
	return obj;
}
var url1 = 'https://example.com?name=John&age=30&address={"city":"New York","zipcode":10001}';
console.log(fetchData1(url1))//{name: "xiaodangao", age: "22", sex: "0", phone: "13083771680"}

//完整版 支持嵌套对象和数组
function parseParam(url){
	let obj = {};
	var str = url.split('?')[1];
	if (str) {
		var arr = str.split('&');
		arr.forEach(index => {
		  const [key, value] = index.split('=');
		  const decodedValue = decodeURIComponent(value);  //解码
	
		  const keys = key.split('.');  //分离出嵌套对象
		  let current = obj;
		  for (let i = 0; i < keys.length; i++) {
			const testedKey = keys[i];
			const isArray = /\[\]$/.test(testedKey);  //判断testedKey字符串是否以一对方括号结尾
	
			if (isArray) {
			  const arrayKey = testedKey.slice(0, -2);  //去掉[]
	
			  if (!current[arrayKey]) {
				current[arrayKey] = [];
			  }
	
			  if (i === keys.length - 1) {
				current[arrayKey].push(parseValue(decodedValue));
			  } else {
				const newIndex = current[arrayKey].length;
				if (!current[arrayKey][newIndex]) {
				  current[arrayKey][newIndex] = {};
				}
				current = current[arrayKey][newIndex];
			  }
			} 
			else {
			  if (i === keys.length - 1) {
				current[testedKey] = parseValue(decodedValue);
			  } else {
				if (!current[testedKey]) {
				  current[testedKey] = {};
				}
				current = current[testedKey];
			  }
			}
		  }
		});
	  }
	  return obj;
}

function parseValue(value) {
	try {
	  return JSON.parse(value);
	} catch (error) {
	  // 解析失败，则返回原始值
	  return value;
	}
}

const url2 = 'https://example.com?name=John&age=30&address.city=New%20York&address.zipcode=10001&tags[]=tag1&tags[]=tag2';
const params = parseParam(url2);
console.log(params);

//参考：https://juejin.cn/post/7238980109452230714

//可以用于处理重复的key值 重复出现的 key 要组装成数组
function parseParam1(url) {
	const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
	const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
	let paramsObj = {};
	// 将 params 存到对象中
	paramsArr.forEach(param => {
	  if (/=/.test(param)) { // 处理有 value 的参数
		let [key, val] = param.split('='); // 分割 key 和 value
		val = decodeURIComponent(val); // 解码
		val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
		if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
		  paramsObj[key] = [].concat(paramsObj[key], val);
		} else { // 如果对象没有这个 key，创建 key 并设置值
		  paramsObj[key] = val;
		}
	  } else { // 处理没有 value 的参数
		paramsObj[param] = true;
	  }
	})
	return paramsObj;
  }
  let url3 = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
  console.log(parseParam1(url3))