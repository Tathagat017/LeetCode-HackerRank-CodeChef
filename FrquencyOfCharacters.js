/*  
Problem Description
 
 

Given a string A, find the frequency of all the characters in it.


Problem Constraints
1 <= |A| <= 105
Ai = {Lowercase latin alphabets}


Input Format
Given a string A.


Output Format
Return an integer array of length 26.
Array should contain frequency of characters in increasing order of characters.


Example Input
Input 1:
A = "abcdefghijklmnopqrstuvwxyz"
Input 2:

A = "interviewbit"


Example Output
Output 1:
{1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
Output 2:

{0, 1, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 1, 0, 0, 0}


Example Explanation
Explanation 1:
Every charcater is present once in the string.
Explanation 2:

'b' is at indices 10.
'e' is at indices 4, 8
'i' is at indices 1, 7, 11
'n' is at indices 2
'r' is at indices 5
't' is at indices 3, 12
'v' is at indices 6
'w' is at indices 9
Rest of the characters are not present in the string
*/
function freq(A) {
  A = A.split("");
  let obj = {};
  let alps = "abcdefghijklmnopqrstuvwxyz";
  alps = alps.split("");
  for (let x of alps) {
    if (!obj[x]) {
      obj[x] = 0;
    }
  }
  for (let x of A) {
    if (!obj[x]) {
      obj[x] = 1;
    } else {
      obj[x]++;
    }
  }
  let arr = Object.values(obj);
  return arr;
}
