/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length<=1){
        return intervals
    }
    const result=[]
     intervals.sort((a,b)=>a[0]-b[0])
     let start=intervals[0][0]
     let end=intervals[0][1]
     for(let i=1;i<intervals.length;i++){
         if(intervals[i][0]<=end){
             end=Math.max(end,intervals[i][1])
         }else{
             result.push([start,end])
             start=intervals[i][0]
             end=intervals[i][1]
         }
     }
     result.push([start,end])
     return result
};