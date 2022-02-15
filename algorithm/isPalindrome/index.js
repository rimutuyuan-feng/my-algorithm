/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    if(x<10){
        return true;
    }
    if(x%10===0){
        return false;
    }
    let reversal=0;
    while(x>reversal){
        reversal=reversal*10+x%10;
        x=Math.floor(x/10);
    }
    if(x===reversal){
        return true;
    }else{
        if(x===Math.floor(reversal/10)){
            return true;
        }else{
            return false;
        }
    }
};