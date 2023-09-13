// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

function sortedSquaredArray(array) {
  // Write your code here.
  function compare(a, b) {
    return a - b;
  }
  let squaredArray = array.map((num) => num * num);
  return squaredArray.sort(compare);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
