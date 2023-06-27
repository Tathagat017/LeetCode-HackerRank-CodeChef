let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
let j = ar.length - 1;
while (i < j) {
  let temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
  i++;
  j--;
}
console.log(ar);
