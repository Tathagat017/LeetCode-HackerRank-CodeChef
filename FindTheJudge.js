// FIND THE JUDGE
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let line = 1;
  let person = [],
    trust = [];
  for (let i = 0; i <= m - 1; i++) {
    let [p, t] = input[line].trim().split(" ").map(Number);
    line++;
    person.push(p);
    trust.push(t);
  }

  let judge = trust[0];

  let present = trust.every(function (el, ind) {
    if (el == judge && person[ind] !== judge) {
      return true;
    }
  });

  present ? console.log(judge) : console.log(-1);
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
//!Another approach
function check(ar) {
  // console.log(ar);
  let obj = {};
  for (let i = 0; i <= ar.length - 1; i++) {
    if (obj[ar[i][1]] == undefined) {
      obj[ar[i][1]] = 1;
    } else {
      obj[ar[i][1]]++;
    }
  }
  let max = -Infinity;
  let take;
  for (let j in obj) {
    if (obj[j] > max) {
      max = obj[j];
      take = j;
    }
  }
  if (ar.length != max) {
    console.log(-1);
  } else {
    console.log(take);
  }
}

function runProgram(input) {
  let y = input.trim().split("\n");
  let x = y[0].trim().split(" ").map(Number);

  let people = +x[0];
  let loop = +x[1];

  let k = 0;
  let arr = [];
  for (let h = 1; h <= loop; h++) {
    k++;
    let s = y[k].trim().split(" ").map(Number);
    arr.push(s);
  }
  check(arr);
}
if (process.env.USERNAME === "") {
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
