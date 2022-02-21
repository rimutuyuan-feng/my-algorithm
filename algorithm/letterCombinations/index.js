/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(digits.length===0){
        return [];
    }
    const map={'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'};
    function process(curr,str){
        if(curr===digits.length){
            result.push(str);
            return;
        }
        for(const value of map[digits[curr]]){
            process(curr+1,str+value);
        }
    }
    const result=[];
    process(0,'');
    return result;
};