/**
 Do not return anything, modify board in-place instead.
 */
 function solve(board: string[][]): void {
    const l1=board.length
    const l2=board[0].length
    function infect(x:number,y:number){
        if(x<0||x>=l1||y<0||y>=l2||board[x][y]!=='O')
            return
        board[x][y]='A'
        infect(x-1,y)
        infect(x+1,y)
        infect(x,y-1)
        infect(x,y+1)
    }
    for(let i=0;i<l2;i++){
        if(board[0][i]==='O'){
            infect(0,i)
        }
        if(board[l1-1][i]==='O'){
            infect(l1-1,i)
        }
    }
    for(let i=0;i<l1;++i){
        if(board[i][0]==='O'){
            infect(i,0)
        }
        if(board[i][l2-1]==='O'){
            infect(i,l2-1)
        }
    }
    for(let i=0;i<l1;++i){
        for(let j=0;j<l2;++j){
            board[i][j]=board[i][j]==='A'?'O':'X'
        }
    }
};
