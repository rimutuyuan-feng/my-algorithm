/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    nums=nums.sort((a,b)=>a-b);
    const result=[];
    let first=0;
    while(first<nums.length-3){
        if(nums[first-1]!==nums[first]){
            let fourth=nums.length-1;
            while(fourth>first+2){
                if(nums[fourth+1]!==nums[fourth]){
                    let curTarget=target-nums[first]-nums[fourth];
                    let second=first+1;
                    let third=fourth-1;
                    while(second<third){
                        if(nums[second]+nums[third]<curTarget){
                            second++;
                        }else if(nums[second]+nums[third]>curTarget){
                            third--;
                        }else{
                            if((second===first+1||nums[second]!==nums[second-1])){
                                result.push([nums[first],nums[second],nums[third],nums[fourth]]);
                            }
                                second++;
                                third--;
                        }
                    }
                }
                fourth--;
            }
        }
        first++;
    }
    return result;
};