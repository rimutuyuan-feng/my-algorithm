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
 var reverseKGroup = function(head, k) {
    if(k===1){
        return head
    }
    function reverse(pre,head,end){
        const newEnd=head
        pre.next=end
        let temp=head.next
        while(head!==end){
            let next=temp.next
            temp.next=head
            head=temp
            temp=next
        }
        newEnd.next=temp
        return newEnd
    }
    const preHead=new ListNode()
    preHead.next=head
    let count=1
    let cur=head
    let tempPre=preHead
    while(cur!==null){
        if(count===k){
            let end=cur
            cur=cur.next
            count=1
            tempPre=reverse(tempPre,head,end)
        }else if(count===1){
            head=cur
            cur=cur.next
            count++
        }else{
            cur=cur.next
            count++
        }
    }
    return preHead.next   
};