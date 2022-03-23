/**
 * @param {number} n
 * @return {number[]}
 */
 var grayCode = function(n) {
    const result=[0,1]
    for(let i=2;i<=n;i++){
        for(let j=result.length-1;j>=0;j--){
            result.push(result[j]+2**(i-1))
        }
    }
    return result
};