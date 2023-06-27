let shoot = (n, a) => {
  let sum = 0;
  let original = [...a];
  let ans = [];
  a = a.sort((a, b) => b - a);
  let f = a[0];
  if (a.every((el) => el == f)) {
    let x = 0;
    a.forEach((el, ind) => {
      sum += el * x + 1;

      ans.push(ind + 1);
      x++;
    });
    return console.log(sum + "\n" + ans.join(" "));
  } else {
    let x = 0;
    let ans = [];
    for (let i = 0; i <= a.length - 1; i++) {
      sum += a[i] * x + 1;
      x++;
      let j = original.indexOf(a[i]);
      original[j] = "X";
      ans.push(j + 1);
    }

    return console.log(sum + "\n" + ans.join(" "));
  }
};
