/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
   let  l = 0, r = x, res = -1;
   while(l<=r){
     let middle = (l+r)>>1;
     if(middle*middle>x){
       r = middle-1;
     }else{
       l = middle+1;
       res = middle;
     }
   }
   return res
 }