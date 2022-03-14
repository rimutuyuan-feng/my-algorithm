/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    // const sortStr=new Map()
    // strs.forEach((value)=>{
    //     let key=value.split('').sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join('')
    //     if(sortStr.has(key)){
    //         sortStr.get(key).push(value)
    //     }else{
    //         sortStr.set(key,[value])
    //     }
    // })
    // return Array.from(sortStr.values())
    //计数
    const countStr=new Object()
    strs.forEach(value=>{
        const count=new Array(26).fill(0)
        for(let a of value){
            count[a.charCodeAt()-'a'.charCodeAt()]++
        }
        countStr[count]?countStr[count].push(value):countStr[count]=[value]
    })
    return Object.values(countStr)
};