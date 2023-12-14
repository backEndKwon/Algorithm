/* 
https://leetcode.com/problems/single-number-ii/description/
137. Single Number II
Given an integer array nums where every element appears three times except for one, which appears exactly once. 

Input: nums = [2,2,3,2]
Output: 3
Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99
*/

/* 
해시테이블에 해당 원소가 몇개출현했는지 count++ 해서 key-value값으로 업데이트 하기

//초기에 넣을때?
map.get(num)은 없으니까 없다면 0 에 1씩 더하게끔
*/
const singleNumber = (nums) => {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [num, count] of map) {
    if (count === 1) {
      return num;
    }
  }
};

console.log(singleNumber([2, 2, 3, 2]));
