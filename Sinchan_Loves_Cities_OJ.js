function city(n, q, arr) {
  let min_dif = 0;

  arr = arr.sort((a, b) => a - b);

  return console.log(Math.max(arr[arr.length - 1] - arr[0], min_dif) * q);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let t = +input[0];
  let l = 1;
  while (t > 0) {
    let [n, q] = input[l++].trim().split(" ").map(Number);
    let arr = input[l++].trim().split(" ").map(Number);
    city(n, q, arr);
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
