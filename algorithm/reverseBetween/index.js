/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    // if(left===right){
    //     return head
    // }
    // const preHead=new ListNode(0,head)
    // let l1=null
    // let l2=preHead
    // let l3=null
    // let start=null
    // for(let count=0;count<=right;++count){
    //     if(count<left-1){
    //         l2=l2.next
    //     }else if(count===left-1){
    //         start=l2
    //         l1=l2
    //         l2=l2.next
    //     }else{
    //         l3=l2.next
    //         l2.next=l1
    //         l1=l2
    //         l2=l3
    //     }
    // }
    // let temp=start.next
    // start.next=l1
    // temp.next=l2
    // return preHead.next
    //穿针引线
    const preHead=new ListNode(0,head)
    let pre=preHead
    let cur=null
    let next=null
    for(let i=0;i<left-1;++i){
        pre=pre.next
    }
    cur=pre.next
    for(let i=0;i<right-left;++i){
        next=cur.next
        cur.next=next.next
        next.next=pre.next
        pre.next=next
    }
    return preHead.next
};