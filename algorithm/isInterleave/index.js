/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    if(s1.length+s2.length!==s3.length){
        return false
    }
    // function first(start1,start2,start3){
    //     if(start3===s3.length){
    //         return true
    //     }
    //     let result=false
    //     while(s1[start1]===s3[start3]&&start1<s1.length){
    //         start1++
    //         start3++
    //         result=result||second(start1,start2,start3)
    //     }
    //     return result
    // }
    // function second(start1,start2,start3){
    //     if(start3===s3.length){
    //         return true
    //     }
    //     let result=false
    //     while(s2[start2]===s3[start3]&&start2<s2.length){
    //         start2++
    //         start3++
    //         result=result||first(start1,start2,start3)
    //     }
    //     return result
    // }
    // return first(0,0,0)||second(0,0,0)
    const l1=s1.length
    const l2=s2.length
    const dp=new Array(l2+1)
    dp[0]=true
    for(let i=1;i<=l2;++i){
        dp[i]=dp[i-1]&&s2[i-1]===s3[i-1]
    }
    for(let i=1;i<=l1;++i){
        for(let j=0;j<=l2;++j){
            if(!j){
                dp[j]=dp[j]&&s1[i-1]===s3[i-1]
            }else{
                dp[j]=(dp[j]&&s1[i-1]===s3[i+j-1])||(dp[j-1]&&s2[j-1]===s3[i+j-1])
            }
        }
    }
    return dp[l2]
};