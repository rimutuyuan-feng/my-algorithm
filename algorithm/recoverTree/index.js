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
 var recoverTree = function(root) {
    let error1=null
    let error2=null
    let cur=root
    let min=Number.MIN_SAFE_INTEGER
    let errorCount=0
    while(cur!==null){
        if(cur.left!==null){
            let mostRight=cur.left
            while(mostRight.right!==null&mostRight.right!==cur){
                mostRight=mostRight.right
            }
            if(mostRight.right===null){
                mostRight.right=cur
                cur=cur.left
                continue
            }else{
                mostRight.right=null
            }
        }
        if(cur.val<min){
            error2=cur
            errorCount++
        }
        if(errorCount===0){
            error1=cur
        }
        min=cur.val
        cur=cur.right
    }
    let temp=error1.val
    error1.val=error2.val
    error2.val=temp
};