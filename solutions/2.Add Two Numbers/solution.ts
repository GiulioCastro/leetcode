
// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let sumList = new ListNode();
  let tempSumList = sumList;
  let carryOver = 0;

  while(l1 !== null || l2 !== null || carryOver !== 0) {
    let sum = carryOver;
    if(l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if(l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }
    carryOver = Math.floor(sum/10);
    tempSumList.next = new ListNode(sum % 10);
    tempSumList = tempSumList.next
  }
  return sumList.next;
};