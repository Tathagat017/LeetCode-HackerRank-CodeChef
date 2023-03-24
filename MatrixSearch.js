/*
Problem Description
 
 

Given a matrix of integers A of size N x M and an integer B. Write an efficient algorithm that searches for integer B in matrix A. 

This matrix A has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than or equal to the last integer of the previous row.
Return 1 if B is present in A, else return 0.

NOTE: Rows are numbered from top to bottom, and columns are from left to right.



Problem Constraints
1 <= N, M <= 1000

1 <= A[i][j], B <= 106



Input Format
The first argument given is the integer matrix A.

The second argument given is the integer B.
*/

function searchMatrix(A, B) {
  function bs(arr, K) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      if (arr[mid] == B) {
        return 1;
      } else if (arr[mid] > B) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return 0;
  }

  for (let i = 0; i <= A.length - 1; i++) {
    if (bs(A[i]) == 1) {
      return 1;
    }
  }
  return 0;
}
