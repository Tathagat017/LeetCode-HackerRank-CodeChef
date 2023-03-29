/*
Given a sentence as a string A.
Return the number of palindromic words in the sentence.


Problem Constraints
1 <= A <= 105
Ai = {Lowercase English letters and whitespaces}


Input Format
The first and only argument is a string A.


Output Format
Return an integer.


Example Input
Input 1:
A = "the fastest racecar"
Input 2:

A = "wow mom"


Example Output
Output 1:
1
Output 2:

2


Example Explanation
Explanation 1:
The word "racecar" is only a palindromic word in the sentence "the fastest racecar".
Explanation 2:

The words "wow" and "mom" both are palindromic word in the sentence "wow mom".


*/

function Palindrome(A) {
  function palindrome(str) {
    let str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
      str2 += str[i] + "";
    }

    return str2 == str;
  }

  let ans = 0;

  A = A.split(" ");
  for (let i = 0; i <= A.length - 1; i++) {
    if (palindrome(A[i])) {
      ans++;
    }
  }

  return ans;
}
