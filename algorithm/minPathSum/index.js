/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let x=grid.length
    let y=grid[0].length
    const dp=new Array(y+1).fill(0)
    for(let i=y-1;i>=0;i--){
        dp[i]=dp[i+1]+grid[x-1][i]
    }
    dp[y]=Number.MAX_SAFE_INTEGER
    for(let i=x-2;i>=0;i--){
        for(let j=y-1;j>=0;j--){
            dp[j]=grid[i][j]+Math.min(dp[j],dp[j+1])
        }
    }
    return dp[0]
};