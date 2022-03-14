/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let x1=0
    let y1=0
    let x2=matrix.length-1
    let y2=matrix[0].length-1
    const result=[]
    while(x1<=x2&&y1<=y2){
        if(x1===x2&&y1===y2){
            result.push(matrix[x1][y1])
        }else if(x1===x2){
            for(let i=y1;i<=y2;i++){
                result.push(matrix[x1][i])
            }
        }else if(y1===y2){
            for(let i=x1;i<=x2;i++){
                result.push(matrix[i][y1])
            }
        }else{
            for(let i=y1;i<y2;i++){
                result.push(matrix[x1][i])
            }
            for(let i=x1;i<x2;i++){
                result.push(matrix[i][y2])
            }
            for(let i=y2;i>y1;i--){
                result.push(matrix[x2][i])
            }
            for(let i=x2;i>x1;i--){
                result.push(matrix[i][y1])
            }
        }
        
        x1++
        y1++
        x2--
        y2--
    }
    return result
};