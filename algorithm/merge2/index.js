/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let l=m+n-1
    m--
    n--
    while(m>=0&&n>=0){
        if(nums1[m]<nums2[n]){
            nums1[l--]=nums2[n--]
        }else{
            nums1[l--]=nums1[m--]
        }
    }
    if(m<0){
        while(n>=0){
            nums1[l--]=nums2[n--]
        }
    }
    return nums1
};