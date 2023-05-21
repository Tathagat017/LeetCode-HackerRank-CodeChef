function Subsequence(n,m,str1,str2){
    // console.log(n,m,str1,str2)
    for(let i=0;i<m;i++){
    if(str2[i]===str1[0]){
        str1.shift()
    }
    }
    if(str1.length==0){
        console.log("YES")
    }else{
        console.log("NO")
    }
}




function runProgram(input){
  input=input.trim().split("\n")
  let line=0
  let [n,m]=input[line].trim().split(" ").map(Number)
  line++
  let str1=input[line].trim().split("")
  line++
  let str2=input[line].trim().split("")
  line++
Subsequence(n,m,str1,str2)
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