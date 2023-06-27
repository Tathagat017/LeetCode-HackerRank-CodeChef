function main(arr, n) {
  let j = 0;
  while (j < n) {
    while (arr[0] == 0 && arr[arr.length - 1] == 1) {
      arr.pop();
      arr.shift();
    }
    while (arr[0] == 1 && arr[arr.length - 1] == 0) {
      arr.pop();
      arr.shift();
    }
    j++;
  }
  console.log(arr.length);
}
function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let tc = input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = input[line++];
    let arr = input[line++].split("").map(Number);
    main(arr, n);
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
