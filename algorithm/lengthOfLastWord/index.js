/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let count=0
    let i=s.length-1
    while(i>=0){
        if(s[i]===' '&&!count){
            i--
        }else if(s[i]!==' '){
            i--
            count++
        }else{
            break
        }
    }
    return count
};