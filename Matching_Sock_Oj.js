function socks(N, A) {
  let obj = {};
  for (let i = 0; i <= N - 1; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]]++;
    }
  }

  let pairs = 0;

  for (let i in obj) {
    if (obj[i] > 1) {
      if (obj[i] % 2 == 0) {
        pairs += obj[i] / 2;
      } else {
        let dif = Math.floor(obj[i] / 2);
        //console.log("d",dif)
        pairs += dif;
      }
    }
  }
  console.log(pairs);
}
