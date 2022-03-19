/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    function ListNode(value,lNode,nNode){
        this.value=value===undefined?'':value
        this.next=nNode===undefined?null:nNode
        this.last=lNode===undefined?null:lNode
    }
    let head=new ListNode()
    let cur=head
    let str=''
    for(let i=1;i<path.length;i++){
        if(path[i]==='/'){
            if(str!==''){
                if(str==='.'){

                }else if(str==='..'){
                    if(cur.last!==null){
                        cur=cur.last
                        cur.next=null
                    }
                    
                }else{
                    cur.next=new ListNode(str,cur)
                    cur=cur.next
                }
            }
            str=''
        }else{
            str+=path[i]
        }
    }
    if(str!==''){
        if(str!==''){
            if(str==='.'){

            }else if(str==='..'){
                if(cur.last!==null){
                    cur=cur.last
                    cur.next=null
                }
                    
            }else{
                cur.next=new ListNode(str,cur)
                cur=cur.next
            }
        }
    }
    let result=''
    head=head.next
    while(head!==null){
        result+=`/${head.value}`
        head=head.next
    }
    return result===''?`/`:result
};