/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let result=nums.length
    let l=0
    let r=nums.length-1
    while(l<=r){
        let mid=l+((r-l)>>1)
        if(nums[mid]>=target){
            result=mid
            r=mid-1
        }else{
            l=mid+1
        }
    }
    return result
};