/* 
bfs구현

예제값은 어떤 형식일까?
const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
0번 노드와 연결된 노드는 1, 2, 4번 노드
1번 노드와 연결된 노드는 0, 5번 노드 ~

방문한 노드와 방문 해야될 노드로 구분
방문해야될 노드가 이제 없으면 종료
방문해야될 노드의 값을 하나씩 꺼내서 그 주변노드들과 이미 꺼냈던 방문해야될 노드의 값들을 계속해서 방문해야될노드배열로 만들어주기
*/
const BFS = (graph, startNode) => {
  let visited = []; //탐색 끝낸 노드
  let queue = []; //탐색 해야될 노드
  queue.push(startNode);
  //queue가 0이 될때까지 반복
  while (queue.length !== 0) {
    console.log("👉 ~ 첫queue:", queue);

    //queue의 첫번째 노드를 꺼내서 visited에 넣기
    let node = queue.shift();
    console.log("👉 ~ node:", node);
    console.log("👉 ~ visited:", visited);

    //만약 visited에 없으면 queue에 있던 node를 visited에 넣기
    if (!visited.includes(node)) {
      //1. visited에 넣기
      visited.push(node);
      //2. queue는 방근 node를 제외한 나머지 노드들로 세팅
      
      //graph[node]의 의미 : queue에서 탐색할 노드를 꺼내고, 그 꺼낸 노드에 연결된 노드들
      queue = [...queue, ...graph[node]]; // 탐색해야될 남은 노드와, 방금 탐색한 노드에 연결된 노드들을 queue에 넣기
      console.log("👉 ~ 안queue:", queue);
    }
    console.log("👉 ~ 밖queue:", queue);
    console.log("------------------------------")
  }
  return visited;
};

// const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const graph={
    'A':['B','C'],
    'B':['A','D'],
    'C':['A','G','H','I'],
    'D':['B','E','F'],
    'E':['D'],
    'F':['D'],
    'G':['C'],
    'H':['C'],
    'I':['C','J'],
    'J':['I']
}
console.log(BFS(graph, "A"));


