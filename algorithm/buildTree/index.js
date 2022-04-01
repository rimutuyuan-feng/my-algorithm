/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    function process(s1,e1,s2,e2){
        if(s1===e1){
            return new TreeNode(preorder[s1])
        }
        if(s1>e1){
            return null
        }
        let mid=s2
        while(inorder[mid]!==preorder[s1]){
            ++mid
        }
        let node=new TreeNode(preorder[s1])
        node.left=process(s1+1,s1+mid-s2,s2,mid-1)
        node.right=process(s1+mid-s2+1,e1,mid+1,e2)
        return node
    }
    return process(0,preorder.length-1,0,inorder.length-1)
};