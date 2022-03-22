/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length<=2){
        return nums.length
    }
    let left=0
    let cur=1
    let count=1
    let length=nums.length
    while(cur<length){
        if(nums[cur]===nums[left]){
            count++
        }else{
            count=1
        }
        if(count<=2){
            swap(++left,cur)
        }
        cur++
    }
    function swap(a,b){
        let temp=nums[a]
        nums[a]=nums[b]
        nums[b]=temp
    }
    return left+1
};