function ValueOfString(n, s) {
  let aL = "abcdefghijklmnopqrstuvwxyz";

  let ans = 0;
  let oL = {};
  let oU = {};
  let i = 1;
  aL.split("").map((el) => (oL[el] = i++));
  aL.split("").map((el) => (oU[el.toUpperCase()] = oL[el] * -1));

  for (let i = 0; i <= s.length - 1; i++) {
    if (oL[s[i]]) {
      ans += oL[s[i]];
    } else {
      ans += oU[s[i]];
    }
  }
  return console.log(ans);
}
