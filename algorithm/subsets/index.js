/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    // const result=[]
    // const length=nums.length
    // function process(l,arr){
    //     if(l===length){
    //         result.push(arr)
    //         return
    //     }
    //     process(l+1,arr)
    //     arr.push(nums[i])
    //     process(l+1,arr)
    //     arr.pop()
    // }
    // process(0,[])
    // return result
    const result=[]
    let n=nums.length
    for(let mask=0;mask<(1<<n);++mask){
        let temp=mask
        let index=0
        let tempArr=[]
        while(temp>0){
            if(temp&1){
                tempArr.push(nums[index])
            }
            temp>>=1
            ++index
        }
        result.push(tempArr)
    }
    return result
};