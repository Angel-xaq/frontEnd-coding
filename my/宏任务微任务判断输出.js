async function testSometing() {
  console.log("执行testSometing");//2
  return "testSometing";
}

async function testAsync() {
  console.log("执行testAsync");//6
  return Promise.resolve("hello async");
}
async function test() {
  console.log("test start...");//1
  const v1 = await testSometing();
  //wei 1
  console.log(v1);//5
  const v2 = await testAsync();
  //wei 3
  console.log(v2);//8 hello async
  console.log(v1, v2);//9
}
 
test();

var promise = new Promise((resolve)=> {
   console.log("promise start..");//3
    resolve("promise");
  });
  //wei 2
promise.then((val)=> console.log(val));//7

console.log("test end...")//4