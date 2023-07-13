//FORM

const parking = (k, ar, dep) => {
  ar = ar.sort((a, b) => a - b);
  dep = dep.sort((a, b) => a - b);

  let i = 1;
  let j = 0;
  let count = 1;
  let ans = 1;
  while (i < ar.length && j < ar.length) {
    if (ar[i] <= dep[j]) {
      count++;
      i++;
    } else {
      count--;
      j++;
    }
    ans = Math.max(ans, count);
  }

  ans <= k ? console.log("Possible") : console.log("Not Possible");
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let k = +input[0];
  let ar = input[1].trim().split(" ").map(Number);
  let dep = input[2].trim().split(" ").map(Number);
  parking(k, ar, dep);
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

//WORD

function word(n, m, mat, str) {
  for (i = 0; i <= n - 1; i++) {
    for (j = 0; j <= m - 1; j++) {
      if (mat[i][j] == str[0] && search(i, j, mat, str, (count = 0))) {
        return true;
      }
    }
  }
  return false;
}

function search(i, j, mat, str, count) {
  if (
    i < 0 ||
    j < 0 ||
    i == mat.length ||
    j == mat[0].length ||
    count == str.length ||
    mat[i][j] == 0
  ) {
    return false;
  }

  if (mat[i][j] !== str[count]) {
    return false;
  }

  if (mat[i][j] == str[count] && count == str.length - 1) {
    return true;
  }

  let temp = mat[i][j];
  mat[i][j] = 0;

  let ans =
    search(i + 1, j, mat, str, count + 1) ||
    search(i, j + 1, mat, str, count + 1) ||
    search(i - 1, j, mat, str, count + 1) ||
    search(i, j - 1, mat, str, count + 1);

  mat[i][j] = temp;

  return ans;
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  let [n, m] = input[0].trim().split(" ").map(Number);
  let line = 1;
  let mat = [];
  for (let i = 0; i <= n - 1; i++) {
    let a = input[line].trim().split(" ");
    line++;
    mat.push(a);
    a = [];
  }
  let str = input[line];
  let ans = word(n, m, mat, str);

  ans ? console.log("YES") : console.log("NO");
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
//TRIMMED
function main(n, a) {
  a = a.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    a.shift();
    a.pop();
  }
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += +a[i];
  }
  console.log(Math.floor(sum / a.length));
}
function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let tc = input[0];
  let l = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[l++];
    let a = input[l++].split(" ").map(Number);
    main(n, a);
  }
}

function TrimmedMean(N, arr) {
  arr = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = N; i < arr.length - N; i++) {
    sum += arr[i];
  }
  console.log(Math.floor(sum / (3 * N)));
}
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (z = 0; z < tc; z++) {
    let N = +input[line].trim();
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    TrimmedMean(N, arr);
  }
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

//BALLS

//!!!!!!!!!!!!
function main(n, a) {
  a = a.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    a.shift();
    a.pop();
  }
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += +a[i];
  }
  console.log(Math.floor(sum / a.length));
}
function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let tc = input[0];
  let l = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[l++];
    let a = input[l++].split(" ").map(Number);
    main(n, a);
  }
}
