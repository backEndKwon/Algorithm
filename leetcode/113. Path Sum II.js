/* 
https://leetcode.com/problems/path-sum-ii/description/

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22

Input: root = [1,2,3], targetSum = 5
Output: []
Example 3:

Input: root = [1,2], targetSum = 0
Output: []
*/

/**
 Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 */

/* 
내 풀이. 
일단 dfs로 깊이 탐색을 진행하면서 result 변수에 해당 노드를 +하면서 targetSum과 일치하는지 찾으면 될듯
하지만, 해당 배열을 어떻게 dfs로 깊이탐색을 할 수 있을까?
보아하니 여기서는 이미 트리의 생김새를 정의해놔줌 그래서 좌측 노드선택할시 root.left하면됨

hint?
targetSum을 더해가는 방법도 있지만 targetSum에서 각 노드를 빼면서 0이 될때까지 재귀

*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
let pathSum = function (root, targetSum) {
  //①우선 root 가 null 일대 빈배열 반환
  if (root === null) return [];

  //②마지막 최종 답에 도달했을때 반환
  if (root.right === null && root.left === null && targetSum === root.val)
    return [[root.val]];

  //좌우측 동시진행
  //좌측 노드를 통해 뺄셈 시작
  let leftResult = pathSum(root.left, targetSum - root.val); //타겟숫자에서 현재 value뺀 값을 다음회차의 타겟숫자로 ㄱㄱ
  // 그런다음 만약에 최후의 targetSum - root.val 값과 targetsum과 같다면 그때 정답 반환
  //우측 노드를 통해 뺄셈 시작
  let rightResult = pathSum(root.right, targetSum - root.val);

  // concat this two array하기
  //각각의 currentResult 즉 left와 right배열에 대해서 그 배열 + 마지막에 나온 node값(②)을 추가해서 반환
  let currentResult = [...leftResult, ...rightResult];
  return currentResult.map((arr) => [root.val, ...arr]);

};

pathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22); // expected [[5,4,11,2],[5,8,4,5]]
pathSum([1, 2, 3], 5); //expected []
pathSum([1, 2], 0); //expected []
