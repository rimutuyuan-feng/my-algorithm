/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    let l=s.length
    const result=[]
    function process(rest,index,str){
        if(l-index<rest||l-index>4*rest){
            return
        }
        if(index===l){
            result.push(str)
            return
        }
        if(rest===0&&index!==l){
            return
        }
        if(s[index]==='0'){
            str+=rest===1?s[index]:`${s[index]}.`
            process(rest-1,index+1,str)
        }else{
            let temp=''
            for(let i=0;i<3&&i+index<l;++i){
                temp+=s[index+i]
                if(255-temp>=0){
                    process(rest-1,index+i+1,rest===1?str+temp:str+temp+'.')
                }
            }
        }
    }
    process(4,0,'')
    return result

};