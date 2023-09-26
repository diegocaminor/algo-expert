// Monotonic Array
//   Write a function that takes in an array of integers and returns a boolean
//   representing whether the array is monotonic.
//   An array is said to be monotonic if its elements, from left to right, are
//   entirely non-increasing or entirely non-decreasing.
//   Non-increasing elements aren't necessarily exclusively decreasing; they simply
//   don't increase. Similarly, non-decreasing elements aren't necessarily
//   exclusively increasing; they simply don't decrease.
// Note that empty arrays and arrays of one element are monotonic.
// Sample Input
// array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
// Sample Output
// true
// ====================================================================================================
// First Solution
// O(n) time | O(1) space - where n is the length of the Array
// ====================================================================================================

function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 2) return true;
  let curr = 0;
  let shouldIncrease = curr < array[0];
  curr = array[0];
  for (let i = 1; i < array.length; i++) {
    if (shouldIncrease) {
      if (curr <= array[i]) {
        curr = array[i];
      } else return false;
    } else {
      if (curr >= array[i]) {
        curr = array[i];
      } else return false;
    }
  }

  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
