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
 var isSymmetric = function(root) {
    //递归
    // function process(node1,node2){
    //     if(!node1&&!node2){
    //         return true
    //     }
    //     if(node1!==null&&node2!==null){
    //         if(node1.val!==node2.val){
    //             return false
    //         }else{
    //             return process(node1.left,node2.right)&&process(node1.right,node2.left)
    //         }
    //     }
    //     return false
    // }
    // if(!root){
    //     return true
    // }
    // return process(root.left,root.right)
    //迭代
    function Queue(){
        const data={}
        let start=0
        let end=0
        this.add=(element)=>{
            data[end++]=element
        }
        this.dequeue=()=>{
            let temp=data[start]
            delete data[start++]
            return temp
        }
        this.size=()=>{
            return end-start
        }
    }
    if(!root){
        return false
    }
    const queue=new Queue()
    queue.add(root.left)
    queue.add(root.right)
    while(queue.size()){
        let l=queue.dequeue()
        let r=queue.dequeue()
        if(!l&&!r){
            continue
        }
        if((!l||!r)||l.val!==r.val){
            return false
        }
        queue.add(l.left)
        queue.add(r.right)
        queue.add(l.right)
        queue.add(r.left)
    }
    return true

};