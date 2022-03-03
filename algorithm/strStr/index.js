/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length===0){
        return 0
    }
    if(haystack.length<needle.length){
        return -1
    }
    function getHelp(str){
        const result=[]
        result[0]=-1
        if(str.length===1){
            return result
        }
        result[1]=0
        if(str.length===2){
            return result
        }
        let index=2
        let pre=result[index-1]
        while(index<str.length){
            if(str[index-1]===str[pre]){
                result[index++]=pre+1
                pre=result[index-1]
            }else if(pre!==0){
                pre=result[pre]
            }else{
                result[index++]=0
            }
        }
        return result
    }
    const help=getHelp(needle)
    let s1=0
    let s2=0
    while(s1<haystack.length&&s2<needle.length){
        if(haystack[s1]===needle[s2]){
            s1++
            s2++
        }else if(s2!==0){
            s2=help[s2]
        }else{
            s1++
        }
    }
    return s2===needle.length?s1-s2:-1
};