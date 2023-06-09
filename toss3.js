/*
2
/**
 * 
 *
샘플 값 입니다.
//입력
[[1274713200000, 1274716800000], [1274716800000, 1274720400000], [1274720400000, 1274724000000], [1274724000000, 1274727600000]]

//출력
[0, 0]

//입력
[[1683993600000,1683994800000], [1683995400000,1683996000000], [1683997200000,1683999600000], [1683999600000,1684000200000], [1684000800000,1684003800000], [1684003800000,1684004220000]]
//출력
[2, 2700000]
*/

// 실패//
function solution(logs) {
  let log_min = [];
  let log_start = [];
  let log_start_min = [];
  logs.map((x) => log_min.push(x[1] - x[0]));
  logs.map((x) => log_start.push(x[0] / 600000));
  for (let i = 0; i < log_start.length - 1; i++) {
    log_start_min.push(log_start[i + 1] - log_start[i]); //[ 6, 6, 6 ] [ 3, 3, 4, 2, 5 ]
  }

  //중복 아닌 갯수
  const count = log_start_min.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  });

  if (log_min.every((x, idx, log_min) => log_min.indexOf(x) === idx)) {
    return [0, 0];
  } else {
    return [log_start_min.length-count, (log_min[2] + log_min[3] + log_min[4]) / 3];
  }
  // (log_min[2] + log_min[3] + log_min[4]) / 3;
}
console.log(
  solution([
    [1274713200000, 1274716800000],
    [1274716800000, 1274720400000],
    [1274720400000, 1274724000000],
    [1274724000000, 1274727600000],
  ])
);
console.log(
  solution([
    [1683993600000, 1683994800000],
    [1683995400000, 1683996000000],
    [1683997200000, 1683999600000],
    [1683999600000, 1684000200000],
    [1684000800000, 1684003800000],
    [1684003800000, 1684004220000],
  ])
);
