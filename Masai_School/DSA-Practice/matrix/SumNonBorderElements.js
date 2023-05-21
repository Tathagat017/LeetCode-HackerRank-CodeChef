// Borderless Ended
// Description

// You are given a matrix A of size N X M. Find the sum of all the elements in the matrix which do not lie at the border.


// Input
// The first line of the input contains N and M, denoting the dimensions of the matrix.

// The next N lines contain M space separated integers each, denoting the elements of the matrix.

// Constraints

// 1 <= N, M <= 100

// 1 <= A[i][j] <= 100


// Output
// Print a single integer denoting the sum of all the elements in the matrix, which do not lie at the border.


// Sample Input 1 

// 4 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
// Sample Output 1

// 34
// Hint

// In the sample test case, the elements which do not lie at the border, are {6,7,10,11}. Therefore, the sum of the elements are => 6 + 7 + 10 + 11 = 34, which is the required answer.

function runProgram(input){
    input=input.split("\n");
    let [n,m]=input[0].split(' ').map(Number);
    let mtr=[];
    let l=1;
    for(let i=0; i<n; i++){
        mtr.push(input[l++].split(" ").map(Number));
    }
    mid(n,m,mtr)
}
function mid(n,m,mtr){
    let Total=0;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
           Total+=mtr[i][j];
        }
    }
    let sum=0;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i==0 || i==n-1|| j==0 || j==m-1){
                sum+=mtr[i][j];
            }
        }
    }
    console.log(Total-sum);
    
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