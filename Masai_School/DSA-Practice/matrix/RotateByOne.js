function runProgram(input) {
    input=input.split("\n");
    let N=+input[0];
    let mtr=[];
    let l=1;
    for(let i=0; i<N; i++){
        mtr.push(input[l++].split(" ").map(Number));
    }
    let Mtr=RotateElements(N,mtr);
    for(let i=0; i<N; i++){
        let bag="";
       for(let j=0; j<N; j++){
           bag+=Mtr[i][j]+" ";
       }
       console.log(bag);
    }
    
 }
 function RotateElements(N,mat){
 //   def rotateMatrix(mat): #clockwise rotation of matrix where each element is shifted by one place 
     if(!mat.length){
         return
     }
    let top = 0,
     bottom = N-1,
     left = 0,
     right = N-1,
     prev,curr
     while(left < right && top < bottom){
         prev = mat[top+1][left]
         for(let i=left; i<=right; i++){
             curr = mat[top][i]
             mat[top][i] = prev
             prev = curr
         }
         top++;
         // top to btm
         for(let i=top; i<=bottom; i++){
             curr = mat[i][right]
             mat[i][right] = prev
             prev = curr
         }
         right--;
         for(let i=right; i>=left; i--){ 
             curr = mat[bottom][i]
             mat[bottom][i] = prev
             prev = curr
         }
         bottom--;
         for(i=bottom; i>=top; i--){
             curr = mat[i][left]
             mat[i][left] = prev
             prev = curr
         }
         left++;
 }
    return mat;
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
  