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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    const result=[]
    function process(node,rest,count){
        if(node===null){
            return
        }
        count.push(node.val)
        rest-=node.val
        if(!node.left&&!node.right){
            if(rest===0){
                result.push([...count])
            }
            count.pop()
            return
        }
        process(node.left,rest,count)
        process(node.right,rest,count)
        count.pop()
    }
    process(root,targetSum,[])
    return result
};