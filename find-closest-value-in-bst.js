// ====================================================================================================
// Find Closest Value In BST
// ====================================================================================================

// Write a function that takes in a Binary Search Tree (BST) and a target integer
// value and returns the closest value to that target value contained in the BST.
// You can assume that there will only be one closest value.

// Each BST node has an integer value, a
// left child node, and a right child node. A node is
// said to be a valid BST node if and only if it satisfies the BST
// property: its value is strictly greater than the values of every
// node to its left; its value is less than or equal to the values
// of every node to its right; and its children nodes are either valid
// BST nodes themselves or None / null.

// ====================================================================================================
// First Solution -> Recursive solution
// O(nlogn) time | O(nlogn) space
// ====================================================================================================

function findClosestValueHelper(tree, target, diff) {
  let currentDiff = Math.abs(tree.value - target);
  if (currentDiff === 0) return tree.value;
  if (currentDiff < diff.prevDifference) {
    diff.closestValue = tree.value;
    diff.prevDifference = currentDiff;
  }
  if (target < tree.value && tree.left) {
    return findClosestValueHelper(tree.left, target, diff);
  } else if (tree.right) {
    return findClosestValueHelper(tree.right, target, diff);
  } else {
    return diff.closestValue;
  }
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let diff = { prevDifference: Infinity, closestValue: null };
  const closestValue = findClosestValueHelper(tree, target, diff);
  return closestValue;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

// ====================================================================================================
// Second Solution -> Refactored Recursive Solution
// O(nlogn) time | O(nlogn) space
// ====================================================================================================

function findClosestValueHelper(tree, target, diff) {
  if (!tree) return;

  let currentDiff = Math.abs(tree.value - target);
  if (currentDiff < diff.prevDifference || currentDiff === 0) {
    diff.closestValue = tree.value;
    diff.prevDifference = currentDiff;
  }
  if (target < tree.value) findClosestValueHelper(tree.left, target, diff);
  else if (target > tree.value)
    findClosestValueHelper(tree.right, target, diff);
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let diff = { prevDifference: Infinity, closestValue: null };
  findClosestValueHelper(tree, target, diff);
  return diff.closestValue;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
