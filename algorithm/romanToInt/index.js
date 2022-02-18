/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanValue=new Map();
    romanValue.set('I',1);
    romanValue.set('V',5);
    romanValue.set('X',10);
    romanValue.set('L',50);
    romanValue.set('C',100);
    romanValue.set('D',500);
    romanValue.set('M',1000);
    const romanArr=s.split('');
    let result=0;
    let lastValue=0;
    for(let i=romanArr.length-1;i>=0;i--){
        if(romanValue.get(romanArr[i])>=lastValue){
            result+=romanValue.get(romanArr[i]);
        }else{
            result-=romanValue.get(romanArr[i]);
        }
        lastValue=romanValue.get(romanArr[i]);
    }
    return result;
    };