//2차원으로 만들기
//84%

//num_list	n	result
// [1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]
// [100, 95, 2, 4, 5, 6, 18, 33, 948]	3	[[100, 95, 2], [4, 5, 6], [18, 33, 948]]

//전략 : substr or slice
//=>하나 : i=0부터n 까지 i+n부터 n+n까지 컷
function solution(num, n) {
  let answer = [];
  for (let i = 0; i < num.length / n; i++) {
    answer.push(num.slice(i * n, i * n + n));
  }
  return answer;
}

//다른 사람 풀이
//전략 : splice(시작인덱스,몇개의 값을 삭제?,추가할 인자 값, 추가할 인자값 ++++) => 해당 요소 삭제
while(num.length){
  answer.push(splice(0,n))
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(solution([3, 6]));
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
