// Two number sum

function twoNumberSum(array, targetSum) {
  // Write your code here.
  //   let auxSum;
  //   for (var i = 0; i < array.length - 1; i++) {
  //     for (var j = i + 1; j < array.length; j++) {
  //       auxSum = array[i] + array[j];

  //       if (auxSum === targetSum) {
  //         return [array[i], array[j]];
  //       }
  //     }
  //   }
  //   return [];

  // Different approach implemented by me having into consideration optimal space and time complexity O(n) time where n is the lentgh of the input array

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
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
