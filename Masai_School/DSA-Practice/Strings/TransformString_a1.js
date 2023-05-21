// Transform String Ended
// Description

// You are given string s, you have to convert string in the required format explained below.

// Suppose you are given a string s = aabbbcdd

// So you have to print it as a2b3c1d2.

// Means you have to convert repeatition of characters in numeric form.


// Input
// Input Format

// The first line contains integer numbers N - the length of the string.

// The second line contains the string s.

// Constraints

// 1 <= N <= 100


// Output
// Print the required string.


// Sample Input 1 

// 9
// abbaccddd
// Sample Output 1

// a1b2a1c2d3
// Hint

// Given string is abbaccddd

// So we can see that a comes 1 time, b comes 2 times, again a comes 1 time, c comes 2 times and d comes 3 times.

function runProgram(input){
    input=input.split("\n");
    let N=+input[0];
    let str=input[1];
    Transform(N,str);
 }
 function Transform(N,str){
     let ans="";
     let que=str.split('')
     // console.log(que)
 for(let i=1; i<=N; i++){
     let count=1;
     while(str[i]==que[0]){
         count++;
         que.shift();
         i++;
     }
     if(count==1){
         ans+=que.shift()+1;
     }else if(count>1){
         ans+=que.shift()+count;
     }
   }
   console.log(ans);
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