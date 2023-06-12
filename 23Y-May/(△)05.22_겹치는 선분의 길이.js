//겹치는 선분의 길이

//55%
// // lines	result
// [[0, 1], [2, 5], [3, 9]]	2
// [[-1, 1], [1, 3], [3, 9]]	0
// [[0, 5], [3, 9], [1, 10]]	8

// 전략 : lines의 각 요소들의 길이에 대한 요소값들을 전부 구해서 중복값만 남기기
// function solution(lines) {
//   let [a, b, c] = lines;
//   let a1 = [];//[ 0, 1 ]
//   let b1 = [];//[ 2, 3, 4, 5 ]
//   let c1 = [];//[ 3, 4, 5, 6, 7, 8, 9 ]

//   for (let i = a[0]; i <= a[1]; i++) {
//     a1.push(i);
//   }
//   for (let i = b[0]; i <= b[1]; i++) {
//     b1.push(i);
//   }
//   for (let i = c[0]; i <= c[1]; i++) {
//     c1.push(i);
//   }
//   let z = [...a1, ...b1, ...c1]
//   let answer =  [...new Set(z.filter((x,index)=>z.indexOf(x)!==index))].sort((a,b)=>a-b)
//   if(answer[1]===answer[0]+1){
//     return answer.length-1
//   }else{
//     return 0
//   }

// }
//실패

//전략 2 : 각 0번째 값중 최댓값, 1번째값 최댓값 구하기
function solution(lines) {
  let start = lines.map((x) => (x = x[0])); //[ 0, 2, 3 ]
  let end = lines.map((x) => (x = x[1])); //[ 1, 5, 9 ]

  let single = 0;
  let double = 0;
  for (let i = Math.min(...start); i < Math.max(...end); i++) {
    //i는 0~9까지 돈다
    for (let j = 0; j < lines.length; j++) {
      if (i >= start[j] && i < end[j]) {
        single++;
      }
    }
    if (single >= 2) {
      double++;
    }
    single = 0; //single 초기화
  }
  return double;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
);
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
