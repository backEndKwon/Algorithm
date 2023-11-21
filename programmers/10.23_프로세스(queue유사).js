/* 
프로세스 
https://school.programmers.co.kr/learn/courses/30/lessons/42587

priorities	location	return
[2, 1, 3, 2]	2	1
[1, 1, 9, 1, 1, 1]	0	5

location  = 2 의 의미는 priorities의 3번째 인덱스
return 의 의미는 3번째 인덱스가 몇번째로 출력되는지

1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
*/
/* 
priority와 index 를 가진 객체배열 생성
-> 
만약 priority가 max값과 일치하는 지 확인
-> true라면? index와 location이 같은지 확인 -> 같다면 answer +1
                                            -> 다르다면 ? 해당 배열에서 객체 제고, answer+1 , max값 재설정
-> false라면? 해당 배열의 객체를 맨 뒤로 보내기
*/
const solution = (priorities, location) => {
    
    let max = Math.max(...priorities);
    console.log("===========> ~ max:", max)
    const prioritiesArray = priorities.map((priority, index) => ({
      priority,
      index,
    }));
    let answer = 0;
    while (prioritiesArray.length !== 0) {
      if (prioritiesArray[0].priority === max) {
        if (prioritiesArray[0].index === location) {
          return answer + 1;
        } else {
          prioritiesArray.shift();
          answer++;
          max = Math.max(...prioritiesArray.map(item => item.priority));
        }
      } else {
        prioritiesArray.push(prioritiesArray.shift());
      }
    }
  };
  

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
/* 
data = {1,0}, {1,1}, {9,2}, {1,3}, {1,4}, {1,5}
queue = {9,2}, {1,3}, {1,4}, {1,5}, {1,0}, {1,1} => 5번째

{2,0}, {1,1}, {3,2}, {2,3}
{3,2}, {2,3}, {2,0}, {1,1} => 1번쨰
*/
