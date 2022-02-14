/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const minValue=-(2**31);
    const minMul=Math.ceil(minValue/10);
    const minRemain=minValue-minMul;
    const isPos=x>=0?true:false;
    let result=0;
    let cur=isPos?-x:x;
    while(cur<0){
        if(result<minMul){
            return 0;
        }else if(result>minMul){
            result=result*10+(cur%10);
        }else{
            if(cur%10<minRemain){
                return 0;
            }else{
                result=result*10+(cur%10);
            }
        }
        cur=Math.ceil(cur/10);
    }
    if(isPos){
        if(result===minValue){
            return 0;
        }else{
            return -result;
        }
    }else{
        return result;
    }
};