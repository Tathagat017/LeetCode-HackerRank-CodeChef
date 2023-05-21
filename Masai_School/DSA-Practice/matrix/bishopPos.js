// Where's ̶W̶a̶l̶d̶o̶ Bishop? Ended
// Description

// Ankush has an 8×8 chessboard whose rows are numbered from 1 to 8 from top to bottom and whose columns are numbered from 1 to 8 from left to right.

// Ankush has placed exactly one bishop on the chessboard.

// The bishop is not placed on the edges of the board. (In other words, the row and column of the bishop are between 2 and 7, inclusive.)

// The bishop attacks in all directions diagonally, and there is no limit to the distance which the bishop can attack.

// Note: that the cell on which the bishop is placed is also considered attacked.

// Ankush has marked all squares the bishop attacks, but forgot where the bishop was!

// Help Ankush find the position of the bishop.

// Capture.PNG

// Hint : The position of the Bishop can be identified by the point where 2 diagonals meet

// Input
// Input Format
// The first line contains the number of test cases t.

// Each test case consists of 8 lines, each containing 8 characters.

// Each of these characters is either '#' or '.', denoting a square under attack and a square not under attack, respectively.

// Constraints
// 1 <=t<= 30


// Output
// Output Format
// For each test case, output two integers r and c (2≤r,c≤7) — the row and column of the bishop.

// The input is generated in such a way that there is always exactly one possible location of the bishop that is not on the edge of the board.


// Sample Input 1 

// 2
// .....#..
// #...#...
// .#.#....
// ..#.....
// .#.#....
// #...#...
// .....#..
// ......#.
// #.#.....
// .#......
// #.#.....
// ...#....
// ....#...
// .....#..
// ......#.
// .......#
// Sample Output 1

// 4 3
// 2 2
// Hint

// The first test case is pictured in the statement.

// Since the bishop lies in the intersection row 4 and column 3, the correct output is 4 3.
 
function runProgram(input){
    input=input.split("\n");
    let tc=+input[0];
     let line=1;
   for(let i=0; i<tc; i++){
       let mtr=[];
       for(let j=0; j<8; j++){
           mtr.push(input[line].split(""))
           line++;
       }
    Bishop(mtr);

   }
}

function Bishop(mtr){ 
function ispossible( r, c)
{
   return (r>=0 && r<8 && c>=0 && c<8);
}

   for(let i=0;i<8;i++)
   {
       for(let j=0;j<8;j++)
       {
           if(mtr[i][j]=='#') 
           {
               if(ispossible(i-1,j-1) && mtr[i-1][j-1]=='#')  
                   if(ispossible(i+1,j-1) && mtr[i+1][j-1]=='#')
                       if(ispossible(i-1,j+1) && mtr[i-1][j+1]=='#')
                           if(ispossible(i+1,j+1) && mtr[i+1][j+1]=='#')
                           {
                               // let l=i+1;
                               // let m=j+1
                                console.log((i+1)+" "+(j+1))
                           }
               
           }
       }
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
 