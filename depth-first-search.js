// Depth-first Search

//   You're given a <span>Node</span> class that has a <span>name</span> and an
//   array of optional <span>children</span> nodes. When put together, nodes form
//   an acyclic tree-like structure.
//   Implement the <span>depthFirstSearch</span> method on the
//   <span>Node</span> class, which takes in an empty array, traverses the tree
//   using the Depth-first Search approach (specifically navigating the tree from
//   left to right), stores all of the nodes' names in the input array, and returns
//   it.
//   If you're unfamiliar with Depth-first Search, we recommend watching the
//   Conceptual Overview section of this question's video explanation before
//   starting to code.
// Sample Input graph =   A
//                     /  |  \
//                    B   C   D
//                   / \     / \
//                  E   F   G   H
//                     / \   \
//                    I   J   K
// Sample Output
// ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

// ====================================================================================================
// First Solution - Recursive
// O(v + e) time | O(v) space - where v is the number of vertices of the input graph and e is the number of edges of the input graph
// ====================================================================================================

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array = [], node = this) {
    // Write your code here.
    array.push(node.name);
    node.children.forEach((child) => {
      this.depthFirstSearch(array, child);
    });
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
