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
    while(cur.next!==null){
        let temp=cur.next
        if(cur.val===temp.val){
            cur.next=temp.next
        }else{
            cur=cur.next
        }
    }
    return head
};