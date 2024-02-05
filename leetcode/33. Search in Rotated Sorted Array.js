/* 
https://leetcode.com/problems/search-in-rotated-sorted-array/

distinct values = 중복하지 않는 고유한 값
시간복잡도는 O(log(n))으로

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
*/

/* 
문제의 요지 : 
target값 찾는데 시간복잡도 log(n)으로 해라.
기존 for문 사용하면 당연히 안됌
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//순차탐색은 O(N)이므로 탈락
//정렬이 안되어있어도 이진탐색이 가능한가?
// rotation된거니 배열 안에 부분적으로 정렬이 되어있을거임
// 1,2,3,0 과 같다면 좌측<우측 인데 그 나뉘는 지점만 좌측>우측임
// 그래서 만약 mid값(배열의 중앙값)이 left값보다 크면 무조건 두번째배열의 시작점은 무조건 우측편에 있음
/* 
대강의 순서는?
left right로 나누어서 left 는 index 0부터, right 는 index 맨 마지막 부터 시작
left가 right보다 커지면 종료되는 while문(이진탐색과 동일)
nums[mid]값이 target과 같다면 mid값 반환
*/
//이진탐색으로 검색범위 반 log(n)
let search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 왼쪽 절반이 정렬되어 있는 경우
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 경우
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // expected 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // expected -1
//실패상황 [1] 1 expected = 0 actual: undefined

console.log(search([1], 1)); // expected 0
console.log(search([1, 3], 1)); // expected 0
