function check(n, a, d) {
  let count = 0;
  for (let i = 0; i <= a.length - 1; i++) {
    if (i == 0 && a[i] >= d[i]) {
      count++;
    }

    if (a[i] - a[i - 1] >= d[i]) {
      count++;
    }
  }

  console.log(count);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  let t = +input[0];
  let l = 1;
  while (t > 0) {
    let n = +input[l++];
    let a = input[l++].trim().split(" ").map(Number);
    let d = input[l++].trim().split(" ").map(Number);
    check(n, a, d);
    t--;
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
