/* 
다음에 올 숫자
58%
등차 또는 등비 common

common	result
[1, 2, 3, 4]	5
[2, 4, 8]	16

전략 : n과 n+1을 뺀값들이 같으면 등차
       나눈게 같으면 등비
*/

function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    return common[common.length - 1] + (common[1] - common[0]);
  }
  if (common[1] / common[0] === common[2] / common[1]) {
    return common[common.length - 1] * (common[1] / common[0]);
  }
}
console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
