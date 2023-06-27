function masaiPalSubString(S) {
  function palindrome(str) {
    let str1 = str.split("").reverse().join("");

    if (str1 == str) {
      return true;
    } else {
      return false;
    }
  }

  let max = -Infinity;

  function Substring(str) {
    const substrings = [];
    const len = str.length;

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j <= len; j++) {
        substrings.push(str.slice(i, j));
      }
    }

    return substrings;
  }

  let subs = Substring(S);

  let x = subs.forEach((el) => {
    if (palindrome(el.split("").join(""))) {
      if (max < el.length) max = el.length;
    }
  });
  console.log(max);
}
