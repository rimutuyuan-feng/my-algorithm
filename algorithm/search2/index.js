/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
    let left=0
    let right=nums.length-1
    while(left<=right){
        
        if(nums[right]===nums[left]){
            if(nums[right]===target||nums[left]===target){
                return true
            }else{
                left++
                right--
            }
        }else{
            let mid=left+((right-left)>>1)
            if(nums[mid]===target){
                return true
            }
            //目标在右边,1.右边是升序的,right>mid则mid<t<right,2.右边是非升序的，mid>right则t>mid或t<=right
            if((target>nums[mid]&&target<=nums[right])||(nums[mid]>nums[right]&&(target>nums[mid]||target<=nums[right]))){
                left=mid+1
            }else{
                right=mid-1
            }
        }
        
    }
    return false
};