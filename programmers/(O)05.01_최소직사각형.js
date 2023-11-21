// 최소직사각형(복습)
// 71%
//                   sizes	                        result
// [[60, 50], [30, 70], [60, 30], [80, 40]]	        4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133

//접근방식
//w<h인 값들은 그 원소들 자리를 바꿔서 w1의 최대와 h1의 최대값을 구한다. w1최댓값*h1최솟값
// //나의 풀이
// function solution(num) {
//   let w = [];
//   let h = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i][0] < num[i][1]) {
//       w.push(num[i][1]);
//       h.push(num[i][0]);
//     } else {
//       w.push(num[i][0]);
//       h.push(num[i][1]);
//     }
//   }return Math.max(...w)*Math.max(...h)
// }

//남의풀이
function solution(num) {
  let x = num.map(([a, b]) => a < b ? [b, a] : [a, b]  );

  let answer = [0, 0];
  x.forEach(([w,h]) => {
    if (w > answer[0]) answer[0] = w;//저절로 최댓값생성
    if (h > answer[1]) answer[1] = h;
  });
  return answer[0]*answer[1]
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
