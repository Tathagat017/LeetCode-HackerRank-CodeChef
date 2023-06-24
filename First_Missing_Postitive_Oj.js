/*

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1


*/
//O(n2) solution , accepted in OJ

function smallest(n, ar) {
  let min = Math.min(...ar);

  for (let i = 1; i <= n; i++) {
    if (!ar.includes(i)) return i;
  }
  return n + 1;
}
//O(n) time O(1) space
var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    // This loop helps us to handle the negative numbers
    if (nums[i] <= 0) nums[i] = n + 1;
  }
  for (let i = 0; i < n; i++) {
    let id = Math.abs(nums[i]) - 1;
    nums[id] = Math.abs(nums[id]) * -1;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return n + 1;
};
