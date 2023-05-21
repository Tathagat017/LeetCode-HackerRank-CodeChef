// Diamond Traversal Ended
// Description

// Given a square matrix of odd length , print the matrix elements in the order shown in the figure :

// image.png


// Input
// The first line of input will contain an integer T, denoting the number of test cases

// The first line of each test case will contain an integer N, denoting the size of the matrix

// The next N rows will contain N matrix elements



// Constraints:
// 1<= T <= 10

// 1<= N <= 100

// 1<= Matrix[i][j] <= 100


// Output
// For each test case, output the matrix elements in a way as shown in the figure, print the elements in a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 6 2 4 8
// Hint

// In Sample 1:

// Print element in the order as mentioned in the description , output will be 6 2 4 8

function diamondTraversal(matrix) {
    let n=matrix.length;
    let bag="";
 let i=(n-1)/2;
 let j=n-1;
   while(i>=0 && j>=(n-1)/2){
       bag+=matrix[i][j]+" ";
       i--;
       j--;
   }
//   console.log(bag);
i=1; j=((n-1)/2)-1;
while(i<=(n-1)/2 && j>=0){
    bag+=matrix[i][j]+" ";
    i++;
    j--;
}
 i=((n-1)/2)+1; j=1;
 while(i<=n-1 && j<=(n-1)/2){
     bag+=matrix[i][j]+" ";
     i++;
     j++;
 }
  i=n-2; j=((n-1)/2)+1;
  while(i>=((n-1)/2)+1 && j<=n-2){
      bag+=matrix[i][j]+" ";
      i--;
      j++;
  }
  console.log(bag);
}