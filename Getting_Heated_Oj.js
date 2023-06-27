//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function heated(ar) {
  let min = Math.max(ar[0], ar[2]);
  let max = ar[1];
  if (min <= max) {
    console.log("AC");
  } else {
    console.log("No AC");
  }
}

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
  for (let h = 1; h <= loop; h++) {
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
//~`````````````
function tempCheck(a) {
  let minTemp = Math.max(a[0], a[2]);

  let maxTemp = a[1];

  if (maxTemp - minTemp >= 0) {
    return console.log("AC");
  } else {
    return console.log("No AC");
  }
}
