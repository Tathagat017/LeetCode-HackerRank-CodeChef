let arr = [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
function ZeroOne(arr) {
  let countZero = 0;
  let countOne = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZero++;
    } else {
      countOne++;
    }
  }

  for (let i = 0; i < countZero; i++) {
    arr[i] = 0;
  }

  for (let i = countZero; i < countOne; i++) {
    arr[i] = 1;
  }
  console.log(arr);
}
//ZeroOne(arr);

//!----------------------------------------------------------------
function OneZero(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (arr[i] == 0 && i < j) {
      i++;
    }
    while (arr[j] == 1 && i < j) {
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    i++;
    j--;
  }
  console.log(arr);
}
OneZero(arr);
