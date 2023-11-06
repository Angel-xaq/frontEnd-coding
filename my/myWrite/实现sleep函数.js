//1、使用promise+setTimeout
function sleep1(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
console.time('runTime:');
console.log('1');
sleep1(1000).then(function () {
    console.log('2');
    sleep1(2000).then(function () {
        console.log('3');
    });
});

//2、使用async+promise
function sleep2(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
async function run() {
    console.log('1');
    await sleep2(1000);
    console.log('2');
    await sleep2(2000);
    console.log('3');
}
run();

//3、使用Date计时
function sleep3(time) {
    var timeStamp = new Date().getTime();
    var endTime = timeStamp + time;
    while (true) {
        if (new Date().getTime() > endTime) {
            return;
        }
    }
}
console.log('1');
sleep3(1000);
console.log('2');
sleep3(2000);
console.log('3');
