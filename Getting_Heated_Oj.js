function check(ar) {
  // console.log(ar);
  let a = [];
  let flag = false;
  let val;
  if (ar[1] >= ar[0] && ar[1] >= ar[2]) {
    console.log("AC");
  } else {
    console.log("No AC");
  }
  //   for(i=ar[0];i<=ar[1];i++){
  //       if(i>=ar[2]){
  //             flag=true;break;
  //       }

  //   }

  //   if(flag){console.log("AC")}
  //     else{console.log("No AC")}
}

function runProgram(input) {
  let x = input.trim().split("\n");
  let loop = +x[0];
  let k = 0;
  for (h = 1; h <= loop; h++) {
    k++;
    let arr = x[k].trim().split(" ").map(Number);
    check(arr);
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
