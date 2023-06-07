/*

Given two sorted arrays : 
array1 : increasing order of elements
array2 : decreasing order of elements

find the number of elements common to both sorted arrays
*/
function checkCommon(n, ar1, ar2) {
  let count = 0;

  let i = 0;
  let j = n - 1;
  while (i <= n - 1 && j >= 0) {
    if (ar1[i] == ar2[j]) {
      ar1[i] = "X";
      ar2[j] = "X";
      count++;
      i++;
      j--;
    }

    if (ar1[i] < ar2[j]) {
      i++;
    }

    if (ar1[i] > ar2[j]) {
      j--;
    }
  }

  console.log(count);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  let tc = +input[0];
  let line = 1;
  for (let i = 0; i <= tc - 1; i++) {
    let n = +input[line++];
    let ar1 = input[line++].trim().split(" ").map(Number);
    let ar2 = input[line++].trim().split(" ").map(Number);
    checkCommon(n, ar1, ar2);
  }
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
