// Rat in a maze Ended
// Description

// Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.

// Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.


// Input
// Input Format
// The first line contains an integer n - the dimension of the maze

// The next n lines each contain n integers

// The ith line contains n integers, the jth of which is m[i][j]

// Constraints
// 2 <= n <= 5

// 0 <= m[i][j] <= 1


// Output
// Output Format
// Print the list of paths in lexicographically increasing order, if there is no possible path print -1.


// Sample Input 1 

// 4
// 1 0 0 0
// 1 1 0 1
// 1 1 0 0 
// 0 1 1 1
// Sample Output 1

// DDRDRR DRDDRR
// Hint

// The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.

let bag=""
 
function ratInAMaze(mtr,row,col,str){
    // console.log(mtr,row,col,str)
 if(row<0 || row>=mtr.length|| col<0 || col>=mtr.length|| mtr[row][col]==0){
     return ;
 }
 if(row==mtr.length-1 && col==mtr[0].length-1){
    //   console.log(str)
    bag+=str+" ";
     return ;
 }
  mtr[row][col]=0
  ratInAMaze(mtr,row+1,col,str+"D")
  ratInAMaze(mtr,row,col-1,str+"L")
  ratInAMaze(mtr,row,col+1,str+"R")
  ratInAMaze(mtr,row-1,col,str+"U")
  mtr[row][col]=1;
}
  function runProgram(input){
    input=input.trim().split("\n");
  let n=+input[0]
    let l=1;
    let mtr=[];
    for(let i=0; i<n; i++){
        mtr.push(input[l++].trim().split(" ").map(Number));
    }
  ratInAMaze(mtr,0,0,"");
  if(bag==""){
      console.log(-1);
  }else{
  console.log(bag);
  }
}
// var mtr=[[1,0 ,0, 0],[1, 1, 0 ,1],[1 ,1, 0, 0 ],[0 ,1 ,1, 1]];
// ratInAMaze(mtr,0,0,"");
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