/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length<=1){
        return s.length===0?0:1;
    }
    let result=1;
    const arr=s.split('');
    const help=new Map();
    help.set(arr[0],0);
    arr[0]=1;
    for(let i=1;i<arr.length;i++){
        if(help.has(arr[i])){
            let temp=help.get(arr[i]);
            help.set(arr[i],i);
            arr[i]=Math.min(arr[i-1]+1,i-temp);
        }else{
            help.set(arr[i],i);
            arr[i]=arr[i-1]+1;
        }
        result=Math.max(result,arr[i]);
    }
    return result;
};