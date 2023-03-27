/*
Problem Description
 
 

Given a password as a character array A.
Check if it is valid or not.
Password should have at least one numerical digit(0-9).
Password's length should be in between 8 to 15 characters.
Password should have at least one lowercase letter(a-z).
Password should have at least one uppercase letter(A-Z).
Password should have at least one special character ( @, #, %, &, !, $, *).


Problem Constraints
1 <= |A| <= 20


Input Format
Given a character array A.


Output Format
Return an integer.


Example Input
Input 1:
A = ['S', 'c', 'a', 'l', 'e', 'r', '@', '1']
Input 2:

A = ['I', 'n', 't', 'e', 'r', 'v', 'i', 'e', 'w', 'B', 'i', 't']


Example Output
Output 1:
1
Output 2:

0


Example Explanation
Explanation 1:
All the characteristic required for password are present in given password.
Explanation 2:

The password given does not have any special character and also it does not have any numerical digit.

*/

function valid(A) {
  let n = A.length;
  if (A.length < 8 || A.length >= 16) {
    return 0;
  }

  let lower = "abcdefghijklmnopqrstuvwxyz";
  let lowerArr = lower.split("");
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upperArr = upper.split("");
  let obj = {};
  let obj2 = {};
  for (let i = 0; i <= 25; i++) {
    if (!obj[lowerArr[i]]) {
      obj[lowerArr[i]] = 0;
    }
    if (!obj2[upperArr[i]]) {
      obj2[upperArr[i]] = 0;
    }
  }

  let flag1 = false,
    flag2 = false,
    flag3 = false,
    flag4 = false;

  for (let i = 0; i <= A.length - 1; i++) {
    if (obj[A[i]] == 0) {
      flag1 = true;
      continue;
    }

    if (obj2[A[i]] == 0) {
      flag2 = true;
      continue;
    }

    if (
      A[i] == "@" ||
      A[i] == "#" ||
      A[i] == "%" ||
      A[i] == "&" ||
      A[i] == "!" ||
      A[i] == "$" ||
      A[i] == "*"
    ) {
      flag4 = true;
    }

    if (!isNaN(A[i])) {
      flag3 = true;
    }
  }

  if (flag1 && flag2 && flag3 && flag4) {
    return 1;
  } else {
    return 0;
  }
}
