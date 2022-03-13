/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    const map=new Map()
    for(let i=candidates.length-1;i>=0;i--){
        let temp=candidates[i]
        if(map.has(temp)){
            map.set(temp,map.get(temp)+1)
        }else{
            map.set(temp,1)
        }
    }
    candidates=Array.from(map)
    function procee(l,rest,need){
        if(rest===0){
            result.push(need)
            return
        }
        if(l===candidates.length){
            return
        }
        for(let i=0;i<=candidates[l][1]&&rest-i*candidates[l][0]>=0;i++){
            procee(l+1,rest-i*candidates[l][0],[...need,...new Array(i).fill(candidates[l][0])])
        }
    }
    const result=[]
    procee(0,target,[])
    return result
};