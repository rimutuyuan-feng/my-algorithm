/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length===0){
        return 0
    }
    function swap(index1,index2,arr){
        let temp=arr[index1]
        arr[index1]=arr[index2]
        arr[index2]=temp
    }
    let dupS=1
    let lastNum=nums[0]
    let s=1
    while(s<nums.length){
        if(nums[s]>lastNum){
            lastNum=nums[s]
            if(dupS<s){
                swap(dupS,s,nums)
            }
            dupS++
        }
        s++
    }
    return dupS
};