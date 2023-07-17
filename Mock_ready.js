// GOOD
function GoodBadString(str) {
  let ans = "";

  for (i = 0; i < str.length; i++) {
    ans = ans + str[i];
    for (j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        i++;
      } else {
        break;
      }
    }
  }
  console.log(ans);
}
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];

  let line = 1;
  for (z = 0; z < tc; z++) {
    let str = input[line];
    line++;
    GoodBadString(str);
  }
}
