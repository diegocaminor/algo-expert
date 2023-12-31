// Binary Search
//   Write a function that takes in a sorted array of integers as well as a target
//   integer. The function should use the Binary Search algorithm to determine if
//   the target integer is contained in the array and should return its index if it
//   is, otherwise -1.
//   If you're unfamiliar with Binary Search, we recommend watching the Conceptual
//   Overview section of this question's video explanation before starting to code.
// Sample Input
// array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
// target = 33
// Sample Output
// 3

// ====================================================================================================
// First Solution
// ====================================================================================================

function binarySearch(array, target) {
  // Write your code here.
  if (array.indexOf(target) != -1) {
    return array.indexOf(target);
  } else {
    return -1;
  }
}
// Do not edit the line below.
exports.binarySearch = binarySearch;

// ====================================================================================================
// Second Solution
// O(logn) time | O(n) space - where n is the number of elements in the array
// ====================================================================================================

function binarySearch(array, target) {
  // Write your code here.
  if (array.indexOf(target) != -1) {
    return array.indexOf(target);
  } else {
    return -1;
  }
}
// Do not edit the line below.
exports.binarySearch = binarySearch;

// ====================================================================================================
// Second Solution
// O(logn) time | O(1) space - where n is the number of elements in the array
// ====================================================================================================

function binarySearch(array, target, left = 0, right = array.length - 1) {
  // Write your code here.
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] < target) left = mid + 1;
    if (array[mid] > target) right = mid - 1;
  }
  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
