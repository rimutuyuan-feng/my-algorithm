/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    // function process(node){
    //     let result=[node,node]
    //     let right=node.right
    //     if(node.left){
    //         let leftInfo=process(node.left)
    //         node.right=leftInfo[0]
    //         result[1]=leftInfo[1]
    //     }
    //     node.left=null
    //     if(right){
    //         let rightInfo=process(right)
    //         result[1].right=rightInfo[0]
    //         result[1]=rightInfo[1]
    //     }
    //     return result
    // }
    // if(root){
    //    process(root)
    // }
    let curr = root;
    while (curr !== null) {
        let left = curr.left;
        if (left !== null) {
            let mostRight = left;
            while (mostRight.right !== null) {
                mostRight = mostRight.right;
            }
            mostRight.right = curr.right;
            curr.left = null;
            curr.right = left;
        }
        curr = curr.right;
    }
};
