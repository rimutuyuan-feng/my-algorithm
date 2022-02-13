/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows===1){
        return s;
    }
    const arr=s.split('');
    const oneNums=2*(numRows-1);
    const cols=Math.floor((arr.length-1)/oneNums);
    const result=[];
    for(let i=0;i<numRows;i++){
        for(let j=0;j<=cols;j++){
            if(j*oneNums+i<arr.length){
                result.push(arr[j*oneNums+i]);
            }
            if(i!==0&&i!==numRows-1&&((j+1)*oneNums-i<arr.length)){
                result.push(arr[(j+1)*oneNums-i]);
            }
        }
    }
    return result.join('');
};