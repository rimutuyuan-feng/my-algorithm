/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    // //空间复杂度O（m*n）
    // const dp=new Array(m).fill(0).map(val=>new Array(n))
    // for(let i=0;i<m;i++){
    //     dp[i][n-1]=1
    // }
    // for(let i=0;i<n;i++){
    //     dp[m-1][i]=1
    // }
    // for(let i=m-2;i>=0;i--){
    //     for(let j=n-2;j>=0;j--){
    //         dp[i][j]=dp[i+1][j]+dp[i][j+1]
    //     }
    // }
    // return dp[0][0]
    // //空间复杂度 O(min(m,n))
    // let min=Math.min(m,n)
    // let max=Math.max(m,n)
    // const dp=new Array(min).fill(1)
    // for(let i=max-2;i>=0;i--){
    //     for(let j=min-2;j>=0;j--){
    //         dp[j]=dp[j+1]+dp[j]
    //     }
    // }
    // return dp[0]
    //数学方法
    let min=Math.min(m-1,n-1)
    let max=Math.max(m-1,n-1)
    let result=1
    for(let i=1;i<=min;i++){
        result*=(max+i)/i
    }
    return result
};