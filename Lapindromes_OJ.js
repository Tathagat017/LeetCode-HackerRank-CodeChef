function Lapindromes(S) {
  // Write Code Here
  let fh = [];
  let sh = [];
  if (S.length % 2 == 0) {
    for (let i = 0; i <= S.length / 2 - 1; i++) {
      fh.push(S[i]);
    }

    for (let i = S.length / 2; i <= S.length - 1; i++) {
      sh.push(S[i]);
    }

    //console.log("1",fh,sh)

    fh = fh.sort();
    sh = sh.sort();

    let obf = {};

    let obs = {};

    for (let el of fh) {
      if (!obf[el]) {
        obf[el] = 1;
      } else {
        obf[el]++;
      }
    }
    for (let el of sh) {
      if (!obs[el]) {
        obs[el] = 1;
      } else {
        obs[el]++;
      }
    }

    // console.log(fh,sh)
    JSON.stringify(obf) == JSON.stringify(obs)
      ? console.log("YES")
      : console.log("NO");
  } else {
    let mid = Math.ceil(S.length / 2);
    // console.log(mid)
    for (let i = 0; i < mid - 1; i++) {
      fh.push(S[i]);
    }

    for (let i = mid; i <= S.length - 1; i++) {
      sh.push(S[i]);
    }

    // console.log("2",fh,sh)
    fh = fh.sort();
    sh = sh.sort();
    let obf = {};
    let obs = {};
    for (let el of fh) {
      if (!obf[el]) {
        obf[el] = 1;
      } else {
        obf[el]++;
      }
    }
    for (let el of sh) {
      if (!obs[el]) {
        obs[el] = 1;
      } else {
        obs[el]++;
      }
    }
    // console.log(obf,obs)
    JSON.stringify(obf) == JSON.stringify(obs)
      ? console.log("YES")
      : console.log("NO");
  }
}
