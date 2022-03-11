/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    const row=new Array(9)
    const col=new Array(9)
    const jing=new Array(3).fill(0).map(value=>new Array(3))
    for(let i=0;i<9;i++){
        row[i]=new Set()
        col[i]=new Set()
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            jing[i][j]=new Set()
        }
    }
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]!=='.'){
                if(row[i].has(board[i][j])||col[j].has(board[i][j])||jing[Math.floor(i/3)][Math.floor(j/3)].has(board[i][j])){
                    return false
                }else{
                    row[i].add(board[i][j])
                    col[j].add(board[i][j])
                    jing[Math.floor(i/3)][Math.floor(j/3)].add(board[i][j])
                }
            }
        }
    }
    return true
};