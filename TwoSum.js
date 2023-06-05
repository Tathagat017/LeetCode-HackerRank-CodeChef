/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumReal = function (nums, target) {
  let obj = {};

  for (let i = 0; i <= nums.length - 1; i++) {
    let sum_diff = target - nums[i];

    if (sum_diff in obj) {
      return [i, obj[sum_diff]];
    }

    obj[nums[i]] = i;
  }
};

var twoSum = function (nums, target) {
  let i = 0;
  let j = 1;
  while (i <= nums.length - 2) {
    let sum = nums[i] + nums[j];

    if (sum !== target) {
      j++;
    } else if (sum == target) {
      return [i, j];
    }

    if (j > nums.length - 1) {
      i++;
      j = i + 1;
    }
  }
};
//................................................................
var twoSum2 = function (nums, target) {
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in mp) return [i, mp[diff]];

    mp[nums[i]] = i;
  }
};

//...............................................................
function twoSum3(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const pairNum = target - nums[i];
    const indexOfNum = nums.indexOf(pairNum);

    if (indexOfNum !== -1 && indexOfNum !== i) {
      return [i, indexOfNum];
    }
  }
}
