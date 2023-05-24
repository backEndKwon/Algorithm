/*
구슬을 나누는 경우의 수
78%
구슬은 모두 다르게 생김
구슬의 개수 balls, 친구들에게 나누어 줄 구슬 개수 share
ball개의 구슬중 share개의 구슬을 고르는 가능한 모든 경우의 수
share ≤ balls
balls	share	result
    3	2	        3
    5	3	        10
n!/(n-m)!*m!
                                                            */

function solution(ball, share) {
  return Math.round(factorial(ball)/(factorial(ball-share)*factorial(share)))
}
function factorial(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= i;
  }
  return answer;
}
//팰토리얼 간지나는 식
const factorial = (num) => num ===0 ? 1 : num * factorial(num-1)

console.log(solution(3, 2));
console.log(solution(5, 3));
console.log(solution(30,29));

