//공던지기
//80%
// 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return
// numbers	              k	result
// [1, 2, 3, 4]	         2	3
// [1, 2, 3, 4, 5, 6]	5	3
// [1, 2, 3]	        3	2

//접근방식
//num의 홀수 번째 2k-1
//keypoint는 num의 길이를 넘었을때 다시 0번째 index부터 세기
// 1.2.3.4~1
function solution(num, k) {
  // num & 2*k-2>num.length
  return num[(2 * k - 2) % num.length];
}

console.log(solution([1, 2, 3, 4], 2));
console.log(solution([1, 2, 3, 4, 5, 6], 5));
console.log(solution([1, 2, 3], 3));
