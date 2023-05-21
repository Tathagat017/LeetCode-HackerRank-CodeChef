// Check Your Password Ended
// Description

// You are given the password of your Cryptolocker, and you have to find if the password is strong or not.

// The password contains small case English Characters, and integers between [0 - 9]
// A password is considered strong, if more than half of the characters in the password are English characters.
// Find that the password given to you, is strong or not
// Note: The length of the string will always be even


// Input
// The first line of the input containsT, the number of test cases

// The first line of each test case containsn, the length of the string

// The next line contains the string itself

// 1 <= T <= 10

// 1 <= N <= 10^6


// Output
// For each test case, printStrong, if the password is strong, else, printWeak, if the password is not strong


// Sample Input 1 

// 2
// 6
// aa1234
// 6
// abcd12
// Sample Output 1

// Weak
// Strong
// Hint

// In the first test case, the password isaa1234. The number of characters in the string is 2, which is less than half the length of the string. Therefore, the password isWeak

// In the second test case, the password isabcd12. The number of characters in the string is 4, which is more than half the length of the string. Therefore, the password isStrong

function password(N,str){
    //  console.log(str);
  let alpha="abcdefghijklmnopqrstuvwxyz";
     let count=0;
for(let i=0; i<N; i++){
    for(let j=0; j<alpha.length; j++){
        if(str[i]===alpha[j]){
            count++;
            break;
        }
    }
}
// console.log(count)
 if(count!=N && count>(N/2)){
     console.log("Strong");
 }else{
     console.log("Weak");
   }
 }
 
 function runProgram(input){
     input=input.trim().split('\n')
     let tc=input[0];
     let line=1;
for(let i=0; i<tc; i++){
    let N=+input[line];
    line++;
    let str=input[line];
    line++;
    password(N,str);
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