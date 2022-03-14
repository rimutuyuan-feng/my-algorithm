/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let border=0
    let position=0
    for(let i=0;i<nums.length;i++){
        position=Math.max(position,i+nums[i])
        if(i===border){
            border=position
        }
        if(i>border){
            return false
        }       
    }
    return true
};