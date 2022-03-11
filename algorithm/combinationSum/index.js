/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    function process(l,candidates,rest,result,arr){
        if(rest===0){
            result.push(arr)
            return
        }
        if(l===candidates.length){
            if(rest===0){
                result.push(arr)
                return
            }
        }
        const newArr=[...arr]
        for(let i=0;rest-i*candidates[l]>=0;i++){
            if(i!==0){
                newArr.push(candidates[l])
            }
            process(l+1,candidates,rest-i*candidates[l],result,newArr)
        }
    }
    const result=[]
    const arr=[]
    process(0,candidates,target,result,arr)
    return result
    // function process(l,rest){
    //     if(rest===0){
    //         return [[]]
    //     }
    //     if(l===candidates.length){
    //         if(rest===0){
    //             return [[]]
    //         }
    //         return null
    //     }
    //     let curr=[]
    //     let back=null
    //      for(let i=0;rest-i*candidates[l]>=0;i++){
    //          if(i!==0){
    //              curr.push(candidates[l])
    //          }
    //          let temp=process(l+1,rest-i*candidates[l])
    //          if(temp!==null){
    //              temp.forEach(e=>e.push(...curr))
    //              if(back===null){
    //                  back=[...temp]
    //              }else{
    //                  back.push(...temp)
    //              }
    //          }
    //      }
    //      return back
    // }
    // let result=process(0,target)
    // return result===null||result[0].length===0?[]:result
    // const dp=new Array(target+1)
    // const l=candidates.length
    // for(let i=0;i<=target;i++){
    //     dp[i]=new Array(l+1)
    // }
    // for(let i=0;i<=target;i++){
    //     for(let j=0;j<=l;j++){
    //         dp[i][j]=[]
    //     }
    // }
    // for(let j=0;j<=l;j++){
    //     dp[0][j]=[[]]
    // }
    // for(let col=l-1;col>=0;col--){
    //     for(let row=1;row<=target;row++){
    //         let next=dp[row][col+1]
    //         let temp=[]
    //         if(next.length){
    //             temp.push(...next)
    //         }
    //         if(row-candidates[col]>=0){
    //             let last=dp[row-candidates[col]][col]
    //             if(last.length){
    //                 temp.push(...(last.map(e=>[...e,candidates[col]])))
    //             }
    //         }
    //         if(temp.length){
    //             dp[row][col]=temp
    //         }
    //     }
    // }
    // return dp[target][0]
};