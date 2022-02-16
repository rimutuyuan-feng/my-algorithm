/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
        let result=0;
        let left=0;
        let right=height.length-1;
        while(left<right){
            result=result>(right-left)*Math.min(height[right],height[left])?result:((right-left)*Math.min(height[right],height[left]));
            if(height[left]>height[right]){
                right--;
            }else{
                left++;
            }
        }
        return result;
    };