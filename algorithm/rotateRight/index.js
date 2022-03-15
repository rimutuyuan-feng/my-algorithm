/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if(head===null){
        return head
    }
    let end=head
    let length=1
    while(end.next!==null){
        end=end.next
        length++
    }
    end.next=head
    let index=length-(k%length)
    for(let i=1;i<=index;i++){
        head=head.next
        end=end.next
    }
    end.next=null
    return head
};