/* 
https://school.programmers.co.kr/learn/courses/30/lessons/1844
게임 맵 최단거리
0 = 벽, 1 = 길
초기 캐릭터위치 = 좌측 상단 (1, 1)
상대방 진영위치 = 우측 하단 (n, m)
maps	answer
[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
[[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1
*/
/* 
논리:
dfs로 stack을 활용한 깊이우선탐색으로 하면 불필요한 경로까지 찾는거 아닌가?
그러면 bfs로 queue를 활용한 너비우선탐색으로 풀이해보기

0. 방향키설정
1. 현재 위치에서 상하좌우로 이동할 수 있는지 확인
2. 방문한 배열 생성해서 확인(boolean)
3. 이동할 수 있다면(1사분면에 존재+n,m사이?+갈수있는 지점이 1인가?) 이동한 위치를 큐에 넣고, 이동할 위치값이 1이라면 distance +=1, 방문여부 true로 변경
4. 그런게 없다면 무조건 갈 방도가 없으므로 -1 리턴

*/
const solution = (maps) => {
  //상하 좌우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  //방문여부를 확인하기 위한 배열
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () => Array(m).fill(false));

  // queue참고해서 bfs 진행
  const queue = [];
  queue.push({ x: 0, y: 0, distance: 1 }); //처음 시작위치

  //queue가 0이 될때 까지 반복
  while (queue.length > 0) {
    //현재위치 가져오기
    const current = queue.shift();
    const { x, y, distance } = current; // 구조분해할당
    //queue에서 가져온 위치값이 n-1, m-1과 같다면 게임 종료
    if (x === n - 1 && y === m - 1) {
      return distance;
    }

    //그게 아니라면 상하좌우 이동 가능한지 확인
    //4개의 방향으로 for문
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]; //해당 방향으로 이동한 x좌표
      const ny = y + dy[i]; //해당 방향으로 이동한 y좌표

      //맵을 벗어나지 않았고, 0이아닌 1이면서, 방문하지 않은 곳이면 큐에 추가
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        queue.push({ x: nx, y: ny, distance: distance + 1 });
        visited[nx][ny] = true;
      }
    }
    // console.log("👉 ~ visited:", visited);
  }return -1

};

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
//   ])
// );
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
