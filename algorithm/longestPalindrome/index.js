/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const arr=(`#${s.split('').join('#')}#`).split('');
    let maxL=-Number.MAX_VALUE;
    let maxIndex=-1;
    //半径能达到最右侧点的索引
    let index=-1;
    //最大半径的下一位
    let r=-1;
    //保存回文串半径
    const rArr=[];
    for(let i=0;i<arr.length;i++){
        let left=i;
        let right=i;
        //能跳过的半径
        let checked=Math.min(rArr[2*index-i],r-i);
        //跳过判断
        if(checked>0){
            left=left-checked;
            right=right+checked
        }
        //继续做判断
        while(left>-1&&right<arr.length){
            if(arr[left]!==arr[right]){
                break;
            }
            left--;
            right++;
        }
        if(right>r){
            r=right;
            index=i;
        }
        if(right-i>maxL){
            maxL=right-i;
            maxIndex=i;
        }
        rArr.push(right-i);
    }
    let result='';
    for(let i=maxIndex-maxL+2;i<maxL+maxIndex;i+=2){
        result=result+arr[i];
    }
    return result;
};