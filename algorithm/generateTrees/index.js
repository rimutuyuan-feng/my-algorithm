/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
    function process(start,end){
        if(start===end){
            return [new TreeNode(start)]
        }
        if(start>end){
            return []
        }
        const res=[]
        for(let i=start;i<=end;++i){
            let leftHeads=process(start,i-1)
            let rightHeads=process(i+1,end)
            if(leftHeads.length&&rightHeads.length){
                for(let j=0;j<leftHeads.length;++j){
                    for(let k=0;k<rightHeads.length;++k){
                        let tempHead=new TreeNode(i)
                        tempHead.left=leftHeads[j]
                        tempHead.right=rightHeads[k]
                        res.push(tempHead)
                    }
                }
            }else if(leftHeads.length){
                for(let j=0;j<leftHeads.length;++j){
                    let tempHead=new TreeNode(i)
                    tempHead.left=leftHeads[j]
                    res.push(tempHead)
                }
            }else if(rightHeads.length){
                for(let j=0;j<rightHeads.length;++j){
                    let tempHead=new TreeNode(i)
                    tempHead.right=rightHeads[j]
                    res.push(tempHead)
                }
            }
        }
        return res
    }
    return process(1,n)
};