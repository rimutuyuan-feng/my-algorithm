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
 var zigzagLevelOrder = function(root) {
    if(root===null)
        return []
    const queue=[]
    const result=[]
    let isLToR=true
    queue.push(root)
    while(queue.length){
        let tempArr=[]
        let size=queue.length
        for(let i=0;i<size;++i){
            let node=queue.shift()
            if(isLToR){
                tempArr.push(node.val)
            }else{
                tempArr.unshift(node.val)
            }
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        result.push(tempArr)
        isLToR=!isLToR
    }
    return result
        
    return result
};