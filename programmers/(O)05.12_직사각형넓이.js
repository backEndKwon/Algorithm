//직사각형 넓이구하기
//74%

//dots	result
// [[1, 1], [2, 1], [2, 2], [1, 2]]	1
// [[-1, -1], [1, 1], [1, -1], [-1, 1]]	4

// 전략 : N과 뺀 수의 절대값이 가장 작은 값에대한
//INDEX를 구한후 모배열에서 해당 인덱스에 맞는 값을 반환
//가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.


성공
function solution(dots) {
  let x = [];
  let y = [];
  for (let dot of dots) {
    x.push(dot[0]);
    y.push(dot[1]);
  }
  let xx = [...new Set(x)];
  let yy = [...new Set(y)];

  return Math.abs(xx[0] - xx[1]) * Math.abs(yy[0] - yy[1]);
}

좀 더 간단히 가능할까?

function solution(dots) {

  let xx = [...new Set(dots.map((x)=>x[0]))];
  let yy = [...new Set(dots.map((x)=>x[1]))];

  return Math.abs(xx[0] - xx[1]) * Math.abs(yy[0] - yy[1]);
}
성공!



console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
