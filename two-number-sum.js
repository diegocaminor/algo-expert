// Two number sum

function twoNumberSum(array, targetSum) {
  // Write your code here.
  //Best solution that came up to my mind
  // O(n^2) time | O(1) space
  /*
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
  */

  // My solution
  // O(n) time | O(n) space
  // Different approach implemented by me having into consideration optimal space and time complexity O(n) time where n is the lentgh of the input array
  /*
    var hashTable = array.reduce(function (map, obj) {
    if (targetSum - obj != obj) {
      let substraction = targetSum - obj;
      map[obj] = array.includes(substraction);
    }
    return map;
  }, {});

  return Object.keys(hashTable)
    .filter((key) => hashTable[key] === true)
    .map((value) => parseInt(value, 10));
    */

  // Even Best Solution Found
  // O(n) time | O(n) space
  let seen = new Set();
  let complement;
  for (let i in array) {
    complement = targetSum - array[i];
    if (seen.has(array[i])) return [complement, array[i]];
    seen.add(complement);
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
