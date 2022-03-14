/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const length=nums.length
    const result=[]
    result.push(nums)
    function process(l,swapNums){
        if(l===1){
            return
        }
        for(let i=length-l;i<length;i++){
            swap(length-l,i,swapNums)
            if(i!==length-l){
                result.push([...swapNums])
            }    
            process(l-1,swapNums)
            swap(length-l,i,swapNums)
        }
    }
    function swap(a,b,arr){
        let temp=arr[a]
        arr[a]=arr[b]
        arr[b]=temp
    }
    process(length,nums)
    return result
};