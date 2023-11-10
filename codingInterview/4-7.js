/* 
문제 : 4-7
순서정하기
프로젝트의 리스트와 프로젝트간의 의존관계가 주어졌을때 프로젝트 수행순서를 찾는 알고리즘 구현
입력:
프로젝트: a, b, c, d, e, f
의존관계: (a, d), (f, b), (b, d), (f, a), (d, c)
출력: f, e, a, b, d, c
*/
/* 
서로 의존하는 관계를
a -> d, f -> b 와같이 표시가 되어야 할 것 같다.

프로젝트가 의존하는 프로젝트들과 프로젝트를 의존하는 프로젝트 구분
hint : 이는 즉, 위상정렬이다.
위상정렬 => 방향그래프의 모든 노드를 방향성에 거스르지 않도록 순서대로 나열하는 것(a->b, b->c라면 a->b->c)
*/

//1.의존관계그래프 생성
//2. 의존선 없는(먼저수행되어야하는)프로젝트는 수행순서리스트에 추가
//3.추가한 프로젝트는 그래프에서 제거, 제거후 의존성이 없어진 프로젝트가 생기면 그걸 먼저 수행순서리스트에 추가
//4. 모든 노드가 수행숭서리스트에 포함될때까지 반복

//프로젝트를 표현하는 class
class Project {
  constructor(name) {
    this.name = name;

    // a가 들어온다면 a는 d에 의존하기 때문에 d를 추가
    this.dependencies = new Set(); //이 프로젝트가 의존하는 프로젝트들
    // 위와 같이 a가 들어온다면 f는 a에 의존하기 떄문에 f를 추가
    this.dependents = new Set(); //이 프로젝트를 의존하는 프로젝트들
  }
}

//1.의존관계그래프 생성
const createGraph = (projects, dependencies) => {
  const graph = new Map();
  console.log("👉 ~ 11graph:", graph);
  //프로젝트를 그래프에 추가
  for (const project of projects) {
    graph.set(project, new Project(project));
  }

  //의존관계를 그래프에 추가
  for (const [project, dependency] of dependencies) {
    graph.get(project).dependencies.add(dependency);
    graph.get(dependency).dependents.add(project);
  }
  console.log("👉 ~ 22graph:", graph);
  return graph;
};
// 수행순서결정
function orderProjects(graph) {
  const order = [];
  //의존성 없는 프로젝트 먼저 저장
  console.log("👉 ~ graph.values():", graph.values())
  const noDependency = Array.from(graph.values()).filter(
    (project) => project.dependencies.size === 0
  );
  noDependency.sort((a, b) => b.name.localeCompare(a.name));

  console.log("👉 ~ noDependency:", noDependency);

  //의존성 있는 애들은 의존성 없는 프로젝트가 없을때 까지 반복
  while (noDependency.length) {
    const project = noDependency.shift(); //의존성 없는 프로젝트 하나를 꺼내서
    console.log("👉 ~ project:", project);
    // 수행순서에 추가
    order.push(project.name);
    //꺼낸 프로젝트를 의존하는 프로젝트들의 의존성에서 제거
    for (let dependent of project.dependents) {
      const dependentProject = graph.get(dependent);
      console.log("👉 ~ dependentProject:", dependentProject);
      dependentProject.dependencies.delete(project.name);
      //의존성 없어진 프로젝트를 noDependency에 추가
      if (dependentProject.dependencies.size === 0) {
        noDependency.push(dependentProject);
      }
    }
  }
  return order;
}

const projects = ["a", "b", "c", "d", "e", "f"];
const dependencies = [
  ["a", "d"],
  ["f", "b"],
  ["b", "d"],
  ["f", "a"],
  ["d", "c"],
];
//그래프 생성
const graph = createGraph(projects, dependencies);
//수행순서결정
const order = orderProjects(graph);
console.log(order); //f, e, a, b, d, c
