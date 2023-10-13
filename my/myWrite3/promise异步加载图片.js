function asyncLoadImg(src) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')   //必须放在html中运行
        // onload 事件会在页面或图像加载完成后立即发生。
        img.onload = () => {
            resolve(img);
        }

        img.onerror = () => {
            const error = new Error(`图片加载失败，url：${src}`)
            reject(error);
        }
        img.src = src;
    });
}
const url = 'https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF';
const url2 = 'https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF';
asyncLoadImg(url)
    .then(img1 => {
        console.log(img1);
        return asyncLoadImg(url2);
    })
    .then(img2 => {
        console.log(img2);
    })
    .catch(error => {
        console.log(error);
    })