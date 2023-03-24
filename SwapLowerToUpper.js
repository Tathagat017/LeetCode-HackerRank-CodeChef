function lu(A) {
  A = A.split("");
  let upperstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerstring = "abcdefghijklmnopqrstuvwxyz";

  let obj = {};
  for (let i = 0; i <= 25; i++) {
    obj[upperstring[i]] = lowerstring[i]; //A : a
  }

  let obj2 = {};
  for (let i = 0; i <= 25; i++) {
    obj2[lowerstring[i]] = upperstring[i]; //a:A
  }

  let ans = "";
  for (let x of A) {
    if (obj[x] !== undefined) {
      //console.log("1=",obj[x],"2=",x)
      ans += obj[x];
    } else if (obj2[x] !== undefined) {
      //console.log(obj2[x],x)
      ans += obj2[x];
    }
  }

  return ans;
}
// another
function lu2(A) {
  let res = A.split("");
  res = res
    .map((char) => {
      if (char >= "a" && char <= "z") return char.toUpperCase();
      else return char.toLowerCase();
    })
    .join("");
  return res;
}
