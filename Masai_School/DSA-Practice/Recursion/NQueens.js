function displayBoard(board){
    for(let i=0; i<board.length; i++){
        console.log(board[i].join(" "))
    }
    console.log("---------")
}
 var count=0;
function NQueens(board,row,N){
    if(row==N){
        displayBoard(board);
        count++;
        return;
    }
    
    for(let i=0; i<N; i++){
        if(checkSafePosition(board,row,i)==true){
            board[row][i]=1;
            NQueens(board,row+1,N);
            board[row][i]=0;
        }
    }
}

function checkSafePosition(board,row,col){
    //vertically upwards
    for(let i=row; i>=0; i--){
        if(board[i][col]==1) return false;
    }
    //diagonal up right
    for(let i=row, j=col; i>=0 && j<board.length; i--,j++){
        if(board[i][j]==1) return false;
    }
    
    for(let i=row,j=col; i>=0 && j>=0; i--,j--){
        if(board[i][j]==1) return false;
    }
    return true;
}

function runProgram(input){
input=input.trim().split("\n")
let board=[];
let N=+input 
for(let i=0; i<N; i++){
    let temp=[];
    for(let j=0; j<N; j++){
        temp.push(0);
    }
    board.push(temp);
}

NQueens(board,0,N) 
console.log(count);
 
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


