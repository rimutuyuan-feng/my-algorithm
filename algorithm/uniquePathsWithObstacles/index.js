/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    let x=obstacleGrid.length
    let y=obstacleGrid[0].length
    const dp=new Array(y).fill(1)
    dp[y-1]=obstacleGrid[x-1][y-1]?0:1
    for(let i=y-2;i>=0;i--){
        if(obstacleGrid[x-1][i]){
            dp[i]=0
        }else{
            dp[i]=dp[i+1]
        }
    }
    for(let i=x-2;i>=0;i--){
        for(let j=y-1;j>=0;j--){
            if(obstacleGrid[i][j]){
                dp[j]=0
            }else{
                dp[j]=j+1<y?dp[j]+dp[j+1]:dp[j]
            }
        }
    }
    return dp[0]
};