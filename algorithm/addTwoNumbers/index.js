/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry=0;
    const l3=new ListNode();
    let cur=l3;
    while(l1!==null||l2!==null){
        if(l1!==null&&l2!==null){
            cur.val=(l1.val+l2.val+carry)%10;
            carry=(l1.val+l2.val+carry)>9?1:0;
            l1=l1.next;
            l2=l2.next;
        }else{
            let noNull=l1===null?l2:l1;
            if(carry===0){
                cur.val=noNull.val;
                cur.next=noNull.next;
                break;
            }else{
                cur.val=(noNull.val+carry)%10;
                carry=(noNull.val+carry)>9?1:0;
                l1=noNull.next;
                l2=null;
            }
        }
        if(l1!==null||l2!==null){
            cur.next=new ListNode();
            cur=cur.next;
        }
    }
    if(carry===1){
        cur.next=new ListNode(1);
    }
    return l3;
    
};