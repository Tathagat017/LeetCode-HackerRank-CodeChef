// Duplicates encounter Ended
// Description

// Given a string of lowercase characters in range ascii[‘a’..’z’].

// You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

// For instance, the string aab could be shortened to b in one operation.

// Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

// Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).


// Input
// Input Format

// First and the only line contains string

// Constraints

// Length of string < 1000


// Output
// Output Format

// Length of string < 1000


// Sample Input 1 

// aaabccddd
// Sample Output 1

// abd

function Reduce_string(str){
    let N=str.length;
   let stack=[]; 
for(let i=0; i<N; i++){
    while(stack.length!=0 && stack[stack.length-1]==str[i]){
        stack.pop();
        i++;
    } 
     stack.push(str[i])
  }
  if(stack[0]==undefined){
     console.log("Empty String")
  }else{
      console.log(stack.join(""))
  }
}
function runProgram(input){
    Reduce_string(input);
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