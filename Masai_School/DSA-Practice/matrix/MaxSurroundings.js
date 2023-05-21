function runProgram(input){
    input=input.split("\n");
   let [n,m]=input[0].split(" ").map(Number);
    let l=1;
    let mtr=[];
    for(let i=0; i<n; i++){
        mtr.push(input[l++].split(" ").map(Number));
    }
    let ans= Maximum_Surrounding(n,m,mtr);
    console.log(ans)
}
 function  Maximum_Surrounding(n,m ,A){
  let B = []
  
  //for  create array ->[[ 0 0 0] [0 0 0] [ 0 0 0] ]
  for(let i=0; i<n; i++){
      let arr = new Array(m).fill(0)
      B.push(arr)
  }
  console.log(B)
  //logic to check  >E  <W  ^N South
  for(let i=0; i<n; i++){
      for(let j=0; j<m; j++){
         let EWNS=[] 
         
         if(i+1<n){
             EWNS.push(A[i+1][j])
         }
         if(j+1<m){
             EWNS.push(A[i][j+1])
         }
         if(i-1>=0){
             EWNS.push(A[i-1][j])
         }
         if(j-1>=0){
             EWNS.push(A[i][j-1])
         }
         let max = Math.max(...EWNS)
         B[i][j]=max
         
      }
  }
 return B
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