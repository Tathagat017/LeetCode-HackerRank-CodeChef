function findGap(N, X, arr) {
  arr = arr.sort((a, b) => a - b);
  let count = 0;

  let i = 0;

  let j = i + 1;
  let k = Math.abs(X);
  while (i <= arr.length - 1) {
    let dif = Math.abs(arr[j] - arr[i]);

    if (dif == k) {
      return console.log("Yes");
    } else if (dif < k) {
      j++;
    } else {
      i++;
    }
  }
  return console.log("No");
}
