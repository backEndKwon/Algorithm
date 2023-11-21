//푸드파이트대회
//68%

// food	result
// [1, 3, 4, 6]	"1223330333221"
// [1, 7, 1, 2]	"111303111"
//food[0] = 1. 짝수원소로 바꿔주기

function solution(food) {
  let left = "";
  for (let i=1; i <food.length; i++) {
    for (let j=0; j < Math.floor(food[i]/2); j++) {
    left += i.toString()
  }}
  let right = left.split('').reverse().join('')
  return left+"0"+right;
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
