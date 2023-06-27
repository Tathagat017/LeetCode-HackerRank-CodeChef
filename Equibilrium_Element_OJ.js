function equilibriumElement(N, arr) {
  for (let i = 1; i <= arr.length - 2; i++) {
    let sumL = 0;
    let sumR = 0;
    for (let j = 0; j <= i - 1; j++) {
      sumL += arr[j];
    }

    for (let j = arr.length - 1; j >= i + 1; j--) {
      sumR += arr[j];
    }

    if (sumL == sumR) {
      return console.log(i);
    }
  }

  return console.log(-1);
}
