/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    function getIndex(nums,target,needSame){
        let result=nums.length
        let l=0
        let r=nums.length
        while(l<=r){
            let mid=l+((r-l)>>1)
            if(nums[mid]>target||(needSame&&nums[mid]===target)){
                result=mid
                r=mid-1
            }else{
                l=mid+1
            }
        }
        return result
    }
    let nearLeft=getIndex(nums,target,true)
    let bigLeft=getIndex(nums,target,false)
    if(nearLeft===bigLeft||bigLeft===0){
        return [-1,-1]
    }
    return [nearLeft,bigLeft-1]
};