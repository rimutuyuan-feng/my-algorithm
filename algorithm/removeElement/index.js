/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    function swap(index1,index2){
        let temp=nums[index1]
        nums[index1]=nums[index2]
        nums[index2]=nums[index1]
    }
    let s=0
    let e=nums.length
    while(s<e){
        if(nums[s]===val){
            swap(s,e-1)
            e--
        }else{
            s++
        }
    }
    return e
};