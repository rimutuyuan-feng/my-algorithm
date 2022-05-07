function partition(s: string): string[][] {
    if(s.length===1){
        return [[s]]
    }
    
   function process(step:number,parted:string[]){
       if(step===s.length){
           result.push([...parted])
       }
       let temp=''
       for(let i=step;i<s.length;++i){
           temp+=s[i]
           if(isPali(temp)){
               parted.push(temp)
               process(i+1,parted)
               parted.pop()
           }
       }
   }
   function isPali(str:string):boolean{
       let left=0
       let right=str.length-1
       while(left<right){
           if(str[left]!==str[right]){
               return false
           }
           left++
           right--
       }
       return true
   }
   const result:string[][]=[]
   process(0,[])
   return result
};