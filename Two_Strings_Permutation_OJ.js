function permutation(str1, str2) {
  //write code here

  str1 = str1.split("").sort();
  str2 = str2.split("").sort();
  let obj = {};
  let obj2 = {};

  for (let el of str1) {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  }

  for (let el of str2) {
    if (!obj2[el]) {
      obj2[el] = 1;
    } else {
      obj2[el]++;
    }
  }
  //console.log(obj,obj2)

  if (JSON.stringify(obj) == JSON.stringify(obj2)) {
    return console.log("Yes");
  }
  console.log("No");
}
