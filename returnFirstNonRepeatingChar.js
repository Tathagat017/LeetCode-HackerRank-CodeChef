/* 
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

var firstUniqChar = function (s) {
  let obj = {};

  for (let i = 0; i <= s.length - 1; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }
  let char = "";
  for (let i in obj) {
    if (obj[i] == 1) {
      char = i;
      break;
    }
  }

  for (let x in s) {
    if (s[x] == char) {
      return x;
    }
  }
  return -1;
};
//without object : s.c - o(n),
var firstUniqChar4 = function (str) {
  var freq = Array(26).fill(0);
  for (var s of str) {
    const idx = s.charCodeAt() - 97;
    freq[idx] += 1;
  }
  for (var i = 0; i < str.length; i++) {
    const idx = str[i].charCodeAt() - 97;
    if (freq[idx] === 1) return i;
  }
  return -1;
};

//another

var firstUniqChar3 = function (s) {
  let obj = {};

  for (let ch of s) {
    if (!obj[ch]) {
      obj[ch] = 0;
    }
    obj[ch]++;
  }

  for (let i = 0; i < s.length; ++i) {
    if (obj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
// using Map
// METHOD 1
// TIME COMPLEXITY O(N)
var firstUniqChar2 = function (s) {
  var map = new Map(); // Create A map which store the occurence of the element
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // if the S Ith index value exists in the map then increment the map element value by 1
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1); // if the element does not exists in the map then add/push to the map
    }
  }
  // This is the important method
  //here we itterate all the map value and check which map key value is 1
  // 1 means that key only exists in one time
  for (var [key, val] of map.entries()) {
    if (val == 1) return s.indexOf(key); // if the map value equal to 1 return the sth index
  }
  return -1;
};
//map

const firstUniqChar1 = (s) => {
  const map = new Map();

  // build map, if not in map initialize it to 1
  // if it is already in the map, set to -1
  for (let letter of s)
    !map.has(letter) ? map.set(letter, 1) : map.set(letter, -1);

  // iterate through the map to find the first element with 1
  for (let item of map) if (item[1] === 1) return s.indexOf(item[0]);

  return -1;
};
