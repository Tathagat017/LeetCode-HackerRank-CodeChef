// Chocolate Drink Ended
// Description

// Since December month is going on, winter is at its peak so Pablo wants to drink hot chocolate milk, but there is a problem chocolate milk is inside a special container.

// The special container is divided into some slots these slots have different heights so the areas of these slots are also different.ojQues1.png

// Given, an array A that have element A[i] which represent the length of different slot you need to find the best slot for Pablo so he can get the maximum chocolate drink


// Input
// The First line of input contains an integerN, which is the number of integers present in the array
// The Second line of input containsNspace-separated integers which are integers of the arrayA

// Output
// Print the maximum area

// Sample Input 1 

// 9
// 1 8 6 12 5 4 8 9 13
// Sample Output 1

// 60
// Hint

// level of slots are different example 1st slot length is 1 2nd slot length is 8 , 3rd slot length is 6 and so on... last slot i.e 9th slot length is 13. we need to find the maximum area between two slot which can hold the chocolate drink
// for example take 1st and last slot the height is 1 and 13 respectively

// max area = h(min) X width = 1 X (9-1) = 8 we have to choose a minimum height other wise drink will overflow

// ojHint1.png

// *

// If we choose the 4rth and the 9th slot the maximum area will be

// maximum area = h(min) x width

// = 12 x (9-5)

// = 60

// this is the maximum area we can get, Thus the answer is 60

function runProgram(input){
    input=input.split("\n");
    let N=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    max(N,arr);
}
function max(N,A){
   let maxArea = 0;
   let maxWidth = 0;
   for (let i = 0; i < A.length; i++) {
       for (let j = i+1; j <= A.length ; j++) {
           let width = j - i;
           let height = Math.min(A[i], A[j]);
           let area = width * height;
           if (area > maxArea) {
               maxArea = area;
               maxWidth = width;
           }
       }
   }
   // return [maxArea, maxWidth];
   console.log(maxArea)
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
