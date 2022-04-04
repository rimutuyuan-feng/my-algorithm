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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    function Info(isBT,height){
        this.isBT=(isBT===undefined ? false:isBT)
        this.height=(height===undefined ? 0:height)
    }
    function dp(node){
        if(node===null){
            return new Info(true)
        }
        let leftInfo=dp(node.left)
        let rightInfo=dp(node.right)
        if(!leftInfo.isBT||!rightInfo.isBT||Math.abs(leftInfo.height-rightInfo.height)>1){
            return new Info()
        }
        return new Info(true,Math.max(leftInfo.height,rightInfo.height)+1)
    }
    return dp(root).isBT
};