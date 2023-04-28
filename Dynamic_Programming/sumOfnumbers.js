let dp = [];

function sum(n) {
  if (n == 0) return 0;
  if (dp[n]) return dp[n];
  return (dp[n] = n + sum(n - 1));
}
console.log(sum(0));
