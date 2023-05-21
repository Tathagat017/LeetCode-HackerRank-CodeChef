// New Year and Pyramid Ended
// Description

// You have decided to build a pyramid of stones on this new year. The simple rule is that the top level of the pyramid must consist of 1 stone, the second level must consist of 1 + 2 = 3 stones, the third level must have 1 + 2 + 3 = 6 stones, and so on.

// Effectively, the i-th level of the pyramid contains 1 + 2 + ... + (i - 1) + i stones.

// You have got n stones and have to build a pyramid from them.

// Team Masai wants to know what is the maximum height of the pyramid that you can make using the given stones.


// Input
// Input Format

// The first line contains integer n.

// Constraints

// n <= 10000


// Output
// Print the maximum possible height of the pyramid.


// Sample Input 1 

// 25
// Sample Output 1

// 4

function runProgram(input){
    input=+input;
    pyramid(input);
}
function pyramid(n){
 let x=0;
 let sum=0;
 for(let i=1; i<n && x<n; i++){
     x=(i*(i+1)*(i+2))/6;
     
     if(x<=n){
         sum++;
     }
 }
 console.log(sum);
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