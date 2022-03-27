/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    function process(node1,node2){
        if(node1===null&&node2===null){
            return true
        }else if(node1!==null&&node2!==null){
            return node1.val===node2.val&&process(node1.left,node2.left)&&process(node1.right,node2.right)
        }else{
            return false
        }
    }
    return process(p,q)
};