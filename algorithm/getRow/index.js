/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if(rowIndex===0){
        return [1]
    }
    if(rowIndex===1){
        return [1,1]
    }
    const result=[1,1]
    for(let i=2;i<=rowIndex;++i){
        let curr=1
        for(let j=1;j<i;++j){
            let temp=result[j]
            result[j]+=curr
            curr=temp
        }
        result.push(1)
    }
    return result
};