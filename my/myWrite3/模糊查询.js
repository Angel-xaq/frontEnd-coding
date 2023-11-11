let arr=["a","abc","abcd","gfc"];
function solve(arr,key){
    let res=[];
    arr.forEach(item=>{
        if(item.indexOf(key)>=0){  //用indexOf
            res.push(item);
        }
    })
    return res;
}
console.log(solve(arr,"c"));

function solve2(arr,key){
    let res=[];
    let reg=new RegExp(key);   //用正则表达式
    arr.forEach(item=>{
        if(reg.test(item)){
            res.push(item);
        }
    })
    return res;
}
console.log(solve2(arr,"c"));