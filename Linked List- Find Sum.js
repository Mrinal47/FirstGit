var findSumOfOddElements = function(head) {
    
	// return the sum of odd values of the linkedlist
  let sum = 0;
  let oddElem = false;

  while (head != null) {
    if (head.val % 2 !== 0) {
      sum = sum + head.val;
      oddElem = true;
    }
    head = head.next;
  }

  return oddElem ? sum : 0;


};