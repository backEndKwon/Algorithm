/* 
https://leetcode.com/problems/merge-sorted-array/
88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

keyPoint.
if n is 0 , it can be ignored nums2
*/


// 시간복잡도 O(n log n)
const merge = (nums1, m, nums2, n) => {
  let num1 = [];
  if (m === 0) {
    return nums2.slice(0, n);
  } else {
    num1 = nums1.slice(0, m); // O(n)
  }
  let num2 = [];
  if (n === 0) {
    return nums1.slice(0,m);
  } else {
    num2 = nums2.slice(0, n);
  }
  const answer = num1.concat(num2); // O(n)
  answer.sort((a, b) => a - b); //O(n log n)
  return answer;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([0], 0, [1], 1));
