function check(n, m, arr) {
  let vars = [];
  for (let i = 0; i <= n - 1; i++) {
    vars.push(`member${i + 1}`);
  }
  let obj = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!obj[vars[i]]) {
      obj[vars[i]] = arr[i];
    }
  }

  let ans_obj = {};
  let max = 0;
  let team = 0;
  let sen = 1;
  for (let i = 0; i <= vars.length - 1; i++) {
    let hus = [...obj[`${vars[i]}`]];
    let ans = new Array(m).fill(0);

    for (let k = i + 1; k <= n - 1; k++) {
      if (k == i) {
        continue;
      }
      let wife = [...obj[`${vars[k]}`]];
      ans = new Array(m).fill(0);
      for (let j = 0; j <= m - 1; j++) {
        if (hus[j] == 1 || wife[j] == 1) {
          ans[j] = 1;
        }
      }
      let count = 0;

      //  console.log(ans)
      for (let p = 0; p <= ans.length - 1; p++) {
        if (ans[p] == 1) {
          count++;
        }
      }
      //console.log(count)
      ans_obj[sen++] = count;
    }
  }

  for (let i in ans_obj) {
    if (ans_obj[i] >= max) {
      max = ans_obj[i];
    }
  }

  for (let i in ans_obj) {
    if (ans_obj[i] == max) {
      team++;
    }
  }
  console.log(max);
  console.log(team);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let arr = [];
  let l = 1;
  for (let i = 0; i <= n - 1; i++) {
    let ar = input[l++].trim().split("").map(Number);
    arr.push(ar);
    ar = [];
  }

  check(n, m, arr);
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

//const cl = console.log.bind(this);
