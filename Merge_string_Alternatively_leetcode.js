var mergeAlternately = function (word1, word2) {
  let total = word1.length + word2.length;
  let w1 = 0;
  let w2 = 0;
  let swap = false;

  let ans = "";
  for (let i = 1; i <= total; i++) {
    if (word1[w1] == undefined) {
      swap = true;
    }

    if (word2[w2] == undefined) {
      swap = false;
    }
    if (swap) {
      ans += word2[w2];
      w2++;
      swap = !swap;
    } else {
      ans += word1[w1];
      w1++;
      swap = !swap;
    }
  }
  return ans;
};
