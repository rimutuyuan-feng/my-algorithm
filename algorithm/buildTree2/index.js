/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    function process(s1,e1,s2,e2){
        if(s1>e1){
            return null
        }
        const node=new TreeNode(postorder[e1])
        if(s1===e1){
            return node
        }
        let mid=s2
        while(inorder[mid]!==postorder[e1]){
            ++mid
        }
        node.left=process(s1,s1+mid-s2-1,s2,mid-1)
        node.right=process(s1+mid-s2,e1-1,mid+1,e2)
        return node
    }
    return process(0,postorder.length-1,0,inorder.length-1)
};