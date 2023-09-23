// Nth Fibonacci
//   The Fibonacci sequence is defined as follows: the first number of the sequence
//   is <span>0</span>, the second number is <span>1</span>, and the nth number is the sum of the (n - 1)th
//   and (n - 2)th numbers. Write a function that takes in an integer
//   <span>n</span> and returns the nth Fibonacci number.
//   Important note: the Fibonacci sequence is often defined with its first two
//   numbers as <span>F0 = 0</span> and <span>F1 = 1</span>. For the purpose of
//   this question, the first Fibonacci number is <span>F0</span>; therefore,
//   <span>getNthFib(1)</span> is equal to <span>F0</span>, <span>getNthFib(2)</span>
//   is equal to <span>F1</span>, etc..
// Sample Input #1
// n = 2
// Sample Output #1
// 1 // 0, 1</span>
// Sample Input #2
// n = 6
// Sample Output #2
// 5 // 0, 1, 1, 2, 3, 5</span>

// ====================================================================================================
// First Solution
// O(n) time | O(1) space - where n is the input number
// ====================================================================================================

function getNthFib(n) {
  // Write your code here.
  if (n == 1) return 0;
  if (n == 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
