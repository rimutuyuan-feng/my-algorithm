/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // let result=Number.MIN_SAFE_INTEGER
    // let count=0
    // const length=nums.length
    // for(let i=0;i<length;i++){
    //     count+=nums[i]
    //     result=Math.max(result,count)
    //     if(count<0){
    //         count=0
    //     }
    // }
    // return result
    //分治
    function Info(max,ll,rr,sum){
            this.max=max
            this.ll=ll
            this.rr=rr
            this.sum=sum
    }
    function creatInfo(leftInfo,rightInfo){
        let ll=Math.max(leftInfo.ll,leftInfo.sum+rightInfo.ll)
        let rr=Math.max(rightInfo.rr,rightInfo.sum+leftInfo.rr)
        let max=Math.max(leftInfo.max,rightInfo.max,leftInfo.rr+rightInfo.ll)
        return new Info(max,ll,rr,leftInfo.sum+rightInfo.sum)
    }
    function getInfo(l,r){
        if(l===r){
            return new Info(nums[l],nums[l],nums[l],nums[l])
        }
        let mid=l+((r-l)>>1)
        let leftInfo=getInfo(l,mid)
        let rightInfo=getInfo(mid+1,r)
        return creatInfo(leftInfo,rightInfo)
    }
    return getInfo(0,nums.length-1).max
};