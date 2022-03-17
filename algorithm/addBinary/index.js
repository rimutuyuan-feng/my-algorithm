/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let carry=0
    let al=a.length
    let bl=b.length
    let max=Math.max(al,bl)
    let result=''
    for(let i=0;i<max;i++){
        carry+=i<al?a[al-1-i]-0:0
        carry+=i<bl?b[bl-1-i]-0:0
        result=`${carry%2}${result}`
        carry=Math.floor(carry/2)
    }
    return carry?`1${result}`:result
};