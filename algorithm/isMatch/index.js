/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 [0,1] length=3;
 */
 var isMatch = function(s, p) {
    const sArr=s.split('');
    const pArr=p.split('');
    //递归版本
    // function process(index1,index2,arr1,arr2){
    //     if(index1===-1&&index2===-1){
    //         return true;
    //     }
    //     if(index1===-1){
    //         return arr2[index2]==='*'?process(index1,index2-2,arr1,arr2):false;                             
    //     }
    //     if(index2===-1){
    //         return false;
    //     }
    //     if(arr2[index2]==='.'){
    //         return process(index1-1,index2-1,arr1,arr2);
    //     }
    //     if(arr2[index2]==='*'){
    //         return process(index1,index2-2,arr1,arr2)||process(index1,index2-1,arr1,arr2)||((arr1[index1]===arr2[index2-1]||arr2[index2-1]==='.')?process(index1-1,index2,arr1,arr2):false);
    //     }
    //     return (arr1[index1]===arr2[index2])?process(index1-1,index2-1,arr1,arr2):false;
    // }
    // return process(sArr.length-1,pArr.length-1,sArr,pArr);
    //动态规划版本
    const dp=new Array(sArr.length+1).fill(false).map(()=>new Array(pArr.length+1).fill(false));
    dp[0][0]=true;
    for(let i=1;i<=pArr.length;i++){
        if(pArr[i-1]==='*'){
            dp[0][i]=dp[0][i-2];
        }
    }
    for(let i=1;i<=sArr.length;i++){
        for(let j=1;j<=pArr.length;j++){
            if(pArr[j-1]==='.'||pArr[j-1]===sArr[i-1]){
                dp[i][j]=dp[i-1][j-1];
            }
            if(pArr[j-1]==='*'){
                dp[i][j]=dp[i][j-2]||dp[i][j-1]||((pArr[j-2]==='.'||(pArr[j-2]===sArr[i-1]))?dp[i-1][j]:false);
            }
        }
    }
    return dp[sArr.length][pArr.length];
};