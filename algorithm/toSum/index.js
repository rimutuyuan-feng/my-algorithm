/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const help=new Map();
    for(let i=0;i<nums.length;i++){
        if(help.has(nums[i])){
            help.get(nums[i]).push(i);
        }else{
            help.set(nums[i],[i]);
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]*2===target){
            if(help.get(nums[i]).length>1){
                return [help.get(nums[i])[0],help.get(nums[i])[1]];
            }
        }else{
            if(help.has(target-nums[i])){
                return [i,help.get(target-nums[i])[0]];
            }
        }
    }
};