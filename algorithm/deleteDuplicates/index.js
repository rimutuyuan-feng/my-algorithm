/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(head===null){
        return head
    }
    let cur=head
    let last=new ListNode()
    head=last
    let isDup=false
    while(cur.next!==null){
        if(cur.val===cur.next.val){
            isDup=true
        }else{
            if(!isDup){
                last.next=cur
                last=last.next
            }
            isDup=false
        }
        cur=cur.next
    }
    if(!isDup){
        last.next=cur
        last=last.next
    }
    last.next=null
    return head.next
};