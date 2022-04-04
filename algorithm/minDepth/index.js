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
 * @return {number}
 */
 var minDepth = function(root) {
    if(root===null){
        return 0
    }
    let queue=[root]
    let height=0
    while(queue.length!==0){
        ++height
        let size=queue.length
        for(let i=0;i<size;++i){
            let tempNode=queue.shift()
            if(!tempNode.left&&!tempNode.right){
                return height
            }
            if(tempNode.left){
                queue.push(tempNode.left)
            }
            if(tempNode.right){
                queue.push(tempNode.right)
            }
        }
    }
};