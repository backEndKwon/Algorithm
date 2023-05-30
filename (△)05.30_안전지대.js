/*
안전지대
56%

지뢰는 2차원 배열 board에 1로 표시되어 있고
 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 
안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
board	result
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]	16
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]	13
[[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]	0


전략
*/

function solution(boards) {
  let xy = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];
  // 정사각형
  const n = boards.length;
let answer=0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (boards[i][j] === 1) {//boards의 값이 1일때만 주변돌면서 2로 변경한다
        //여기서부터 힌트 얻음..
        xy.forEach((item) => {//좌우위아래대각선 돌면서
          let [X, Y] = item;//0,1
          [X, Y] = [i + X, j + Y];//0,1 => 0,2 0,3 0,4 0,5
          if (X >= 0 && X < n && Y >= 0 && Y < n && boards[X][Y]===0) {//해당 범위 안에서만 2를 추가한다.//boards[X][Y]===0이건 모르겠는데?
            boards[X][Y] = 2;
          }
        });
      }
    }
  }
  boards.map(a=>a.map(b=>b===0? answer++ :0))
return answer
}
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
