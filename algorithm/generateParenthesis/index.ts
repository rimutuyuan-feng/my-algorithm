/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    if(n===0){
        return []
    }
    const dp=new Array(n+1).fill([]).map(()=>new Array(n+1).fill([]))
    for(let i=0;i<dp.length;i++){
        for(let j=0;j<dp[0].length;j++){
            dp[i][j]=[]
        }
    }
    dp[0][0]=['']
    dp[1][1]=['()']
    dp[0][1]=dp[1][1]
    for(let col=2;col<=n;col++){
        let temp=[];
        for(let row=n;row>=0;row--){
            if(col>=row){
                if(row===0){
                    dp[row][col]=temp;
                }else{
                    if(row===col){
                        dp[row][col]=dp[0][row-1].map((val)=>`(${val})`)
                    }else{
                        let temp1=dp[row][row]
                        let temp2=dp[0][col-row];

                        for(let i=0;i<temp1.length;i++){
                            for(let j=0;j<temp2.length;j++){
                                dp[row][col].push(temp1[i]+temp2[j]);
                            }
                        }
                    }
                    
                    
                }
                temp=[...temp,...dp[row][col]]
            }
            
        }
    }
    return dp[0][n]
};