/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    const newStrs=strs.map((value)=>value.split(''));
    let i=0;
    let result='';
    while(true){
        let isBreak=false;
        for(let j=0;j<newStrs.length;j++){
            if(newStrs[j][i]===undefined){
                isBreak=true;
                break;
            }else{
                if(newStrs[j][i]!==newStrs[0][i]){
                    isBreak=true;
                    break;
                }
            }
        }
        if(isBreak){
            break;
        }else{
            result+=newStrs[0][i];
            i++;
        }
    }
    return result;
};