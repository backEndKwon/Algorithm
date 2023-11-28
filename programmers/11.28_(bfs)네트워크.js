/* 
https://school.programmers.co.kr/learn/courses/30/lessons/43162
네트워크
컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.


n	computers	return
3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	2
3	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]	1
5   [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0],[0, 0, 1, 1, 0],[0, 0, 1, 1, 0],[0, 0, 0, 0, 1]]	3

computers[i][i]는 항상 1
*/
/* 
1과 2가 연결되어있고 3만 따로 되어있으면 네트워크가 2개인 상황
문제. 이어져있다는 것은 어떻게 파악할 것이며, 어떻게 네트워크의 개수를 파악할 것인가?


논리.
2차원 배열안의 요소를 node로 보고, 그 노드를 for문으로 돌아가며 1이 있는지 확인
answer를 0으로 초기화하고, 1이 있으면 answer++하고, 1이 없으면 다음 노드로 넘어가기

gpt 힌트
1. 특정노드를 방문하고 그와 연결된 노드들을 찾아가면서 네트워크 개수를 세어보기

재논리.
bfs로 풀기
answer ++ 하는 시점은 queue에 넣을때(방문을 안했었고 방문할 지점이 생길때)
*/

function solution(n, computers) {
  let answer = 0;
  let visited = [];
  let queue = [];
  //노드 방문여부 확인
  //방문하지 않았으면 queue에 넣기
  for (let i = 0; i < n; i++) {
    //만약 방문 안했다면 answer++해주고 queue에 넣어주기
    if (!visited.includes(i)) {
      answer++;
      queue.push(i);
      console.log("👉 ~ i:", i)
    }
    //queue가 0이 될때까지 반복 queue에서 하나씩 빼서 visited에 넣기
    while (queue.length !== 0) {
      // 큐에서 하나 가져오기
      let node = queue.shift();
      console.log("👉 ~ node:", node)
      //방문처리
      visited.push(node);
      // 연관된 노드들 큐에 넣기
      for (let j = 0; j < n; j++) {
        // 만약 computers의 요소가 1이거나 방문기록에 없으면 그 노드는 방문해야될 노드이니까 queue에 넣기
        if (computers[node][j] === 1 && !visited.includes(j)) {
          queue.push(j);
          console.log("👉 ~ j:", j)
        }
      }
    }
  }
  return answer;
}

// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1],
//   ])
// ); //2
// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ])
// ); //1
console.log(
  solution(5, [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1],
  ])
); //3
