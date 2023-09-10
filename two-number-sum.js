// Two number sum

function twoNumberSum(array, targetSum) {
  // Write your code here.
  let auxSum;
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      auxSum = array[i] + array[j];

      if (auxSum === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
