function rowGame(n, m, arr) {
  let first = new Set();
  for (let i = 0; i <= m - 1; i++) {
    first.add(arr[0][i]);
  }

  let first_array = Array.from(first);
  let j = 1;

  while (j <= n - 1) {
    let each_el = 0;
    while (each_el <= first_array.length - 1) {
      if (!arr[j].includes(first_array[each_el])) {
        first.delete(first_array[each_el]);
      }

      each_el++;
    }
    j++;
  }

  console.log(first.size);
}

//more optimized version
let row = (n, m, arr) => {
  let rowOne = [];
  for (let i = 0; i <= m - 1; i++) {
    rowOne.push(arr[0][i]);
  }

  rowOne = [...new Set(rowOne)];

  let rows = [];

  for (let i = 1; i <= n - 1; i++) {
    let rowS = [];
    for (let j = 0; j <= m - 1; j++) {
      rowS.push(arr[i][j]);
    }

    rowS = [...new Set(rowS)];
    rows.push(rowS);
  }
  let count = 0;

  for (let i = 0; i <= rowOne.length - 1; i++) {
    if (rows.every((el) => el.includes(rowOne[i]))) {
      count++;
    }
  }

  console.log(count);
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let t = +input[0];
  let l = 1;
  while (t > 0) {
    let [n, m] = input[l++].trim().split(" ").map(Number);
    let arr = [];
    for (let i = 0; i <= n - 1; i++) {
      let a = input[l++].trim().split(" ").map(Number);
      arr.push(a);
      a = [];
    }

    row(n, m, arr);

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
