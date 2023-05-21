// Follow The Knight Ended
// Description

// You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

// You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.

// Image


// Input
// Input Format

// Input will consist of three space seperated integers i,j and N

// Constraints

// N < 10


// Output
// Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.


// Sample Input 1 

// 3 3 1
// Sample Output 1

// 8

let board=[];
for(let i=0; i<10; i++){
    let arr=[];
    for(let j=0; j<10; j++){
        arr.push(0);
    }
    board.push(arr);
}
function Chess(board,row,col,N){
if(row<0 || row>=board.length || col<0 || col>=board.length){
    return ;
}
if(N==0){
    board[row][col]=1;
    return ;
}
Chess(board,row-2,col+1,N-1)
Chess(board,row-2,col-1,N-1)
Chess(board,row+2,col+1,N-1)
Chess(board,row+2,col-1,N-1)
Chess(board,row-1,col+2,N-1)
Chess(board,row+1,col+2,N-1)
Chess(board,row-1,col-2,N-1)
Chess(board,row+1,col-2,N-1)
}
function PrintBoard(board){
//  for(let i=0; i<10; i++){
//      console.log(board[i].join(" "));
//  }
 let count=0;
 for(let i=0; i<10; i++){
     for(let j=0; j<10; j++){
         if(board[i][j]==1){
             count++;
         }
     }
 }
 console.log(count);
}
function runProgram(input){
// Chess(board,2,2,1);
let [row,col,N]=input.trim().split(" ").map(Number);
Chess(board,row-1,col-1,N)
PrintBoard(board);
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

