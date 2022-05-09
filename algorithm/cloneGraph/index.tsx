/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

 function cloneGraph(node: Node | null): Node | null {
    if(!node){
        return null
    }
	const finded=new Map()
    const head=new Node(node.val)
    finded.set(node,head)
    function clonepProcess(node:Node,cloneNode:Node){
        for(let i=0;i<node.neighbors.length;++i){
            if(finded.has(node.neighbors[i])){
                cloneNode.neighbors.push(finded.get(node.neighbors[i]))
                
            }else{
                const tempNode=new Node(node.neighbors[i].val)
                finded.set(node.neighbors[i],tempNode)
                cloneNode.neighbors.push(tempNode)
                clonepProcess(node.neighbors[i],tempNode) 
            }       
        }
    }
    clonepProcess(node,head)
    return head
};