//all elements to its left are smaller and all elements to its right larger than it in the array.
function check(n, ar) {
  let c = true;
  for (let i = 1; i <= n - 1; i++) {
    c = true;
    // console.log(i)
    for (let j = i - 1; j >= 0; j--) {
      // console.log("left",ar[j],ar[j-1])
      if (ar[j] > ar[i]) {
        c = false;
        break;
      }
    }

    for (let k = i + 1; k <= n - 1; k++) {
      // console.log("right",ar[k],ar[k-1]) ;
      if (ar[i] > ar[k]) {
        c = false;
        break;
      }
    }

    if (c) {
      return console.log(ar[i]);
    }
  }

  return console.log(-1);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let ar = input[1].trim().split(" ").map(Number);
  check(n, ar);
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
