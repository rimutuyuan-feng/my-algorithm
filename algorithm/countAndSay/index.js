/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if(n===1){
        return '1'
    }
    let last='1'
    for(let i=1;i<n;i++){
        let str=''
        let count=0
        let cur='a'
        for(let j=0;j<last.length;j++){
            if(count===0){
                cur=last[j]
                count++
            }else{
                if(cur===last[j]){
                    count++
                }else{
                    str=`${str}${count}${cur}`
                    cur=last[j]
                    count=1
                }
            }
        }
        last=`${str}${count}${cur}`
    }
    return last
}