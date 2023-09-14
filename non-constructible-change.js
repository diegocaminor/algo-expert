// ====================================================================================================
// non-constructible-change
// ====================================================================================================
//   Given an array of positive integers representing the values of coins in your
//   possession, write a function that returns the minimum amount of change (the
//   minimum sum of money) that you cannot create. The given coins can have
//   any positive integer value and aren't necessarily unique (i.e., you can have
//   multiple coins of the same value).

//   For example, if you're given coins = [1, 2, 5], the minimum
//   amount of change that you can't create is 4. If you're given no
//   coins, the minimum amount of change that you can't create is 1.

// ====================================================================================================
// First Solution
// ====================================================================================================
// O(nLogn) time | O(1) space

function nonConstructibleChange(coins) {
  // Write your code here.
  if (!coins.length) return 1;
  coins = coins.sort(function (a, b) {
    return a - b;
  });
  let minimumChange = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > minimumChange + 1) return minimumChange + 1;
    minimumChange += coins[i];
  }
  return minimumChange + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
