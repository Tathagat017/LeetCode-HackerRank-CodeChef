// Dropping Balls Ended
// Description

// Ansh has a new game called Dropping Balls. Initially, Ansh has a grid a of size n×mEach cell (x,y) contains an integer a(x,y) denoting the direction of how the ball will move.

// a(x,y)=1— the ball will move to the right (the next cell is (x,y+1));
// a(x,y)=2— the ball will move to the bottom (the next cell is (x+1,y));
// a(x,y)=3— the ball will move to the left (the next cell is (x,y−1)).
// Every time a ball leaves a cell (x,y), the integer a(x,y) will change to 2. Ansh will drop k balls sequentially, each starting from the first row, and on the c1,c2,…,ck-th (1≤ci≤m) columns.

// Determine in which column each ball will end up in (position of the ball after leaving the grid).


// Input
// Input Format

// The first line contains the number of testcases, T

// For each testcase:

// The first line contains the number of rows and columns, n and m and the number k

// The next n line contains the values of a(x,y)

// The last line contains k integers, the columns at which the ith ball is dropped

// Constraints

// 1<=T<=10

// 1<=n,m<=1000

// 1<=k<=10^4

// 1<=a(x,y)<=3


// Output
// For each testcase output k integers — the i-th integer denoting the column where the i-th ball will end.


// Sample Input 1 

// 1
// 5 5 3
// 1 2 3 3 3
// 2 2 2 2 2
// 2 2 2 2 2
// 2 2 2 2 2
// 2 2 2 2 2
// 1 2 1
// Sample Output 1

// 2 2 1 

function droppingBalls(a, k, c,n,m) {
    let result = [];
    for (let i = 0; i < k; i++) {
        let x = 0;
        let y = c[i] - 1;
        while (x >= 0 && x < n && y >= 0 && y < m) {
            let direction = a[x][y];
            if (direction == 1) {
                a[x][y]=2;
                y++;
            } else if (direction == 2) {
                x++;
            } else if(direction==3){
                a[x][y]=2;
                y--;
            }
        }
        result.push(y+1);
    }
    // return result;
    console.log(result.join(" "));
}

function runProgram(input){
    input=input.split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        let [n,m, k]=input[line++].trim().split(" ").map(Number);
        let mtr=[];
        for(let j=0; j<n; j++){
            mtr.push(input[line++].trim().split(" ").map(Number));
        }
        let c=input[line++].trim().split(" ").map(Number);
        droppingBalls(mtr, k, c,n,m)
        // console.log(n,m,k,c)
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