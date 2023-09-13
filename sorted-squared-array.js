// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

// ====================================================================================================
// My solution
// ====================================================================================================
// function sortedSquaredArray(array) {
//   // Write your code here.
//   function compare(a, b) {
//     return a - b;
//   }
//   let squaredArray = array.map((num) => num * num);
//   return squaredArray.sort(compare);
// }

// // Do not edit the line below.
// exports.sortedSquaredArray = sortedSquaredArray;

// ====================================================================================================
// Code Refactored By Me
// ====================================================================================================
// O(n) time | O(n) space
function sortedSquaredArray(array) {
  // Write your code here.
  let counterSmallValue = 0;
  let counterLargerValue = array.length - 1;
  let smallValue = array[counterSmallValue];
  let largeValue = array[counterLargerValue];
  let squaredArray = [];

  array.forEach((num, i) => {
    if (Math.abs(smallValue) < Math.abs(largeValue)) {
      valueToBeSquared = largeValue;
      counterLargerValue = counterLargerValue - 1;
      largeValue = array[counterLargerValue];
    } else {
      valueToBeSquared = smallValue;
      counterSmallValue = counterSmallValue + 1;
      smallValue = array[counterSmallValue];
    }
    squaredArray.unshift(valueToBeSquared ** 2);
  });

  return squaredArray;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
