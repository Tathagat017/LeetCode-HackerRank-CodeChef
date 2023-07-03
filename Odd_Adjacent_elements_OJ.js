function runProgram(input) {
  let x = input.trim().split("\n");
  let y = x[0].trim().split(" ").map(Number);
  let row = y[0];
  let col = y[1];
  let k = 0;
  let arr = [];
  let arr1 = [];
  for (let h = 1; h <= row; h++) {
    k++;
    let kk = x[k].trim().split(" ").map(Number);
    arr.push(kk);
    arr1.push(kk);
  }
  check(row, col, arr, arr1);
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
function check(r, c, ar, ar1) {
  for (let i = 0; i < r; i++) {
    let row = "";
    for (let j = 0; j < c; j++) {
      let count = 0;

      if (i > 0 && ar[i - 1][j] % 2 !== 0) {
        count++;
      }
      if (i < r - 1 && ar[i + 1][j] % 2 !== 0) {
        count++;
      }
      if (j > 0 && ar[i][j - 1] % 2 !== 0) {
        count++;
      }
      if (j < c - 1 && ar[i][j + 1] % 2 !== 0) {
        count++;
      }

      row += count >= 2 ? -ar[i][j] + " " : ar[i][j] + " ";
    }
    console.log(row.trim());
  }
}
