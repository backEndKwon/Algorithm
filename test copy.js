//겹치는 선분의 길이

//55%
// // lines	result
// [[0, 1], [2, 5], [3, 9]]	2
// [[-1, 1], [1, 3], [3, 9]]	0
// [[0, 5], [3, 9], [1, 10]]	8

// 전략 : a가 어디로갔는지 확인
function solution(lines) {
  let [a, b, c] = lines;
  let a1 = [];//[ 0, 1 ]
  let b1 = [];//[ 2, 3, 4, 5 ]
  let c1 = [];//[ 3, 4, 5, 6, 7, 8, 9 ]

  for (let i = a[0]; i <= a[1]; i++) {
    a1.push(i);
  }
  for (let i = b[0]; i <= b[1]; i++) {
    b1.push(i);
  }
  for (let i = c[0]; i <= c[1]; i++) {
    c1.push(i);
  }
  let z = [...a1, ...b1, ...c1]
  
  return [...new Set(z.filter((x,index)=>z.indexOf(x)!==index))]
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
console.log(solution([[-1, 1], [1, 3], [3, 9]]))
console.log(solution([[0, 5], [3, 9], [1, 10]]))
