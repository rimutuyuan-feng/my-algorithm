/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let left=0
    let right=nums.length-1
    let cur=0
    while(cur<=right){
        if(nums[cur]===0){
            swap(left++,cur++)
        }else if(nums[cur]===2){
            swap(right--,cur)
        }else{
            cur++
        }
    }
    function swap(a,b){
        let temp=nums[a]
        nums[a]=nums[b]
        nums[b]=temp
    }
    return nums
};