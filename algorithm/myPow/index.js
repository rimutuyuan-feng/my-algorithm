/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    // if(n<0){
    //     return myPow(1/x,-n)
    // }
    // if(n===0){
    //     return 1
    // }
    // if(n===1){
    //     return x
    // }
    // return myPow(x*x,n>>>1)*myPow(x,n%2)
let absN=Math.abs(n)
let count=n>0?x:1/x
let result=1
while(absN>0){
    if(absN&1){
        result*=count
    }
    count*=count
    absN>>>=1
}
return result
};