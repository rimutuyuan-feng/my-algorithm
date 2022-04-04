/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 var sortedListToBST = function(head) {
    function process(start,end){
        if(start>end){
            return null
        }
        let mid=start+((end-start)>>1)
        let node=new TreeNode()
        node.left=process(start,mid-1)
        node.val=curr.val
        curr=curr.next
        node.right=process(mid+1,end)
        return node
    }
    let length=0
    let curr=head
    while(head!==null){
        ++length
        head=head.next
    }
    return process(0,length-1)
};