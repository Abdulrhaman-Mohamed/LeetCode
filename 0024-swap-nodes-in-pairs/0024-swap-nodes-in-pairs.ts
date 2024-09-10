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

function swapPairs(head: ListNode | null): ListNode | null {
    const tree = head ;
    while(head?.next?.val != null){
        let value = head.val
        let next = head.next.val
        head.next.val = value
        head.val = next
        head = head.next.next
    }
    return tree
};