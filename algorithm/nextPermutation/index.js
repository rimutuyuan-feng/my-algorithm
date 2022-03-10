/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    if(nums.length<=1){
        return nums
    }
    function swap(a,b,arr){
        let c=arr[a]
        arr[a]=arr[b]
        arr[b]=c
    }
    let notMax=nums.length-1
    let needSwap=nums.length-1
    while(notMax>0&&needSwap>0){
        if(nums[notMax-1]>=nums[notMax]){
            notMax--
        }else if(nums[needSwap]<=nums[notMax-1]){
            needSwap--
        }else{
            break
        }
    }
    if(notMax){
        swap(notMax-1,needSwap,nums)
    }
    needSwap=nums.length-1
    while(notMax<needSwap){
        swap(notMax,needSwap,nums)
        notMax++
        needSwap--
    }
    return nums
     
};