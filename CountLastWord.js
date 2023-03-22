/* 
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

*/

var lengthOfLastWord = function (s) {
  let count = 0;

  s = s.trim();

  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] !== " ") {
      count++;
    } else {
      count = 0;
    }
  }
  return count;
};
