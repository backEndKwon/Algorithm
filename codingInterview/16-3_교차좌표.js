/* 
16-3
교차점
시작점과 끝점으로 이루어진 선분 두개가 주어질떄 이둘의 교차점을 찾는 프로그램을 작성하라


*/

// a= [0,0],[2,2] , b = [0,2],[2,0]

/* 
우선 기울기 비교
incline = (a1y-a2y)/(a1x-a2x)
기울기 같을때?
y절편 비교해서 같으면 "무한", 다르면 "없음"반환

기울기 다를때?

*/

function incline(line) {
  const [x1, y1] = line[0];
  const [x2, y2] = line[1];
  let m = (y1 - y2) / (x1 - x2);
  return m;
}
function cross(a, b) {
  const [x1, y1] = a[0]; //[0.0]
  const [x2, y2] = a[1]; //[2,2]
  const [x3, y3] = b[0]; //[0,2]
  const [x4, y4] = b[1]; //[2,0]

  const X =
    ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) /
    ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));

  const Y =
    ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) /
    ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
  return [X, Y];
}
//y절편 구하기
function yIntercept(line) {
  const [x1, y1] = line[0];
  const [x2, y2] = line[1];
  const m = incline(line);
  const yintercept = y1 - m * x1;
  return yintercept;
}

const solution = (a, b) => {
  const ma = incline(a);
  const mb = incline(b);

  if (ma !== mb) {
    //교차좌표 구하기
    return cross(a, b);
  } else {
    const aY = yIntercept(a);
    const bY = yIntercept(b);
    if (aY === bY) return Infinity;
    return "없음";
  }
};

console.log(
  solution(
    [
      [0, 0],
      [2, 2],
    ],
    [
      [1, 1],
      [3, 3],
    ]
  )
); //무한대

console.log(
  solution(
    [
      [0, 0],
      [2, 2],
    ],
    [
      [0, 2],
      [2, 0],
    ]
  )
); //1,1

console.log(
  solution(
    [
      [0, 0],
      [2, 2],
    ],
    [
      [-2, 0],
      [0, 2],
    ]
  )
);//없음
