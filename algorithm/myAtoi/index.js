/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const sArr=s.split('');
    class Auto{
        num=0;
        isZheng=true;
        state='blank';
        map=function(){
            const map=new Map();
            map.set('blank',['blank','symbol','number','end']);
            map.set('symbol',['end','end','number','end']);
            map.set('number',['end','end','number','end']);
            map.set('end',['end','end','end','end']);
            return map;
        }();
        getCol(str){
            if(str===' '){
                return 0;
            }else if(str==='-'||str==='+'){
                return 1;
            }else if(str>='0'&&str<='9'){
                return 2;
            }else{
                return 3;
            }
        }
        get(str){
            this.state=this.map.get(this.state)[this.getCol(str)];
            console.log(this.state);
            if(this.state==='symbol'){
                if(str==='-'){
                    this.isZheng=false;
                }
            }else if(this.state==='number'){
                if(str>='0'&&str<='9'){
                    let cur=this.num*10+(str-0);
                    this.num=this.isZheng?Math.min(cur,2**31-1):Math.min(cur,2**31);
                }
            }
        }
    }
    const auto=new Auto();
    for(let i=0;i<sArr.length;i++){
        auto.get(sArr[i]);
    }
    return auto.isZheng?auto.num:-auto.num;
};
console.log(myAtoi("+-12"));