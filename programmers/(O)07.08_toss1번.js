/*
1번문제

1부터 n까지 번호가 순환(circle)형식으로 이어져있음
임의의 사람이 1번에 도착해서 sequence에 적힌 순서대로 방문한다
바로 옆에 도달하는 시간은 1시간/ ex,n=5라면 1과 5의 사이는 1시간 걸림
n과 sequence가 주어졌을때 sequence에 걸리는 시간을 반환하기(최소시간)

*/
function solution(n, sequence) {
  let answer = 0
  sequence.unshift(1)
  for (let i = 0; i < sequence.length - 1; i++) {
    if (
      Math.abs(sequence[i] - sequence[i + 1]) <= n/2
    ) {
      answer += Math.abs(sequence[i] - sequence[i + 1]);
    } else {
      answer += Math.abs(n%(sequence[i+1]-sequence[i]))
    }
  }
  return answer;
}

console.log(solution(5, [1, 2, 3, 4, 5]));
console.log(solution(5, [3, 5, 4, 1, 2]));
console.log(solution(6, [5, 3, 6, 1, 2,4]));

