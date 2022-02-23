/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // 实际操作不到链表长度
    // let double=head;
    // let mid=head;
    // let count=1;
    // while(double.next!==null&&double.next.next!==null){
    //     mid=mid.next;
    //     double=double.next.next;
    //     count++;
    // }
    // let all=double.next===null?2*count-1:2*count;
    // if(n===all){
    //     return head.next;
    // }
    // if(all-n<count){
    //     let start=head;
    //     while(all-n-1>0){
    //         start=start.next;
    //         all--;
    //     }
    //     start.next=start.next.next;
    // }else{
    //     let start=mid;
    //     while(all-n-count>0){
    //         mid=mid.next;
    //         all--;
    //     }
    //     mid.next=mid.next.next;
    // }
    // return head;
    //递归算法(原理：栈)
    // function process(node,n){
    //     if(node===null){
    //         return 0;
    //     }
    //     let nextNum=process(node.next,n);
    //     if(nextNum===n){
    //         node.next=node.next.next;
    //     }
    //     return nextNum+1;
    // }
    // return process(head,n)===n?head.next:head;
    //快慢指针
    let preHead=new ListNode(0,head);
    let first=preHead;
    let second=preHead;
    while(n>0){
        first=first.next;
        n--;
    }
    while(first.next!==null){
        first=first.next;
        second=second.next;
    }
    second.next=second.next.next;
    return preHead.next;
};