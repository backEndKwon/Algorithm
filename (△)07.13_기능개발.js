/*
기능개발

제한 사항
작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
작업 진도는 100 미만의 자연수입니다.
작업 속도는 100 이하의 자연수입니다.
배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 
예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

progresses	speeds	return
[93, 30, 55]	[1, 30, 5]	[2, 1]
[95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]

전략
day = 100-progresses[i]/speeds[i]
*/
function solution(progresses, speeds) {
  let count = 1;
  const answer = [];
  
  let days = progresses.map((progresses,idx)=>(100 - progresses) / speeds[idx])
  let maxDay = days[0] //day최대값을 처음 0번째로 설정(초기화개념)
  for(let i=1; i<days.length; i++){
    if(days[i]<=maxDay){
      count += 1;
    }else{
      maxDay = days[i]// 최대일자에 현재 일자를 기준으로 바꿔줌
      answer.push(count);
      count = 1
    }
  }
  answer.push(count);

  // for (let i = 0; i < progresses.length; i++) {
  //   let yesterday = (100 - progresses[i]) / speeds[i];
  //   let today = (100 - progresses[i + 1]) / speeds[i + 1];
  //   if (yesterday < today) {
  //     count += 1
  //     answer.push(count);
  //   } else if (yesterday >= today) {
  //     count += 1;
  //   } 
  //   if (progresses[i] === progresses[progresses.length - 1]) {
  //     answer.push(count);
  //   }
  // }
  return answer
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
