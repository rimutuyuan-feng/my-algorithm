/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let l=nums1.length+nums2.length;
    //有一个中位数
        let first=hasMedian(nums1,nums2,Math.ceil(l/2)-1);
        first=first===null?hasMedian(nums2,nums1,Math.ceil(l/2)-1):first;
        if(l%2===1){
            return first;
        }
        let second=hasMedian(nums1,nums2,Math.ceil(l/2));
        second=second===null?hasMedian(nums2,nums1,Math.ceil(l/2)):second;
        return (first+second)/2;
    //某个位数是否在一个数组中
    function hasMedian(arr1,arr2,beforeNums){
        //中位数在nums1上
        let left=0;
        let right=arr1.length-1;
        while(left<=right){
            let mid=left+((right-left)>>1);
            let range=getLessIndex(arr1[mid],arr2);
            if((beforeNums-mid)>=range[0]&&(beforeNums-mid)<=range[1]){
                return arr1[mid];
            }else if((beforeNums-mid)<range[0]){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }
        return null;
    }
    //找到有序数组中小于等于num的最接近的index
    function getLessIndex(value,arr){
        if(arr.length<1){
            return [0,0];
        }
        let left=0;
        let right=arr.length-1;
        while(left<right){
            let mid=left+((right-left)>>1);
            if(arr[mid]>=value){
                right=mid;
            }else{
                left=mid+1;
            }
        }
        if(arr[right]>value){
            return[right,right];
        }else if(arr[right]<value){
            return[right+1,right+1];
        }else{
            let temp=right;
            while(temp<arr.length&&arr[temp]===value){
                temp++;
            }
            return[right,temp];
        }
    }
};