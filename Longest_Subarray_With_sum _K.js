let sumLess = (n, k, a) => {
  if (n == 1) {
    if (a[0] <= k) {
      return console.log(1);
    }
  }
  let sum = a[0];
  let i = 0;
  let j = i + 1;
  let max = 1;
  let ans = 1;
  let test = [];
  // 1 2 3 4 5
  while (i <= n - 2) {
    sum += a[j];

    if (sum <= k) {
      ans++;
      j++;

      if (ans >= max) {
        max = ans;
      }
    } else {
      i += 1;
      ans = 1;
      j = i + 1;
      sum = a[i];
    }
  }

  return console.log(max);
};

function runProgram(input) {
  // Write code here
  let inp = input;
  inp = inp.trim().split("\n");
  let t = +inp[0];
  let l = 1;
  while (t > 0) {
    let [n, k] = inp[l++].trim().split(" ").map(Number);
    let a = inp[l++].trim().split(" ").map(Number);
    sumLess(n, k, a);
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
