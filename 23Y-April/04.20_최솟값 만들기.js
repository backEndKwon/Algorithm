//04.20 최솟값 만들기
//각 배열에서 한개 숫자 뽑아 곱하기
//곱한값을 누적으로 더한값이 최소인것

//전략 1. 정렬시키기 a오름. b내림
///2. a의 최솟값 * b의 최댓값(맨뒤)
///3. 그다음 a[i]의 값 *b첫번째값부터
// 1,4,2 124
// 5,3,4 543
function solution(A, B) {
  let a = A.sort((x, y) => y - x);
  let b = B.sort((x, y) => x - y);
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }
  let sum = 0;
  for (let i = 0; i < answer.length; i++) {
    sum += answer[i];
  }
  return sum;
}

console.log(solution([1, 4, 2], [5, 4, 4])); //29
console.log(solution([1, 2], [3, 4])); //10

// A	B	answer
// [1, 4, 2]	[5, 4, 4]	29
// [1,2]	[3,4]	10
