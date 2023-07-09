a = '34', b ='1234567'; //2
// a = '35', b ='1234567'; //-1
// a = '35', b ='12345355'; //5
console.log(isContain(a,b));

function isContain(a,b){
  let alen = a.length;
  let blen = b.length;
  for(let i = 0; i<blen; i++){
    astart = 0;
    bstart = i;
    if(a[astart] == b[bstart]){    //原有的
      let temp = true;
      while(++astart < alen && ++bstart < blen){
        if(a[astart]!= b[bstart]) temp = false;
      }
    }
  }
  if(temp) return i;
  else return -1;

  /*   if(a[astart] == b[bstart]){  //这个是我自己写的
      while(a[++astart] ===b[++bstart]){
      }
      if(a[astart]===null)
        return i;
    }
    
  }
  if(i==blen) return -1; */
}








function isContain(a,b){
  for(let i =0; i< b.length; i++){
     let aStart = 0;
     let bStart = i;
     if(a[aStart]===b[bStart]){
       let temp = true;
       while(++aStart<a.length && ++bStart<b.length){
           if(a[aStart]!=b[bStart]) temp = false;
       }
       if(temp) return i;
     }    
  }
  return -1;
}



