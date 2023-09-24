// Bubble Sort
//   Write a function that takes in an array of integers and returns a sorted
//   version of that array. Use the Bubble Sort algorithm to sort the array.
//   If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
//   Overview section of this question's video explanation before starting to code.
// Sample Input
// array = [8, 5, 2, 9, 5, 6, 3]
// Sample Output
// [2, 3, 5, 5, 6, 8, 9]

// ====================================================================================================
// First Solution
// Best: O(n) time | O(1) space - where n is the length of the input array
// Average: O(n^2) time | O(1) space - where n is the length of the input array
// Worst: O(n^2) time | O(1) space - where n is the length of the input array
// ====================================================================================================

function bubbleSort(array) {
  // Write your code here.
  let temp;
  let isSorted = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      isSorted = true;
    }
  }

  if (isSorted) return bubbleSort(array);
  else return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
