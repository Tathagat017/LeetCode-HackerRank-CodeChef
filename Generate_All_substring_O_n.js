const devideSubStr = (str) => {
  var totalLoop = str.length * ((str.length + 1) / 2);
  // looping count
  let i = 0;
  var totalChar = 1; //character to get
  var charFrom = 0; // from which index
  var strLength = str.length; //length of digit
  while (i < totalLoop) {
    console.log(str.substr(charFrom, totalChar));
    charFrom++;
    i++;
    if (charFrom == strLength) {
      charFrom = 0;
      strLength = strLength - 1;
      totalChar++;
    }
  }
};
///////////////////////////////////////

function generateSubstrings(str) {
  const substrings = [];
  const len = str.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      substrings.push(str.slice(i, j));
    }
  }

  return substrings;
}

const string = "abc";
const substrings = generateSubstrings(string);
console.log(substrings);
//////////////////////////////

function generateSubstring(str) {
  const substrings = [];
  const len = str.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      let substring = "";
      for (let k = i; k < j; k++) {
        substring += str[k];
      }
      substrings.push(substring);
    }
  }

  return substrings;
}
