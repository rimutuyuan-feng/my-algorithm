/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let row=0
    let col=matrix[0].length-1
    let rows=matrix.length
    while(row<rows&&col>=0){
        if(matrix[row][col]<target){
            row++
        }else if(target<matrix[row][col]){
            col--
        }else{
            return true
        }
    }
    return false
};