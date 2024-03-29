/*
You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

 

Example 1:

Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"
Example 2:

Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
 

Constraints:

1 <= secret.length, guess.length <= 1000
secret.length == guess.length
secret and guess consist of digits only.
*/
//time complexity : O(n) but space complexity : O(n)
var getHint = function (secret, guess) {
  secret = secret.split("");
  guess = guess.split("");
  let cows = 0;
  let bulls = 0;
  let guObj = {};
  let secObj = {};
  for (let i = 0; i <= guess.length - 1; i++) {
    if (guess[i] == secret[i]) {
      bulls++;
      guess[i] = "X";
      secret[i] = "X";
    }
    {
      if (!secObj[secret[i]]) {
        secObj[secret[i]] = 1;
      } else {
        secObj[secret[i]]++;
      }
    }

    {
      if (!guObj[guess[i]]) {
        guObj[guess[i]] = 1;
      } else {
        guObj[guess[i]]++;
      }
    }
  }

  let guObjKey = Object.keys(guObj);

  for (let i = 0; i <= guObjKey.length - 1; i++) {
    let key = guObjKey[i];

    if (secObj[key] && key !== "X") {
      cows += Math.min(secObj[key], guObj[key]);
    }
  }

  let ans = bulls + "A" + cows + "B";
  return ans;
};

// another approach is to use an array of 10 elements filled with "0 "that dynamically changes as the value frequency of secret and cows is mapped in real time ;

//time complexity : O(n) but space complexity : O(1)

function cows(secret, guess) {
  let bulls = 0;

  let cows = 0;

  let arr = Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    let gu = +guess[i];

    let sec = +secret[i];

    if (sec === gu) {
      bulls++;
      continue;
    }

    if (arr[sec] < 0) {
      cows++;
    }

    if (arr[gu] > 0) {
      cows++;
    }

    arr[sec]++;
    arr[gu]--;
  }

  return `${bulls}A${cows}B`;
}
