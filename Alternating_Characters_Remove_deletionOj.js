function runProgram(input) {
  // Write code here
  let matching = (s) => {
    let count = 0;
    let i = 0;
    let j = i + 1;

    while (i <= s.length - 1) {
      if (s[i] == s[j]) {
        //  console.log(s[i],s[j])
        s[j] = "*";
        count++;
        j++;
      } else if (s[i] !== s[j]) {
        i = j;
        j = i + 1;
      }
    }

    console.log(count);
  };

  input = input.trim().split("\n");

  let t = +input[0];
  let l = 1;
  while (t > 0) {
    let s = input[l++];

    matching(s);

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
