"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
  // Write your code here
  //1700-1917
  //1918
  //1919

  let year_obj = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  //1700--1918
  year = Number(year);
  if (year < 1918) {
    if (year % 4 == 0) {
      year_obj["2"] = 29;
    }
    let sum = 0;
    let month = 0;
    for (let i in year_obj) {
      sum = Number(sum) + Number(year_obj[i]);

      if (sum == 256) {
        month = i;
        break;
      }
      if (sum > 256) {
        month = i;
        sum -= Number(year_obj[i]);

        break;
      }
    }
    sum = Number(sum);

    for (let day = 1; day <= Number(year_obj[month]); day++) {
      sum += 1;

      if (sum == 256) {
        if (month < 10) {
          month = `0${month}`;
        }
        return `${day}.${month}.${year}`;
      }
    }
  }

  //1918

  if (year == 1918) {
    year_obj["2"] = 15;
    let sum = 0;
    let month = 0;
    for (let i in year_obj) {
      sum = Number(sum) + Number(year_obj[i]);

      if (sum == 256) {
        month = i;
        break;
      }
      if (sum > 256) {
        month = i;
        sum -= Number(year_obj[i]);

        break;
      }
    }
    sum = Number(sum);

    for (let day = 1; day <= Number(year_obj[month]); day++) {
      sum += 1;
      if (month == "2") {
        day = 14;
      }
      if (sum == 256) {
        if (month < 10) {
          month = `0${month}`;
        }

        return `${day}.${month}.${year}`;
      }
    }
  }

  //1918-present
  else if (year > 1918) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
      year_obj["2"] = 29;
    }
    console.log(year_obj["2"]);
    let sum = 0;
    let month = 0;
    for (let i in year_obj) {
      sum = Number(sum) + Number(year_obj[i]);

      if (sum == 256) {
        month = i;
        break;
      }
      if (sum > 256) {
        month = i;
        sum -= Number(year_obj[i]);

        break;
      }
    }
    sum = Number(sum);

    for (let day = 1; day <= Number(year_obj[month]); day++) {
      sum += 1;

      if (sum == 256) {
        if (month < 10) {
          month = `0${month}`;
        }
        return `${day}.${month}.${year}`;
      }
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
