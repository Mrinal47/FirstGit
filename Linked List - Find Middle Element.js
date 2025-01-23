var findMiddleElement = function(head) {
   
	// return the middle node of the linked list

  if (head === null) {
    return null;
  }
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;

};