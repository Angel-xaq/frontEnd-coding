//有num个小孩儿，编号从1-num，围成一圈依此报数，1、2...count 数到count的小孩儿退出这个圈， 然后下一个小孩 重新报数 1、2...count，问最后剩下的那个小孩儿的编号是多少?
function childNum(num,count){
    let arr=[];
    for(let i=0;i<num;i++){
        arr[i]=i+1;
    }
    let exit = 0;
    let counter =0;
    let curIndex=0;
    while(exit<num-1){
        if(arr[curIndex]!==0) counter++;
        if(counter==count){  //报数等于count的人要退出
            arr[curIndex]=0;
            counter=0;
            exit++;
        }
        curIndex++;
        if(curIndex==num){   //循环到头部
            curIndex=0; 
        }
    }
    for(i=0;i<num;i++){  //遍历，查看哪个不等于0，就是最后剩下来的
        if(arr[i]!==0){
            return arr[i];
        }
    }
}
console.log(childNum(30, 3))