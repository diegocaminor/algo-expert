// Validate Subsequence
// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same ordeas they appear in the array.
// For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4] , and so do the numbers [2, 4] .
// Note that a single number in an array and the array itself are both valid subsequences of the array.

// My solution
// O(n) time | O(1) space
/*
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let j = 0;
  let isSequence = false;
  for (i in array) {
    if (array[i] === sequence[j]) {
      j++;
    }
    if (j === sequence.length) {
      isSequence = true;
    }
  }
  return isSequence;
}
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
*/

// Code refactor by me
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let j = 0;
  let isSequence = false;
  for (i in array) {
    if (array[i] === sequence[j]) j++;
  }
  return j === sequence.length;
}
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
