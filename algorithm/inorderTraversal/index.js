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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    // const result=[]
    // function process(node){
    //     if(node===null){
    //         return
    //     }
    //     process(node.left)
    //     result.push(node.val)
    //     process(node.right)
    // }
    // process(root)
    // return result
    function morris(node){
        while(node!==null){
            if(node.left!==null){
                let mostRight=node.left
                while(mostRight.right!==null&&mostRight.right!==node){
                    mostRight=mostRight.right
                }
                //第一次来到node
                if(mostRight.right===null){
                    mostRight.right=node
                    node=node.left
                    continue
                }else{//第二次来到node
                    mostRight.right=null
                }
            }
            result.push(node.val)
            node=node.right
        }
    }
    const result=[]
    morris(root)
    return result
};