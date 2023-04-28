function stairs(n, dp = []) {
  if (n == 0) return 1;
  if (n < 0) return 0;

  if (dp[n]) return dp[n];

  dp[n] = stairs(n - 5, dp) + stairs(n - 3, dp) + stairs(n - 1, dp);
  return dp[n];
}

stairs(100);
