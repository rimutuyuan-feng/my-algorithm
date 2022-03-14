/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    function swap(x1,y1,x2,y2,count){
        let temp=matrix[x1][y1+count]
        matrix[x1][y1+count]=matrix[x2-count][y1]
        matrix[x2-count][y1]=matrix[x2][y2-count]
        matrix[x2][y2-count]=matrix[x1+count][y2]
        matrix[x1+count][y2]=temp
    }
    const length=matrix.length
    let x1=0
    let y1=0
    let x2=length-1
    let y2=length-1
    while(x1<x2){
        for(let i=0;i<x2-x1;i++){
            swap(x1,y1,x2,y2,i)
        }
        x1++
        y1++
        x2--
        y2--
    }
    return matrix
};