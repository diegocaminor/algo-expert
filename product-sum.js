// Product Sum
// Write a function that takes in a "special" array and returns its product sum.
// A "special" array is a non-empty array that contains either integers or other
// "special" arrays. The product sum of a "special" array is the sum of its
// elements, where "special" arrays inside it are summed themselves and then
// multiplied by their level of depth.
// The depth of a "special" array is how far nested it is. For instance, the
// depth of [] is 1; the depth of the inner array in
// [[]] is 2; the depth of the innermost array in
// [[[]]] is 3.
// Therefore, the product sum of [x, y] is x + y; the
// product sum of [x, [y, z]] is x + 2 * (y + z); the
// product sum of [x, [y, [z]]] is x + 2 * (y + 3z).
// array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// 12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

// ====================================================================================================
// First Solution
// O(nlog(n)) time | O(1) space - where n is the number of students
// ====================================================================================================

function productSum(array, depth = 1) {
  // Write your code here.
  let totalSum = 0;
  for (item of array) {
    if (Array.isArray(item)) {
      totalSum += productSum(item, depth + 1);
    } else {
      totalSum += item;
      console.log("totalSum: ", totalSum);
    }
  }
  return totalSum * depth;
}

// Do not edit the line below.
exports.productSum = productSum;
