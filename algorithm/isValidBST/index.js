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
 var isValidBST = function(root) {
    //树形dp
    // function Info(isBST,min,max){
    //     this.isBST=isBST===undefined?false:isBST
    //     this.min=min===undefined?0:min
    //     this.max=max===undefined?0:max
    // }
    // function dpProcess(node){
    //     if(node===null){
    //         return null
    //     }
    //     let isBST=true
    //     let min=node.val
    //     let max=node.val
    //     let leftInfo=dpProcess(node.left)
    //     let rightInfo=dpProcess(node.right)
    //     if(leftInfo!==null){
    //         if(leftInfo.isBST){
    //             isBST=node.val>leftInfo.max
    //             min=leftInfo.min
    //         }else{
    //             return new Info(false)
    //         }
    //     }
    //     if(rightInfo!==null){
    //         if(rightInfo.isBST){
    //             isBST=isBST&&node.val<rightInfo.min
    //             max=rightInfo.max
    //         }else{
    //             return new Info(false)
    //         }
    //     }
    //     return new Info(isBST,min,max)
    // }
    // return dpProcess(root).isBST
    //中序遍历
    let min=Number.MIN_SAFE_INTEGER
    let cur=root
    while(cur!==null){
        if(cur.left!==null){
            let mostRight=cur.left
            while(mostRight.right!==null&&mostRight.right!==cur){
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
        if(min>=cur.val){
            return false
        }else{
            min=cur.val
        }
        cur=cur.right
    }
    return true
};