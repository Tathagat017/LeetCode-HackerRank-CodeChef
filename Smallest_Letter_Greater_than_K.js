/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

Constraints:

2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.


*/
//tc : O(nlogn);
//sc O(1)
var nextGreatestLetter = function (letters, target) {
  let first = letters[0];
  letters = letters.sort((a, b) => a - b);

  if (target >= letters[letters.length - 1]) {
    return first;
  } else {
    for (let i = 0; i <= letters.length - 1; i++) {
      if (letters[i] > target) {
        return letters[i];
      }
    }
  }
};
// With Object : tc --> O(n) and  sc-->O(n)

var nextGreatestLetter2 = function (letters, target) {
  let first = letters[0];

  let obj = {};

  for (let el of letters) {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  }

  let L = Object.keys(obj);

  if (target >= L[L.length - 1]) {
    return first;
  }

  for (let i = 0; i <= L.length - 1; i++) {
    if (L[i] > target) {
      return L[i];
    }
  }
};
