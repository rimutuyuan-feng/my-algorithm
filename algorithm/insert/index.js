/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {

    let l=0
    let r=intervals.length-1
    let minIndex=-1
    while(l<=r){
        let mid=l+((r-l)>>1)
        if(intervals[mid][1]<newInterval[0]){
            minIndex=mid
            l=mid+1
        }else{
            r=mid-1
        }
    }
    l=0
    r=intervals.length-1
    let maxIndex=intervals.length
    while(l<=r){
        let mid=l+((r-l)>>1)
        if(intervals[mid][0]>newInterval[1]){
            maxIndex=mid
            r=mid-1
        }else{
            l=mid+1
        }
    }
    let start=minIndex+1===intervals.length?newInterval[0]:Math.min(newInterval[0],intervals[minIndex+1][0])
    let end=maxIndex-1===-1?newInterval[1]:Math.max(newInterval[1],intervals[maxIndex-1][1])
    intervals.splice(minIndex+1,maxIndex-minIndex-1,[start,end])
    return intervals
};