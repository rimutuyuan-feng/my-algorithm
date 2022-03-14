/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    function process(l,swapNums){
        if(l===1){
            return
        }
        const set=new Set()
        for(let i=length-l;i<length;i++){
            if(!set.has(nums[i])){
                set.add(nums[i])
                swap(length-l,i,swapNums)
                if(i!==length-l){
                    result.push([...swapNums]) 
                }       
                process(l-1,swapNums)
                swap(length-l,i,swapNums)
            }
        }
    }
    function swap(a,b,arr){
        let temp=arr[a]
        arr[a]=arr[b]
        arr[b]=temp
    }
    const result=[]
    result.push(nums)
    const length=nums.length
    process(length,nums)
    return result
};