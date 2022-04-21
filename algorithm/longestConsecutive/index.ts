function longestConsecutive(nums: number[]): number {
    let result=0
    const help:Set<number>=new Set()
    nums.forEach(num=>{
        help.add(num)
    })
    nums.forEach(num=>{
        if(!help.has(num-1)){
            let count=1
            while(help.has(++num)){
                ++count
            }
            result=Math.max(result,count)
        }
    })
    return result
};