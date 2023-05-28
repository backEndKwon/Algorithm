/*
최댓값 만들기(2)
88%%
두수의 곲 최댓값
numbers	result
[1, 2, -3, 4, -5]	15
[0, -31, 24, 10, 1, 9]	240
[10, 20, 30, 5, 5, 20, 5]	600
전략
*/

function solution(numbers) {
  let answer = [];
  for (let num of numbers) {
    for (let i = 1; i <= numbers.length; i++) {
      if (numbers.indexOf(num) !== i) {
        answer.push(num * numbers[i]);
      }
    }
  }
  answer.sort((a, b) => b - a);
  return answer[0];
}
console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
