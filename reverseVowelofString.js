/* 


Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

var reverseVowels = function (s) {
  let arr = [];
  let res = "";
  for (let i = 0; i <= s.length - 1; i++) {
    if (
      s[i] == "a" ||
      s[i] == "A" ||
      s[i] == "e" ||
      s[i] == "E" ||
      s[i] == "i" ||
      s[i] == "I" ||
      s[i] == "o" ||
      s[i] == "O" ||
      s[i] == "u" ||
      s[i] == "U"
    ) {
      arr.push(s[i]);
    } else {
      continue;
    }
  }

  for (let i = 0; i <= s.length - 1; i++) {
    if (
      s[i] == "a" ||
      s[i] == "A" ||
      s[i] == "e" ||
      s[i] == "E" ||
      s[i] == "i" ||
      s[i] == "I" ||
      s[i] == "o" ||
      s[i] == "O" ||
      s[i] == "u" ||
      s[i] == "U"
    ) {
      res += arr.pop();
    } else {
      res += s[i];
    }
  }

  console.log(res);
  return res;
};
