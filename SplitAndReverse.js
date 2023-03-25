/*

Problem Description
 
 

You are given a string A of size N.

 

Return the string A after reversing the string word by word.

NOTE:

A sequence of non-space characters constitutes a word.
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
If there are multiple spaces between words, reduce them to a single space in the reversed string.
 



Problem Constraints
1 <= N <= 3 * 105



Input Format
The only argument given is string A.



Output Format
Return the string A after reversing the string word by word.



Example Input
Input 1:
    A = "the sky is blue"
Input 2:
    A = "this is ib"


Example Output
Output 1:
    "blue is sky the"
Output 2:
    "ib is this"



Example Explanation
Explanation 1:
    We reverse the string word by word so the string becomes "the sky is blue".
Explanation 2:
    We reverse the string word by word so the string becomes "this is ib".

*/
function revereString(A) {
  let word = "";
  let wordArray = [];
  for (let i = 0; i <= A.length - 1; i++) {
    if (A[i] !== " ") {
      word += A[i];
      //console.log(word)
      if (i == A.length - 1 && A[i] !== " ") {
        // console.log(word)
        wordArray.push(word);
      }
      continue;
    }
    if (A[i] == " ") {
      wordArray.push(word);
      if (i !== 0 && i !== A.length - 1 && A[i + 1] !== " ") {
        wordArray.push(" ");
      }
      word = "";
    }
  }

  word = "";
  for (let i = wordArray.length - 1; i >= 0; i--) {
    word += wordArray[i];
  }

  return word;
}

//ajaad
function reverseAjad(A) {
  let arr = [];
  let x = "";
  for (let i = 0; i <= A.length; i++) {
    if (A[i] == " " || i == A.length) {
      arr.push(x);
      x = "";
    } else {
      x += A[i];
    }
  }
  // console.log(arr)
  let res = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i == 0) {
      res += arr[i];
    } else if (arr[i] != "") {
      res += arr[i] + " ";
    }
  }
  return res;
}

// given
function rever(A) {
  return A.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ");
}
