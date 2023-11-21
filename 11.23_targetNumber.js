/* 
타겟넘버
numbers	target	return
[1, 1, 1, 1, 1]	3	5
[4, 1, 2, 1]	4	2
*/
/* 
논리:
-와 +로 이루어진 node가 있다는 가정하에 DFS를 사용하면 될것같다?
-DFS를 사용하려면 stack을 사용해야함

*/

function solution(n, target) {
  // 해당 answer는 target과 같은지 비교하는 변수
  let answer = 0;
  // DFS를 위한 재귀함수
  dfs(0, 0);
  function dfs(sum, index) {
    if (index === n.length) {
      // index가 n.length와 같아지면(즉 모든 경우의 수를 다 사용한 경우)
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    dfs(sum + n[index], index + 1); // (4,1) (5,2)/(3,2)
    dfs(sum - n[index], index + 1); // (-4,1) (-5,2)
  }
  return answer;
}
/* 
결론:
시간복잡도 O(2^N) => 각 원소마다 2개의 선택지(DFS)
공간복잡도 O(N) => 재귀함수를 사용하므로 call stack이 쌓임
 */
// console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
