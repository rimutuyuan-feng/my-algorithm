/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    function copy(str,value){
        let result='';
        for(let i=0;i<value;i++){
            result=result+str;
        }
        return result;
    }
    function toRoman(index,arr,value){
        if(value<4){
            return copy(arr[index][0],value);
        }
        if(value===4){
            return arr[index][1];
        }
        if(value===9){
            return arr[index][3];         
        }
        return arr[index][2]+copy(arr[index][0],value%5);
    }
     const romanArr=[['I','IV','V','IX'],['X','XL','L','XC'],['C','CD','D','CM']];
     let index=0;
     let result='';
     while(num!==0){
         if(index===3){
             result=copy('M',num%10)+result;
         }else{
             result=toRoman(index++,romanArr,num%10)+result; 
         }
         num=Math.floor(num/10);
     }
     return result;
};