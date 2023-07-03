function subs(n, s) {
  let ans = 0;

  for (let i = 0; i <= n - 1; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (s[i] == "a" && s[j] == "a") {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }
  return console.log(ans);
}

function runProgram(input) {
  // Write code here
  let i = input.trim().split("\n");
  let n = +i[0];
  let s = i[1];
  subs(n, s);
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
