// Find Three Largest Numbers
//   Write a function that takes in an array of at least three integers and,
//   without sorting the input array, returns a sorted array of the three largest
//   integers in the input array.
//   The function should return duplicate integers if necessary; for example, it
//   should return [10, 10, 12] for an input array of
//   [10, 5, 9, 10, 12].
// Sample Input
// array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
// Sample Output
// [18, 141, 541]

// ====================================================================================================
// First Solution
// O(logn) time | O(n) space - where n is the number of elements in the array
// ====================================================================================================

function findThreeLargestNumbers(array) {
  // Write your code here.
  let low = -Infinity,
    mid = -Infinity,
    high = -Infinity;
  let temp;
  for (num of array) {
    if (low < num) {
      low = num;
      if (low > mid) {
        temp = mid;
        mid = low;
        low = temp;
        if (mid > high) {
          temp = high;
          high = mid;
          mid = temp;
        }
      }
    }
  }
  return [low, mid, high];
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
