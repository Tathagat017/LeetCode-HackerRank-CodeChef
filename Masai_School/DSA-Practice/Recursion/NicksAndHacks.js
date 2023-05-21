// Nick and Hacks Ended
// Description

// Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

// Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?


// Input
// Input Format :

// The first line of the input contains a single integer T denoting the number of test cases.

// The description of T test cases follows.The first and only line of each test case contains a single integer N.

// Constraints :

// 1 <= T <= 100

// 1 <= N <= 10^12


// Output
// For each test case, print a single line containing the string "Yes" if you can make exactly N rupees or "No" otherwise.


// Sample Input 1 

// 5
// 1
// 2
// 10
// 25
// 200
// Sample Output 1

// Yes
// No
// Yes
// No
// Yes
// Hint

// Output Explanation :

// In the last case Nick can get Rs. 200 by first using 10x hack and then using 20x hack once.

// 1 -> 10 -> 200

function runProgram(input){
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    let cur=1;
    for(let i=0; i<tc; i++){
      let N=+input[l++]
      let ans= NicksAndHacks(cur,N);
       if(ans===true){ 
           console.log("Yes")
           }else{
         console.log("No");
           }
    }
  }
  function NicksAndHacks(c,N){
      if(c==N){
          return true;
      }
      if(c>N){
          return false;
      }
      
      return NicksAndHacks((c*10),N)|| NicksAndHacks((c*20),N)
   
      
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