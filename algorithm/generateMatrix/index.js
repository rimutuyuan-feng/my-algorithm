/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    const result=new Array(n).fill(0).map(val=>new Array(n))
    function process(l,x,y,count){
        if(l===0){
            return
        }
        if(l===1){
            result[x][y]=count
            return
        }
        for(let i=0;i<l-1;i++){
            result[x][y+i]=count++
        }
        for(let i=0;i<l-1;i++){
            result[x+i][y+l-1]=count++
        }
        for(let i=0;i<l-1;i++){
            result[x+l-1][y+l-1-i]=count++
        }
        for(let i=0;i<l-1;i++){
            result[x+l-1-i][y]=count++
        }
        return process(l-2,x+1,y+1,count)
    }
    process(n,0,0,1)
    return result
};