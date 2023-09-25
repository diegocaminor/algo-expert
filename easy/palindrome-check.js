// Palindrome Check
//   Write a function that takes in a non-empty string and that returns a boolean
//   representing whether the string is a palindrome.
//   A palindrome is defined as a string that's written the same forward and
//   backward. Note that single-character strings are palindromes.
// Sample Input
// string = "abcdcba"
// Sample Output
// true // it's written the same forward and backward</span>

// ====================================================================================================
// First Solution
// O(n) time | O(1) space - where n is the length of the input string
// ====================================================================================================

function isPalindrome(string) {
  // Write your code here.
  let left = 0,
    right = string.length - 1;
  let mid;
  let array = [...string];
  for (i in array) {
    if (string.length % 2) {
      if (left == right) return true;
    } else {
      if (left > right) return true;
    }
    if (array[left] === array[right]) {
      left += 1;
      right -= 1;
    } else return false;
  }
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
