/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if(nums.length<3){
        return [];
    }
    const result=[];
    nums.sort((a,b)=>a-b);
    let i=0;
    while(i<nums.length-2){
        if(i===0||nums[i]!==nums[i-1]){
            let k=nums.length-1;
            let j=i+1;
            while(j<k){
                if(j===i+1||nums[j]!==nums[j-1]){
                    while(nums[i]+nums[j]+nums[k]>0&&k>j+1){
                        k--;
                    }
                    if(nums[i]+nums[j]+nums[k]===0){
                        result.push([nums[i],nums[j],nums[k]]);
                        k--;
                    }
                }
                j++;
                
            }
        }
        i++;
        
    }
    return result;
};