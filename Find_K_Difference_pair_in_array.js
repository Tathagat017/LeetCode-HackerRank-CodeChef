/*

Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i, j < nums.length
i != j
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.

 

Example 1:

Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:

Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:

Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
 

Constraints:

1 <= nums.length <= 104
-107 <= nums[i] <= 107
0 <= k <= 107
Accepted
297.1K
Submissions
717.3K


*/
var findPairs = function (nums, k) {
  let count = new Set();

  nums = nums.sort((a, b) => a - b);

  let i = 0;
  let j = i + 1;

  let f = nums[0];

  if (nums.every((el) => el == f) && k == 0) {
    if (nums.length == 1) return 0;
    else return 1;
  }

  while (i <= nums.length - 2) {
    let dif = Math.abs(nums[j] - nums[i]);

    if (dif == k) {
      let x = [nums[i], nums[j]].join("");

      if (count.has(x) || i == j) {
        j++;
      } else {
        count.add(x);
        i++;
        j++;
      }
    } else if (dif < k) {
      j++;
    } else {
      i++;
    }
  }
  console.log(count);
  return count.size;
};
///////////////////////////////////////////

var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  if (nums.length === 1) {
    return 0;
  }
  //console.log(nums)
  let st = 0;
  let st1 = 1;
  let diff = 0;
  let count = 0;
  let obj = {};
  while (st <= nums.length - 1 && st1 <= nums.length - 1) {
    diff = Math.abs(nums[st] - nums[st1]);
    //console.log(diff)
    if (diff == k) {
      console.log(nums[st], nums[st1]);
      if (obj[nums[st]] && obj[nums[st1]]) {
        st++;
        if (st == st1) {
          st1++;
        }
      } else {
        obj[nums[st]] = 1;
        obj[nums[st1]] = 1;
        count++;
        st1++;
      }
    } else if (diff < k) {
      st1++;
      if (st1 == st) {
        st++;
      }
    } else {
      st++;
      if (st1 == st) {
        st1++;
      }
    }
  }
  //console.log(count);
  return count;
};
