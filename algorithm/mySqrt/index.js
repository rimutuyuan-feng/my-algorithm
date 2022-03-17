/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    //  let l=1
    //  let r=x
    //  let result=0
    //  while(l<=r){
    //      let mid=l+((r-l)>>1)
    //      if(mid*mid<x){
    //          result=mid
    //          l=mid+1
    //      }else if(mid*mid===x){
    //          result=mid
    //          break
    //      }else{
    //          r=mid-1
    //      }
    //  }
    //  return result
    if(x===0){
        return 0
    }
    let result=Math.floor(Math.exp(0.5*Math.log(x)))
    return (result+1)*(result+1)<=x?result+1:result
    
};