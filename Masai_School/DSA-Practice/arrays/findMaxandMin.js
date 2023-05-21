// Smallest and Largest of all Ended
// Description

// Given an array, A, of N integers, print the smallest and largest element present in the array

// YOU MUST NOT USE ANY BUILT-IN FUNCTION


// Input
// Input Format

// The first line contains an integer, N (the number of integers in A). The second line contains N space separated integers describing A.

// Constraints

// N<100


// Output
// Output Format

// Print 2 integers in different lines where first integer represents the minimum of all elements and second integer represents the maximum of all


// Sample Input 1 

// 4
// -2 0 8 4
// Sample Output 1

// -2
// 8

function runProgram(input){
    input=input.split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(' ').map(Number);
    MinMax(n,arr);
}
function MinMax(n,arr){
      let min=Infinity; let max=-Infinity;
     
     for(let i=0; i<n; i++){
         if(arr[i]<min){
             min=arr[i];
         }
             if(arr[i]>max){
             max=arr[i];
         }
     }
     console.log(min)
     console.log(max)
     
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