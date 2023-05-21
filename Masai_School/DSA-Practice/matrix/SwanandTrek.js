// //  const matrix = [[5, 6, 3, 2], [9, 8, 7, 4], [4, 5, 6, 7], [3, 2, 1, 8]];
 

function isValid(matrix, x, y) {
    return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length;
}

function findNext(matrix, x, y) {
     const directions = {
    "north": {x: -1, y: 0},
    "south": {x: 1, y: 0},
    "east": {x: 0, y: 1},
    "west": {x: 0, y: -1}
  };
    let maxHeight = matrix[x][y];
    let next = {x: x, y: y};
    for (let direction of Object.keys(directions)) {
        let dx = directions[direction].x;
        let dy = directions[direction].y;
        if (isValid(matrix, x + dx, y + dy) && matrix[x + dx][y + dy] >= maxHeight) {
            if (matrix[x + dx][y + dy] > maxHeight) {
                maxHeight = matrix[x + dx][y + dy];
                next = {x: x + dx, y: y + dy};
            } else if (direction === "north") {
                next = {x: x + dx, y: y + dy};
            } else if (direction === "south" && next.x === x && next.y === y) {
                next = {x: x + dx, y: y + dy};
            } else if (direction === "east" && next.x === x && next.y === y) {
                next = {x: x + dx, y: y + dy};
            } else if (direction === "west" && next.x === x && next.y === y) {
                next = {x: x + dx, y: y + dy};
            }
        }
    }
    return next;
}

function findAllPaths(matrix, x, y) {
    const path = [];
  
    // base case: if current location is not valid or out of bounds
    if (!isValid(matrix, x, y)) {
        return;
    }

    // add current location to path
    path.push({x: x, y: y});
    
    // find next highest point
    let next = findNext(matrix, x, y);
    let nextX = next.x;
    let nextY = next.y;
    console.log(path)
}

function runProgram(input){
    input=input.split("\n");
    let n=+input[0];
    let line=1;
    let [x,y]=input[line++].split(" ").map(Number);
        let mtr=[];
    for(let i=0; i<n; i++){
         mtr.push(input[line++].split(" ").map(Number));
        }
       findAllPaths(mtr,x,y)
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