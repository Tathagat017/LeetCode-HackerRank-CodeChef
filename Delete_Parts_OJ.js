function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let ar = input[1].split("");
  let [l, r] = input[2].trim().split(" ").map(Number);
  str(n, l, r, ar);

  function str(n, l, r, ar) {
    for (let i = l; i <= r; i++) {
      ar[i] = "X";
    }

    ar = ar.filter((el) => el !== "X");

    console.log(ar.join(""));
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
