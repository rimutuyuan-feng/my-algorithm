/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    let l=nums.length
    const result=[]
    nums.sort((a,b)=>a-b)
    for(let mask=0;mask<(1<<l);++mask){
        let temp=[]
        let flag=true
        for(let i=0;i<l;++i){
            if(mask&(1<<i)){
                if(i>0&&((mask&(1<<i-1))===0&&nums[i]===nums[i-1])){
                    flag=false
                    break
                }
                temp.push(nums[i])
            }
        }
        if(flag){
            result.push(temp)
        }
    }
    return result
};