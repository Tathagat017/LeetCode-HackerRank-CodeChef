//recursive programm for fibonacci serires :-

let dp = [];

function fibonacci(n) {
  if (n <= 1) return n;
  if (dp[n]) return dp[n];
  else return (dp[n] = fibonacci(n - 1) + fibonacci(n - 2));
}

console.log(fibonacci(6));
