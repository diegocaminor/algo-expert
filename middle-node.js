// Middle Node
//     You're given a Linked List with at least one node. Write a function
//     that returns the middle node of the Linked List. If there are two middle
//     nodes (i.e. an even length list), your function should return the second
//     of these nodes.
//     Each <span>LinkedList</span> node has an integer <span>value</span> as well as
//     a <span>next</span> node pointing to the next node in the list or to
//     <span>None</span> / <span>null</span> if it's the tail of the list.

//   Sample Input</h3>
//     linkedList = 2 -> 7  -> 3 -> 5</pre>
//   Sample Output</h3>
//     3  -> 5  // we return the second middle node</span></pre>

// ====================================================================================================
// First Solution
// O(n) time | O(1) space - where n is the number of nodes in the Linked List
// ====================================================================================================

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function middleNode(linkedList) {
  // Write your code here.
  let linkedListLength = 0;
  let nextNode = linkedList;
  while (nextNode.next) {
    nextNode = nextNode.next;
    linkedListLength += 1;
  }
  let midNodePosition = Math.ceil(linkedListLength / 2);
  // midNodePosition = linkedListLength%2 ? linkedListLength/2 : (Math.ceil(linkedListLength/2));
  linkedListLength = 0;
  console.log(midNodePosition);
  while (linkedListLength != midNodePosition) {
    linkedList = linkedList.next;
    linkedListLength += 1;
  }
  return linkedList;
}

// Do not edit the line below.
exports.middleNode = middleNode;
