/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if(numRows===1){
        return [[1]]
    }
    if(numRows===2){
        return [[1],[1,1]]
    }
    const result=[[1],[1,1]]
    for(let i=2;i<numRows;++i){
        result[i]=new Array(i+1).fill(1)
        for(let j=1;j<i;++j){
            result[i][j]=result[i-1][j-1]+result[i-1][j]
        }
    }
    return result
};