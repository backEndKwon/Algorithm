/* 
배달 (다익스트라 활용)
https://school.programmers.co.kr/learn/courses/30/lessons/12978

1)출발노드, 도착노드 설정
2)최단거리 테이블 초기화
3)현재 위치한 노드의 인접노드들 확인. 방문여부로 노드 구분, 방문하지 않은 노드중 거리가 가장짧은 노드 선택, 해당 노드 방문처리
4)선택된 노드를 거쳐서 인접노드로 가는 비용을 계산하여 최단거리 테이블 갱신
5)3~4번 반복

N	road	K	result
5	[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]]	3	4
6	[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]]	4	4

*/

/* 
[1,2,1] = 1번노드(from)에서 2번노드로(to) 가는 비용(cost)이 1
 */
const solution = (N, road, K) => {
  /* 각 노드까지의 최소거리 저장, 노드 번호는 1부터 시작하지만 거리 계산때문에 n+1로 index0번째를 infinity로(더미값) 설정 */
  const shortest = Array(N + 1).fill(Infinity);
  /* 비용 */
  const list = Array.from(Array(N + 1), () => []);

  road.forEach((value) => {
    const [a, b, c] = value;
    list[a].push({ to: b, cost: c });
    list[b].push({ to: a, cost: c });
  });
  /* 초기값 세팅 */
  let queue = [{ to: 1, cost: 0 }];
  shortest[1] = 0;
  while (queue.length) {
    let { to } = queue.pop(); // queue에서 node를 하나 꺼내 to에 할당//현재까지의 최소거리
    console.log("===========> ~ to:", to)

    console.log("===========> ~ list[to]:", list[to])
    list[to].forEach((node) => {
      /* 모든경로 탐색 */
      if (shortest[node.to] > shortest[to] + node.cost) {
        //기존 경로의 값보다 우회하는 값이 더 작으면 해당 값을 저장
        shortest[node.to] = shortest[to] + node.cost;
        queue.push(node);
        console.log("===========> ~ node:", node)
      }
    });
    console.log("queue=========>", queue);
    console.log("shortest=========>", shortest);    
  }
  return shortest.filter((v) => v <= K).length;
};

/* 우선순위 큐(이진 힙) CLASS 생성 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  /* value값 두개를 받아서 values에 삽입 */
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  /* 지우기 기능 */
  dequeue() {
    this.values.shift();
  }
  /* 오름차순 정렬 기능 */
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);

// console.log(
//   solution(
//     6,
//     [
//       [1, 2, 1],
//       [1, 3, 2],
//       [2, 3, 2],
//       [3, 4, 3],
//       [3, 5, 2],
//       [3, 5, 3],
//       [5, 6, 1],
//     ],
//     4
//   )
// );
