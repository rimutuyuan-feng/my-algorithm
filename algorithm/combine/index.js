/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    function process(rest,arr){
        if(arr.length===k){
            result.push(arr)
            return
        }
        if(rest===0||rest+arr.length<k){
            return
        }
        process(rest-1,[...arr])
        process(rest-1,[...arr,rest])
    }
    const result=[]
    process(n,[])
    return result
};