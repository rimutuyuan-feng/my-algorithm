function isPalindrome(s: string): boolean {
    function style(str:string):string|null{
        if((str.charCodeAt(0)<=57&&str.charCodeAt(0)>=48)||(str.charCodeAt(0)<=122&&str.charCodeAt(0)>=97)){
            return str
        }else if(str.charCodeAt(0)<=90&&str.charCodeAt(0)>=65){
            return str.toLowerCase()
        }else{
            return null
        }
    }
   let left=0
   let right=s.length-1
   while(left<=right){
       let leftStyled=style(s[left])
       let rightStyled=style(s[right])
       if(leftStyled&&rightStyled){
           if(leftStyled!==rightStyled){
               return false
           }
           ++left
           --right
           continue
       }
       if(!leftStyled){
           ++left
       }
       if(!rightStyled){
           --right
       }
   }
   return true
    
};