/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    let currNode=root
    let nextNode=null
    while(currNode){
        let lastNode=new Node()
        nextNode=lastNode
        while(currNode){
            if(currNode.left){
                lastNode.next=currNode.left
                lastNode=currNode.left
            }
            if(currNode.right){
                lastNode.next=currNode.right
                lastNode=currNode.right
            }
            currNode=currNode.next
        }
        currNode=nextNode.next
    }
    return root
};