/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    const MIN=1<<31
    function mul(a,b){
        let result=0
        while(b!==0){
            if((b&1)!==0){
                result+=a
            }
            b>>>=1
            a<<=1
        }
        return result
    }
    function div(a,b){
        const symA=a>>31
        const symB=b>>31
        const notSame=symA^symB
        a=symA===0?a:((~a)+1)
        b=symB===0?b:((~b)+1)
        let result=0
        for(let i=31;i>-1;i--){
            if(a===0){
                break
            }
            if((a>>i)>=b){
                result=result+(1<<i)
                a=a-(b<<i)
            }
        }
        return notSame?-result:result
    }
    if(dividend===MIN&&divisor===MIN){
        return 1
    }else if(divisor===MIN){
        return 0
    }else if(dividend===MIN){
        let result=div(dividend+1,divisor)
        return divisor===-1?result:result+div((dividend-mul(result,divisor)),divisor)
    }else{
        return div(dividend,divisor)
    }
    
};
// console.log(divide(-2147483648,-1))