// Go V Ended
// Description

// Given a 2D array with N rows and M columns. Print the array elements starting from the top left corner and ending up at the bottom left corner following a V shape as given below:
// prob.png

// Note - Assume 1-based indexing.


// Input
// First line: Single integer denoting the value of T - the number of test cases.

// For each test case:

// First line: Two single space-separated integers denoting the value of N and M.

// N lines follow:

// Each of the lines consists of M single space-separated character, denoting a row of a matrix.

// Constraints:

// 1 <= T <= 100
// 1 <= N,M <= 100


// Output
// For each test case, print in a new line, all the integers each separated by a single space that is contained in the V shape. If it is not possible to print the V shape, print -1.


// Sample Input 1 

// 2
// 5 3
// 1 2 3
// 4 5 6
// 7 8 9
// 1 6 5
// 2 4 8
// 2 2
// 1 4
// 2 6
// Sample Output 1

// 1 5 9 6 2
// -1
// Hint

// You are to print the elements of matrix which are at following positions:
// (1,1),(2,2),(3,3), ........, (M-1,M-1), (M,M), (M+1,M-1),(M+2,M-2), ......, (N,1).
// Given test cases,

// Test 1:
// N = 5, M = 3, and given 2D array:

// 1 2 3
// 4 5 6
// 7 8 9
// 1 6 5
// 2 4 8

// Elements at required positions:
// (1,1) - 1, (2,2) - 5, (3,3) - 9, (4,2) - 6, (5,1) - 2.

// Hence the required sequence to be printed is:
// 1 5 9 6 2.

// Test 2:
// Elements at required positions:
// (1,1) - 1, (2,2) - 6.
// There are no elements to be traversed further, hence you can't reach the bottom left corner of the array. Hence the answer is -1.

function pattern(r,c,arr){
    let bag='';
   if(r==(c*2)-1){
      let count=0;
      let mid=Math.floor(r/2);
      for(let R=0,C=0;R<=mid&&C<c;R++,C++){
         bag+=arr[R][C]+' ';
      }
     for(let R=mid+1,C=c-2;R<r&&C>=0;R++,C--){
         bag+=arr[R][C]+' ' ;
      }
     console.log(bag);
    }else{
       console.log(-1);
   }
}
 function runProgram(input){
        input=input.trim().split("\n");
   let tc=input[0];
   let line=1;
 for(let i=0; i<tc; i++){
     let [r,c]=input[line].trim().split(" ").map(Number);
     line++;
     let mtr=[];
     for(let i=0; i<r; i++){
         let arr=input[line].split(" ").map(Number);
         line++;
         mtr.push(arr);
   }
   pattern(r,c,mtr)
  }
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input; });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);});
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0); }); }