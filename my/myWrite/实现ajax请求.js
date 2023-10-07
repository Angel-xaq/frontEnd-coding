//步骤
//1、创建一个XMLHttpRequest对象
//2、设置回调函数onreadystatechange和添加一些信息
//3、使用open方法与服务器建立连接
//4、向服务器发送数据
//5、回调函数对不同的响应状态进行处理
const SERVER_URL = "www.xxx.com";
let xhr;
//下面考虑了兼容性，如果不考虑，就直接let xhr=new XMLHttpRequest();
if (window.ActiveXObject)   //判断是否是IE浏览器
{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");  //创建IE浏览器中的XMLHttpRequest对象
}
else if (window.XMLHttpRequest)    //判断是否是Netscape等其他支持XMLHttpRequest组件的浏览器
{
    xhr = new XMLHttpRequest();  //创建其他浏览器上的XMLHttpRequest对象
}
xhr.open("GET", SERVER_URL, true);  //参数：请求的方法、请求的地址、是否异步和用户的认证信息。
xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;  //4代表服务器返回的数据接收完成
    if (this.status === 200) {  // 当请求成功时
        handle(this.response);
    }
    else {
        console.error(this.statusText);
    }
}
xhr.onerror = function () {  // 设置错误监听函数
    console.error(this.statusText);
}
xhr.responseType = "json";  // 设置响应的数据类型
xhr.setRequestHeader("Accept", "application/json");  // 设置请求头信息
// 发送 Http 请求
xhr.send(null); // get不需要传递参数
// ajax中的五种状态码
// 0：请求未初始化
// 1：服务器连接已建立(已调用open方法，但还未调用send)
// 2：请求已接收(已调用send方法)
// 3：请求处理中(请求已到达服务端，正在处理)
// 4：请求已完成，且响应已就绪
// 状态： 200——正确、404——未找到页面、500——错误

/*------------使用promise封装ajax请求--------------*/
function getJSON(url) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", SERVER_URL, true);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status === 200) {
                resolve(this.response);
            }
            else {
                reject(new Error(this.statusText));
            }
        }
        // 设置错误监听函数
        xhr.onerror = function () {
            reject(new Error(this.statusText));
        };
        xhr.responseType = "json";
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send(null);  // 发送http请求
    })
    return promise;
}