// How much rain water is trapped? Ended
// Description

// Givennnon-negative integers representing an elevation map where the width of each bar is 1, calculate how much rain water will be trapped after it rains.


// Input
// Input Format

// First line contains T the number of test cases

// Second line contains N the size of the array

// Third line contains N space separated integers

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10e5

// 0 <= a[i] <= 1000


// Output
// Print a single integer, the amount of rain water trapped


// Sample Input 1 

// 2
// 5
// 3 2 0 4 6
// 7
// 7 0 3 6 2 3 5
// Sample Output 1

// 4
// 14

function runProgram(input){
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let n=+input[l++];
        let arr=input[l++].trim().split(' ').map(Number);
      let ans=  rain(n,arr);
      console.log(ans);
    }
}
function rain(n,height){
   let totalAmount = 0;
        if (height == null || height.length == 0) return totalAmount;

         let leftHighest =  [];
         leftHighest[0] = 0;

        for (let i = 0; i < height.length; i++) {
             let lh = height[i];
            leftHighest[i + 1] = Math.max(leftHighest[i], lh);
        }

        let rightHighest = 0;
        for (let i = height.length - 1; i >= 0; i--) {
        let rh = height[i];
            rightHighest = Math.max(rightHighest, rh);
            totalAmount += Math.min(rightHighest, leftHighest[i]) > rh ?
                    Math.min(rightHighest, leftHighest[i]) - rh : 0;
        }
        return totalAmount;
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