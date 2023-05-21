function SquareSorting(n, ar) {
  let newA = ar.map((el, ind) => {
    if (el < 0) {
      return Math.pow(el, 2) + "";
    } else {
      return Math.pow(el, 2);
    }
  });

  newA.sort((a, b) => a - b);

  newA = newA.map((el) => {
    if (typeof el == "string") {
      return Math.sqrt(el) + "";
    } else {
      return Math.sqrt(el);
    }
  });

  newA = newA.map((el) => {
    if (typeof el == "string") {
      return (el = Number(el) * -1);
    } else {
      return el;
    }
  });

  console.log(newA.join(" "));
}

function runProgram(input) {
  let x = input.trim().split("\n");
  let loop = +x[0];
  let k = 0;
  for (let h = 1; h <= loop; h++) {
    k++;
    let size = +x[k];
    k++;
    let ar = x[k].trim().split(" ").map(Number);
    SquareSorting(size, ar);
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
