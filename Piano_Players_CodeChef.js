function playPiano(s) {
  for (let i = 0; i <= s.length - 1; i += 2) {
    if (s[i] == s[i + 1]) {
      return console.log("no");
    }
  }
  return console.log("yes");
}
