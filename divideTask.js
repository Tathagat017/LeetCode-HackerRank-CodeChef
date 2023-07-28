function divisionTask(N) {
  if (N <= 0) {
    console.log(-1);
  } else {
    let x = Math.floor(32 / N);
    if (x == 0) {
      console.log("Too Low");
    } else {
      console.log(x);
    }
  }
}
