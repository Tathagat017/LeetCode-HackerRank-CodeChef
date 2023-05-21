// Non Repetitive Substrings Ended
// Description

// Given a string S and a number K, find the number of substrings of length K such that each character in the substring is present only once.

// Note : The string contains special characters, capital letters, small letters

// Input
// Input Format

// The first line contains the number of testcases T

// For each testcase:

// The first line contains a string S

// The second line contains the number K

// Constraints

// 1<=T<=10

// 1<=length of S<=10^4

// 1<=K<=10^4


// Output
// For each testcase print the number of substrings of length K such that there are no repetitions in the subtring


// Sample Input 1 

// 1
// idwmdggom
// 2
// Sample Output 1

// 7
// Hint

// The valid substrings are : id dw wm md dg go om

function runProgram(input){
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0;i<tc; i++){
         let str = input[line++];
         let k = +input[line++];
        //  console.log(str,k);
         NonRepetitiveSubstrings(str,k);
   }
}
function  NonRepetitiveSubstrings(str,k){
    let n = str.length;
    let count=0;
    for(let i=0; i<=n-k; i++){
        let obj={};
         let found=0;
        let distinct=i;
        for(let j=0; j<k; j++){
            
        if(obj[str[distinct]] == undefined){
            obj[str[distinct]]=1;
            distinct++;
            found++;
           
           
        }else{
            break;
        }
        }
        if(found == k){
            count++;
        }
        
    }
    console.log(count);
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }