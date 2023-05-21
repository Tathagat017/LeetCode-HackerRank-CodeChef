// 2
// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12 


function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let [N,M]=input[l++].split(" ").map(Number);
        let mtr=[];
        for(let i=0; i<N; i++){
            mtr.push(input[l++].split(" ").map(Number));
        }
        fun(N,M,mtr);
    }
 }
 function fun(N,M,mtr){
     // console.log(N,M,mtr);
     let left=0, right=M-1,top=0,bottom=N-1;
     let count=0; let bag="";
     while(count<N*M){
         // top to btm 
         for(let i=top; i<=bottom; i++){
             bag+=mtr[i][left]+" ";
             count++;
         }
         left++;
         
         // left to right 
         for(let j=left; j<=right; j++){
             bag+=mtr[bottom][j]+" ";
             count++;
         }
         bottom--;
     }
     console.log(bag);
 }
 
 if (process.env.USER === "") {
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
  