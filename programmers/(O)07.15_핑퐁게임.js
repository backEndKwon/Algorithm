/*
코딩테스트
핑퐁게임

일련의 숫자가 있고, 이 숫자는 1씩 증가, 또는 감소한다. N 번째의 숫자가 있을 시에, 이 숫자가 7의 배수(7, 14, 21)이거나 7이란 숫자를 포함할 시에 (7, 17, 27) 방향을 바꾼다.
즉, 1, 2, 3, 4, 5, 6, [7], 6, 5, 4, 3, 2, 1, [0], 1, 2, [3], 2, 1, 0, [-1], 0, 1
과 같이 숫자는 진행한다. (첫번째 7은 7번째, 두번째 0은 14번째, 세번째 3은 17번째, 네번째 -1은 21번째)

제약조건
- For Loop / While 또는 Array를 쓰지 말 것
- Assignment 를 쓰지 말 것. 즉, 변수 할당을 하지 말 것.
- 스트링을 쓰지 말 것.
*/

// 1. 방향 설정 함수 : 방향 전환할 경우 = true
function turn(n) {
    // 1-1. 7의 배수일 경우 => 방향전환
    if (n % 7 === 0) return true; // 7의 배수 true
  
    // 1-2. 숫자에 7이 포함될 경우 => 방향전환
    const includeSeven = n % 10;
    if (includeSeven === 7) return true;
    // 1-2-1. 71, 171 같은 경우 실행
    // 1-2. 그 외의 경우는 방향 전환 안함
    return n>=30? turn(Math.floor(n/10)) : false
  }
  
  // 2. 핑퐁 계산 함수
  function pingpongLogic(num, start, step, direction) {
    // 2-1. num(x)만큼 실행 되면 start(answer) 반환
    if (num === 1) {
      return start;
    }
    // 2-2. 실행 횟수 기준으로 방향전환
    const nextStep = step+1;
    const ChangeDirection = turn(nextStep)
    // 2-3. true일경우 방향 전환, false일 경우 이전 방향 유지
    const nextDirection = ChangeDirection ? -direction : direction; 
    return pingpongLogic(num - 1, start + direction, nextStep, nextDirection);
  }
  
  // 3. 최종 반환 함수
  function pingpong(x) {
    return pingpongLogic(x, 1, 1, 1);
  }
  
  console.log(pingpong(8));
  console.log(pingpong(22));
  console.log(pingpong(68));
  console.log(pingpong(100));
  