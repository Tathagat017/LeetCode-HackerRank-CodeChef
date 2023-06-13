/*

2352. Equal Row and Column Pairs
Medium
1.2K
63
Companies
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

 

Example 1:


Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]
Example 2:


Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
 

Constraints:

n == grid.length == grid[i].length
1 <= n <= 200
1 <= grid[i][j] <= 105

*/
// O(N^4) solution

var equalPairs = function (grid) {
  let count = 0;
  let obj = {};

  function ColCheck(str) {
    let col = "";
    for (let i = 0; i <= grid.length - 1; i++) {
      col = "";
      for (let j = 0; j <= grid.length - 1; j++) {
        col += grid[j][i] + " ";
      }
      if (col == str) {
        count++;
      }
    }
  }

  let row = "";

  for (let i = 0; i <= grid.length - 1; i++) {
    row = "";
    for (let j = 0; j <= grid.length - 1; j++) {
      row += grid[i][j] + " ";
    }

    ColCheck(row);
  }

  return count;
};
//O(n^2) solution via objects : Save every row as key in obj with their frequency being value(frequency mapping)

var equalPairs2 = function (grid) {
  let count = 0;

  let obj = {};
  let n = grid.length;
  let top = 0;
  let r = "";
  let c = "";
  while (top < grid.length) {
    r = "";
    for (let i = 0; i <= n - 1; i++) {
      r += grid[top][i] + "_";
    }

    if (!obj[r]) {
      obj[r] = 1;
    } else {
      obj[r]++;
    }

    top++;
  }
  let left = 0;
  while (left < n) {
    c = "";
    for (let i = 0; i <= n - 1; i++) {
      c += grid[i][left] + "_";
    }

    if (obj[c]) {
      count = count + obj[c];
    }

    left++;
  }

  return count;
};
