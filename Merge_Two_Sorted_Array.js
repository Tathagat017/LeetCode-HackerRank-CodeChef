/*

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?

Accepted
2.1M
Submissions
4.4M
Acceptance Rate
47.0%

*/

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 8, 9, 10, 11, 12, 13];
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

let k = mergeSortedArrays(arr1, arr2);
//console.log(k);
//!=================================================================

//MERGING IN PLACE
var merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    return nums1;
  }

  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return nums1;
  }

  let i = m - 1;
  let j = n - 1;
  let index = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[index] = nums1[i];
      i--;
    } else {
      nums1[index] = nums2[j];
      j--;
    }
    index--;
  }

  while (j >= 0) {
    nums1[index] = nums2[j];
    j--;
    index--;
  }
  return nums1;
};

let j = merge(arr1, 6, arr2, 9);
console.log(j);
