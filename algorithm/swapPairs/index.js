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
 var swapPairs = function(head) {
    // if(head===null){
    //     return head
    // }
    // const preHead=new ListNode();
    // preHead.next=head;
    // function process(pre,cur,next){
    //     if(pre===null||cur===null||next===null){
    //         return 
    //     }
    //     let temp=next.next;
    //     pre.next=next;
    //     next.next=cur;
    //     cur.next=temp;
    //     if(temp!==null&&temp.next!==null){
    //         process(cur,temp,temp.next)
    //     }
    // }
    // process(preHead,head,head.next);
    // return preHead.next;
    const preHead=new ListNode();
    preHead.next=head;
    let cur=preHead;
    while(cur.next!==null&&cur.next.next!==null){
        let node1=cur.next;
        let node2=node1.next;
        let node3=node2.next;
        cur.next=node2
        node2.next=node1
        node1.next=node3
        cur=node1
    }
    return preHead.next
};