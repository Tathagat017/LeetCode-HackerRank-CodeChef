// Walk in Park 
// 1
// 3 4
// RRDR
// LLUD
// LLLL

function myfunction(N, M, arr) {
    let i = 0,
      j = 0;
    let count = 0;
  
    let max = 1;
    while (i >= 0 && i < N && j >= 0 && j < M && max <= N * M) {
      if (arr[i][j] == "R") {
        arr[i][j] = 0;
        j++;
        count++;
        
      } else if (arr[i][j] == "L") {
        arr[i][j] = 0;
        j--;
  
        count++;
      } else if (arr[i][j] == "U") {
        arr[i][j] = 0;
        i--;
  
        count++;
      } else if (arr[i][j] == "D") {
        arr[i][j] = 0;
        i++;
  
        count++;
      } else if (arr[i][j] == 0) {
        break;
      }
      max++;
    }
    if (i == N || j == M || i < 0 || j < 0) {
      console.log(count);
    } else {
      console.log(count);
    }
  }
  
  function runProgram(input) {
    // Write Code Here
    input = input.split("\n");
    tc = +input[0];
    line = 1;
    for (let i = 0; i < tc; i++) {
      size = input[line].split(" ").map(Number);
      N = +size[0];
      M = +size[1];
      var arr = [];
      line++; //2
      for (let j = line; j < line + N; j++) {
        arr.push(input[j].split(""));
      }
      line += N;
      myfunction(N, M, arr);
    }
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
  