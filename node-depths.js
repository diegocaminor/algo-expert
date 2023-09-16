// ====================================================================================================
// node-depths.js
// ====================================================================================================

{
  /* <div class="html">
<p>
  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.
</p>
<p>
  Write a function that takes in a Binary Tree and returns the sum of its nodes'
  depths.
</p>
<p>
  Each <span>BinaryTree</span> node has an integer <span>value</span>, a
  <span>left</span> child node, and a <span>right</span> child node. Children
  nodes can either be <span>BinaryTree</span> nodes themselves or
  <span>None</span> / <span>null</span>.
</p>
<h3>Sample Input</h3>
<pre><span class="CodeEditor-promptParameter">tree</span> =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9
</pre>
<h3>Sample Output</h3>
<pre>16
<span class="CodeEditor-promptComment">// The depth of the node with value 2 is 1.</span>
<span class="CodeEditor-promptComment">// The depth of the node with value 3 is 1.</span>
<span class="CodeEditor-promptComment">// The depth of the node with value 4 is 2.</span>
<span class="CodeEditor-promptComment">// The depth of the node with value 5 is 2.</span>
<span class="CodeEditor-promptComment">// Etc..</span>
<span class="CodeEditor-promptComment">// Summing all of these depths yields 16.</span>
</pre>
</div> */
}

// ====================================================================================================
// First Solution - Recursive
// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in the Binary Tree and h is the height of the Binary Tree
// ====================================================================================================

function getNodesDepth(node, depthsArray, depthLevel) {
  if (!node) return;
  depthsArray.push(depthLevel);
  depthLevel++;
  if (node.left || node.right) {
    getNodesDepth(node.left, depthsArray, depthLevel);
    getNodesDepth(node.right, depthsArray, depthLevel);
  }
  return;
}

function nodeDepths(root) {
  // Write your code here.
  let depthsArray = [];
  let depthLevel = 0;
  getNodesDepth(root, depthsArray, depthLevel);
  const sum = depthsArray.reduce((acc, currentValue) => acc + currentValue, 0);
  return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;

// ====================================================================================================
// Second Solution - Iterative
// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in the Binary Tree and h is the height of the Binary Tree
// ====================================================================================================

function nodeDepths(root) {
  // Write your code here.
  let sumOfDepths = 0;
  let stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const nodeInfo = stack.pop();
    const { node, depth } = nodeInfo;
    if (!node) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;

// ====================================================================================================
// Third Solution - Recursive Improved
// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in the Binary Tree and h is the height of the Binary Tree
// ====================================================================================================

function sumDepths(root, depthLevel) {
  if (!root) return 0;
  return (
    depthLevel +
    sumDepths(root.left, depthLevel + 1) +
    sumDepths(root.right, depthLevel + 1)
  );
}
function nodeDepths(root) {
  // Write your code here.
  return sumDepths(root, 0);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
