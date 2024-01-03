/* 
https://leetcode.com/problems/triangle/description/
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10
*/

/* 
내 풀이.
결국 높이만큼 해당 층의 최소값만 찾아서 하면 될듯?
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */

let minimumTotal = function (triangle) {
  let result = 0;
  for (const row of triangle) {
    const min = Math.min(...row);
    result += min;
  }
  return result
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-10]]));
