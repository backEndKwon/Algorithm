/* 
dfs구현

예제값은 어떤 형식일까?
각 노드마다 연결된 노드들을 쭉 나열 하는 형식
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};


*/

const DFS = (graph, startNode) => {
  const visited = []; //탐색 끝낸 노드
  let queue = []; // 탐색 예정 노드

  //우선 startNode를 queue에 넣는다.
  queue.push(startNode);
  //queue가 0이 될때까지 반복
  while (queue.length !== 0) {
    //탐색 예정인 queue에서 노드 하나를 꺼낸다.
    let node = queue.shift();
    //그 꺼낸 노드가 visited에 없으면 visited에 넣는다.
    if (!visited.includes(node)) {
      visited.push(node);
      //그다음 queue는(방문예정) 그래프에서 꺼낸 노드에 연결된 노드로 세팅
      //순서주의
      queue = [...graph[node], ...queue];
    }
  }return visited
};
// const graph = {
//     '0': ['1', '2', '4'],
//     '1': ['0', '5'],
//     '2': ['0', '5'],
//     '3': ['4'],
//     '4': ['0', '3'],
//     '5': ['1', '2']
// };
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
console.log(DFS(graph, 'A'));
