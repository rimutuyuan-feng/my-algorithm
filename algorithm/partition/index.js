/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    const samllHead=new ListNode()
    let samll=samllHead
    const bigHead=new ListNode()
    let big=bigHead
    let cur=head
    while(cur!==null){
        if(cur.val<x){
            samll.next=cur
            samll=samll.next
        }else{
            big.next=cur
            big=big.next
        }
        cur=cur.next
    }
    samll.next=bigHead.next
    big.next=null
    return samllHead.next
};