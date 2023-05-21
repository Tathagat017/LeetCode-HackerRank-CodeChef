// Minimum Platforms Required Ended
// Description

// Given arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits.


// Input
// Input Format:

// First-line contains a number of trains n

// Second-line contains array containing arrival time of n trains

// The third line contains an array containing departure time of n trains

// Constraints:

// n <= 100


// Output
// Output one number which is the minimum number of platforms required


// Sample Input 1 

// 6
// 9:00 9:40 9:50 11:00 15:00 18:00
// 9:10 12:00 11:20 11:30 19:00 20:00
// Sample Output 1

// 3

function runProgram(input){
    input=input.split("\n");
    let N=+input[0];
    let arr=input[1].split(" ");
    let dep=input[2].split(" ");
     MinPlatform(N,arr,dep)
}
function MinPlatform(N,arrival,departure){
    for(let i=0; i<N; i++){
     arrival[i]=+arrival[i].split(":").join("")
     departure[i]=+departure[i].split(":").join("")
    }
    // console.log(arrival,departure)
  let i = 0;//6
  let j = 0;//4
  let platforms = 0;//2
  let maxPlatforms = 0;//3
// 9:00 9:40 9:50 11:00 15:00 18:00
// 9:10 12:00 11:20 11:30 19:00 20:00
  while (i < arrival.length && j < departure.length) {
    if (arrival[i] < departure[j]) {
      platforms++;
      i++;
    } else {
      platforms--;
      j++;
    }
    maxPlatforms = Math.max(maxPlatforms, platforms);
  }
    console.log(maxPlatforms);
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input; });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);});
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0); }); }