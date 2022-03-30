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
 var levelOrder = function(root) {
    if(root===null){
        return[]
    }
    const queue1=[]
    const queue2=[]
    const result=[]
    queue1.push(root)
    while(queue1.length||queue2.length){
        let tempArr=[]
        while(queue1.length){
            let temp=queue1.shift()
            tempArr.push(temp.val)
            if(temp.left){
                queue2.push(temp.left)
            }
            if(temp.right){
                queue2.push(temp.right)
            }
        }
        if(tempArr.length){
            result.push(tempArr)
            tempArr=[]
        }       
        while(queue2.length){
            let temp=queue2.shift()
            tempArr.push(temp.val)
            if(temp.left){
                queue1.push(temp.left)
            }
            if(temp.right){
                queue1.push(temp.right)
            }
        }
        if(tempArr.length){
            result.push(tempArr)
        }    
    }
    return result
};