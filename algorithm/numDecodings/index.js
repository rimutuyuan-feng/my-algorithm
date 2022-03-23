/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    //递归
    // const l=s.length
    // function process(index){
    //     if(index===l){
    //         return 1
    //     }
    //     if(s[index]==='0'){
    //         return 0
    //     }
    //     if(index<l-1&&(s[index]==='1'||(s[index]==='2'&&s[index+1]<'7'))){
    //         return process(index+1)+process(index+2)
    //     }
    //     return process(index+1)
    // }
    // return process(0)
    const l=s.length
    let dp2=1
    let dp1=s[l-1]==='0'?0:1
    for(let i=l-2;i>=0;i--){
        if(s[i]==='0'){
            dp2=dp1
            dp1=0
        }else if(s[i]==='1'||(s[i]==='2'&&s[i+1]<'7')){
            let temp=dp1+dp2
            dp2=dp1
            dp1=temp
        }else{
            dp2=dp1
        }
    }
    return dp1
};