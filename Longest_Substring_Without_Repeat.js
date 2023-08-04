var lengthOfLongestSubstring = function (s) {
  let bag = "";

  let max = 0;
  for (let i = 0; i <= s.length - 1; i++) {
    bag = "";
    for (let j = i; j <= s.length - 1; j++) {
      if (!bag.includes(s[j])) {
        bag += s[j];
        if (bag.length > max) {
          console.log(bag);
          max = bag.length;
        }
      } else {
        break;
      }
    }
  }

  return max;
};
