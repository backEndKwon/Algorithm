/* p.162 4.1
노드사이의 경로 
방향그래프가 주어졌을때 두 노드 사이에 경로가 존재하는지 확인하는 알고리즘 구현
*/
/* 

입력값은 어떤 형식일까?
graph, startNode, endNode 3개로 진행 될것이고 그 안에서 계속 반복문을 돌려야될것같다.

언제까지 반복문을 돌려야될까?
startNode와 endNode가 같아질때까지 반복문을 돌려야될것같다.

함수명 혹은 반환값은?
경로가 존재하는지 안하는지에 대한 여부니까 함수이름은 isPath로 하고 boolean값을 반환하면 될것같다.

*/

let count = 0;
const isPath = (graph, startNode, endNode, visited = []) => {
  //   let visited = []; //탐색 끝낸 노드
  visited.push(startNode); //방문한 노드에 startNode를 넣어준다.
  //만약 startNode와 endNode가 같으면 true 반환
  if (startNode === endNode) {
    return count++;
  } else {
    //startNode와 endNode가 같지 않으면 반복문을 돌린다.
    //그런데 반복문을 돌릴려면 isPath인수에 visited를 넣어줘야될 것 같다.
    //그럼 어떤 로직을 넣어야될까?
    //일단 graph에 있는 startNode에 해당하는 node부터 하나씩 순회하기
    for (let neighborNode of graph[startNode]) {
      //만약 neighborNode가 visited에 없으면 계속 이웃 노드들 순회
      if (!visited.includes(neighborNode)) {
        isPath(graph, neighborNode, endNode, visited);
      }
    }
  }
};
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};
isPath(graph, "A", "J");
console.log(count ? true : false);
console.log("👉 ~ count:", count)
