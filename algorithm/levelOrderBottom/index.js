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
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
    if(root===null){
        return []
    }    
    const queue=[]
    queue.push(root)
    const result=[]
    while(queue.length!==0){
        let size=queue.length
        let tempResult=[]
        for(let i=0;i<size;++i){
            let node=queue.shift()
            tempResult.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        result.unshift(tempResult)
    }
    return result
};