function MinimumPlatformsRequired(ar, d) {
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
  return ans;
}
