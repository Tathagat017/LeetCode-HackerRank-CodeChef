function NthPrime(num) {
  let count = 0;
  let i = 0;
  while (count <= num) {
    i++;
    if (prime(i)) {
      count++;
    }
  }
  return i;
}

function prime(n) {
  if (n == 1 || n == 0) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(NthPrime(23));

let primeNum = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

console.log(primeNum[23]);
