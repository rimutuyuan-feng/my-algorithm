/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    if(num1==='0'||num2==='0'){
        return '0'
    }
    const l1=num1.length
    const l2=num2.length 
    const help=new Array(l1+l2).fill(0)
    for(let i=l1-1;i>=0;i--){
        for(let j=l2-1;j>=0;j--){
            help[j+i+1]+=(num1[i]-0)*(num2[j]-0)
            if(help[j+i+1]>=10){
                help[i+j]+=Math.floor(help[i+j+1]/10)
                help[i+j+1]=help[i+j+1]%10
            }
        }
    }
    if(!help[0]){
        help.splice(0,1)
    }
    return help.join('')

};