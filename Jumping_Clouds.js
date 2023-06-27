function main(n, arr) {
  // console.log(n,arr);
  let jump = 0;
  let i = 0;
  while (i < n - 1) {
    if (arr[i + 2] !== 1) {
      i = i + 2;
      jump++;
    } else {
      i = i + 1;
      jump++;
    }
  }
  console.log(jump);
}
function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let tc = input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = input[line++];
    let arr = input[line++].split(" ").map(Number);
    main(n, arr);
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
