//제곱수판별
//88%
// n	result
// 144	1
// 976	2

// 전략 : 난이도 0인만큼 한줄 return 최대한 고민해보기
function solution(n) {
  return Number.isInteger(Math.sqrt(n))? 1 :2
}
console.log(solution(144));
console.log(solution(976));
