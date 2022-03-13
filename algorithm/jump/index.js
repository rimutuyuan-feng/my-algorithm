/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    //递归版
    // function process(index){
    //     if(index===nums.length-1){
    //         return 0
    //     }
    //     let minStep=Number.MAX_SAFE_INTEGER
    //     for(let i=1;index+i<=nums.length-1&&i<=nums[index];i++){
    //            minStep=Math.min(minStep,process(index+i))
    //     }
    //     return 1+minStep
    // }
    // return process(0)
    //动态规划
    // const dp=new Array(nums.length).fill(0)
    // for(let i=nums.length-2;i>=0;i--){
    //     let minStep=Number.MAX_SAFE_INTEGER
    //     for(let j=1;i+j<=nums.length-1&&j<=nums[i];j++){
    //         minStep=Math.min(minStep,dp[j+i])
    //     }
    //     dp[i]=1+minStep
    // }
    // return dp[0]
    //动态规划plus
    // class ListNode{
    //     constructor(step,index){
    //         this.step=step
    //         this.index=index
    //         this.next=null
    //     }
    // }
    // const head=new ListNode(0,nums.length-1)
    // let result=0
    // for(let i=nums.length-2;i>=0;i--){
    //     let cur=head
    //     while(cur!==null){
    //         if(i+nums[i]>=cur.index){
    //             result=cur.step+1
    //             cur.next=new ListNode(result,i)

    //             break
    //         }
    //         cur=cur.next
    //     }
    // }
    // return result
    //贪心
    let end=0
    let step=0
    let position=0
    for(let i=0;i<nums.length-1;i++){
        position=Math.max(position,i+nums[i])
        if(i===end){
            step++
            end=position
            if(end>=nums.length-1){
                break           
            }
        }
    }
    return step
};