//삼각형의 완성조건 (2)
//77%

//가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.

//sides	result
// [1, 2]	1
// [3, 6]	5
// [11, 7]	13
// 가장 긴 변이 11인 경우
// 될 수 있는 나머지 한 변은 5, 6, 7, 8, 9, 10, 11 로 7개입니다.
// 나머지 한 변이 가장 긴 변인 경우
// 될 수 있는 한 변은 12, 13, 14, 15, 16, 17 로 6개입니다.
// 따라서 7 + 6 = 13을 return합니다.

//전략 : 2가지 경우의 수 
//=>하나 : sides에서 max값이 가장긴 변인경우 => max-min+1 ~ max 값까지 length
//=>둘  : sides 합한 값보다 더 긴 변인 경우 => max+1 ~ max+min-1  값까지의 length
function solution(sides) {
  let max = Math.max(...sides)
  let min = Math.min(...sides) 
  let sol1Array = [];
  let sol2Array = [];
  // max값이 sides에 있는경우
  for (let i=max-min+1; i<=max; i++) {
    sol1Array.push(i)
  }
  // 다른 하나의 값이 sides보다 긴 변인 경우
  for (let i=max+1; i<=max+min-1; i++) {
    sol2Array.push(i)
  }
  return sol1Array.length+sol2Array.length;
}
//첫번째 시도 => 실패 :[0],[0,0,0,0,0] 출력. why?
//두번째 시도 => 성공 :  하지만 of와 in 차이 명확히 모르는 상태

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
