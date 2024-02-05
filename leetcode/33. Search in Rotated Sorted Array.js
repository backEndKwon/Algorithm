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
  //조건부 이진탐색으로 log(n) 달성 가능
  // nums는 정렬되지 않았지만 그 안에는 정렬된 배열이 2개로 구분됨
  //그래서 mid index값과 left, right index에 대한 값들을 비교하면서 
  //target이 좌측에 있는지 우측에 있는지 확인
  //만약 target이 좌측에 있다면 rigth인덱스는 mid 인덱스에서 -1 한 값으로 점차 줄여주면 됨
  // 그 반대는 left 인덱스는 mid 인덱스에서 +1 한값으로 늘려가서 범위를 좁여주면 됨
  let [left, right] = [0, nums.length - 1]
  while (left <= right) {
      //만약 mid가 target과 일치할 경우 mid바로 반환하면 됨(mid는 index니까)
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) return mid
      if (nums[left] <= nums[mid]) {//좌측이 정렬 되어있을떄
          //target이 좌측에 있을 경우
          if (nums[left] <= target && target < nums[mid]) {
              right = mid - 1
          } else { left = mid + 1 }
      } else {// [7,8,9,0,1,2,3,4] 2// 우측이 정렬 되어있을때
          if (target > nums[mid] && target <= nums[right]) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      }
  } return -1

}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // expected 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // expected -1
//실패상황 [1] 1 expected = 0 actual: undefined

console.log(search([1], 1)); // expected 0
console.log(search([1, 3], 1)); // expected 0
