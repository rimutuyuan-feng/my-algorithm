/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const length1=board.length
    const length2=board[0].length
    const length3=word.length
    const arr=new Array(length1).fill(0).map(val=>new Array(length2).fill(0))
    for(let i=0;i<length1;++i){
        for(let j=0;j<length2;++j){     
            if(process(i,j,0,arr)){
                return true
            }
        }
    }
    function process(x,y,s,coverArr){
        if(s===length3){
            return true
        }
        if(x<0||x===length1||y<0||y===length2||coverArr[x][y]||board[x][y]!==word[s]){
            return false
        }
        coverArr[x][y]=1
        if(process(x+1,y,s+1,coverArr)||process(x-1,y,s+1,coverArr)||process(x,y+1,s+1,coverArr)||process(x,y-1,s+1,coverArr)){
            return true
        }
        coverArr[x][y]=0
        return false
    }
    return false
};