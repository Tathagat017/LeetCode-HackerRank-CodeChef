function water(arr, n) {
  let max = -Infinity;
  let i = 0;
  let j = n - 1;

  while (i < j) {
    let min = Math.min(arr[i], arr[j]);
    let a = (j - i) * min;
    max = Math.max(max, a);
    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  console.log(max);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let t = +input[0];
  let l = 1;
  for (let i = 0; i <= t - 1; i++) {
    let n = +input[l++];
    let arr = input[l++].trim().split(" ").map(Number);

    water(arr, n);
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
