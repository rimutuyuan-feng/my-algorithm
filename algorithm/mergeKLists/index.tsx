/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
     val: number
    next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}
 function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    /* 最小堆排序,事件复杂度O(kn*logn)
     function swap(a:number,b:number,arr:Array<ListNode>){
        let temp=arr[a]
        arr[a]=arr[b]
        arr[b]=temp
    }
    function down(index:number,arr:Array<ListNode>){
        let temp=index;
        let leftIndex=index*2+1;
        let rightIndex=index*2+2;
        if(leftIndex<arr.length){
            temp=arr[temp].val<arr[leftIndex].val?temp:leftIndex
        }
        if(rightIndex<arr.length){
            temp=arr[temp].val<arr[rightIndex].val?temp:rightIndex
        }
        if(temp===index){
            return
        }
        swap(index,temp,arr)
        down(temp,arr)
    }
    function up(index:number,arr:Array<ListNode>){
        if(index===0){
            return
        }
        let parentIndex=(index-1)>>1
        if(arr[index].val<arr[parentIndex].val){
            swap(index,parentIndex,arr)
            up(parentIndex,arr)
        }
    }
    function move(index:number,arr:Array<ListNode>){
        swap(index,arr.length-1,arr)
        arr.pop()
        down(index,arr)
    }
    const newLists:Array<ListNode>=[]
    for(let i=0;i<lists.length;i++){
        if(lists[i]!==null){
            newLists.push(lists[i] as ListNode)
            up(newLists.length-1,newLists)
        }
    }
    // console.log(newLists)
    if(newLists.length===0){
        return null
    }
    const preHead=new ListNode()
    let cur=preHead
    while(newLists.length>1){
        
        cur.next=newLists[0]
        cur=cur.next
        
        if(newLists[0].next===null){
            move(0,newLists)
        }else{
            newLists[0]=newLists[0].next
        }
        down(0,newLists)
        // console.log(newLists)
    }
    cur.next=newLists[0]
    return preHead.next
    */
    //哈希表排序,事件复杂度O(kn)
    const map=new Map();
    lists.forEach(head=>{
        while(head!==null){
            if(map.has(head.val)){
                let temp=map.get(head.val)
                temp[1].next=head
                temp[1]=head
            }else{
                map.set(head.val,[head,head])
            }
            head=head.next
        }  
    })
    const newLists=[...map]
    if(!newLists.length){
        return null
    }
    newLists.sort((a,b)=>a[0]-b[0])
    newLists.reduce((pre,cur)=>{
        pre[1][1].next=cur[1][0]
        return cur
    })
    return newLists[0][1][0]
};