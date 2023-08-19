var findPeakElement = function (nums) {
  if (nums.length == 1) {
    return 0;
  }

  if (nums.length == 2) {
    if (nums[0] > nums[1]) {
      return 0;
    } else {
      return 1;
    }
  }
  let ans;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
      ans = i;
      break;
    }
  }

  if (ans == undefined) {
    let max = Math.max(...nums);
    return nums.indexOf(max);
  } else {
    return ans;
  }
};
