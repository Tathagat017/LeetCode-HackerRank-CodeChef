function ParkingPossible(k, ar, d) {
  ar = ar.sort((a, b) => a - b);
  d = d.sort((a, b) => a - b);
  let n = ar.length;
  let count = 1;
  let ans = 1;
  let i = 1;
  let j = 0;

  while (i < n && j < n) {
    if (ar[i] <= d[j]) {
      count++;
      i++;
    } else {
      count--;
      j++;
    }
    ans = Math.max(ans, count);
  }
  ans <= k ? console.log("Possible") : console.log("Not possible");
}
