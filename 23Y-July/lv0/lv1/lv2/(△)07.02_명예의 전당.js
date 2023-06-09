/*
lv 2
명예의 전당

k	score	result
3	[10, 100, 20, 150, 1, 100, 200]	[10, 10, 10, 20, 20, 100, 100]
4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
*/

function solution(k, score) {
  const m = [];
  const result = [];
  score.forEach((x) => {
    m.push(x);
    m.sort((a, b) => b - a); //100,10
    if (m.length > k) {
      // k보다 m의 원소개수가 많으면 k-1에 있는값이 최소점수로
      result.push(m[k - 1]);
    } else {
      result.push(m[m.length - 1]); // k가 m의 원소개수보다 크면 마지막 값이 최소점수로
    }
  });

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
