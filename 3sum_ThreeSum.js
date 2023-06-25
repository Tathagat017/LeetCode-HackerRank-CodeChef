/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//O(n*2) and O(n) space
var threeSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let ans = new Set();
  for (let i = 0; i <= nums.length - 3; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum == target) {
        let x = "";
        x = nums[i].toString() + "#" + nums[j] + "#" + nums[k];
        ans.add(x);
      }
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  ans = [...ans];
  ans = ans.map((el) => el.split("#").map(Number));
  console.log(ans);
  return ans;
};
