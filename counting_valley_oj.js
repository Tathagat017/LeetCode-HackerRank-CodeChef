function valley(n, s) {
  let up = 0;
  let down = 0;
  let sea_level = 0;
  let valley = 0;
  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] == "U") {
      up += 1;
    }

    if (s[i] == "D") {
      down += 1;
    }

    sea_level = up - down;

    if (sea_level == 0 && s[i] == "U") {
      valley++;
    }
  }

  console.log(valley);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let s = input[1];
  valley(n, s);
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
