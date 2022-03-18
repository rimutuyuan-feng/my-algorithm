/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // if(n===1){
    //     return 1
    // }
    // if(n===2){
    //     return 2
    // }
    // let llast=1
    // let last=2
    // let cur=0
    // for(let i=3;i<=n;i++){
    //     cur=last+llast
    //     llast=last
    //     last=cur
    // }
    // return cur
    if(n===1){
        return 1
    }
    if(n===2){
        return 2
    }
    n=n-2
    let result=[[2,1]]
    let base=[[1,1],[1,0]]
    while(n>0){
        if(n&1){
            result=mul(result,base)
        }
        base=mul(base,base)
        n>>=1
    }
    return result[0][0]
    function mul(arr1,arr2){
        let x=arr1.length
        let y=arr2[0].length
        let z=arr1[0].length
        const result=new Array(x).fill(0).map(val=>new Array(y).fill(0))
        for(let i=0;i<x;i++){
            for(let j=0;j<y;j++){
                for(let k=0;k<z;k++){
                    result[i][j]+=arr1[i][k]*arr2[k][j]
                }
            }
        }
        return result
    }
};