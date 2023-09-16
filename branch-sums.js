// ====================================================================================================
// branch-sums.js
// ====================================================================================================

// Write a function that takes in a Binary Tree and returns a list of its branch
// sums ordered from leftmost branch sum to rightmost branch sum.

// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends at
// any leaf node.

// Each BinaryTree node has an integer value, a
// left child node, and a right child node. Children
// nodes can either be BinaryTree nodes themselves or
// None / null.

// ====================================================================================================
// First Solution
// O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
// ====================================================================================================

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getBranchSum(node, runningSum, sums) {
  if (!node) return;
  runningSum += node.value;
  if (!node.left && !node.right) {
    sums.push(runningSum);
    return;
  }
  getBranchSum(node.left, runningSum, sums);
  getBranchSum(node.right, runningSum, sums);
}

function branchSums(root) {
  // Write your code here.
  let sums = [];
  getBranchSum(root, 0, sums);
  return sums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
