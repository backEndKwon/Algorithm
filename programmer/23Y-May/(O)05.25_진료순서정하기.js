/*
진료 순서 정하기
83%
정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순
 emergency	                   result
[3, 76, 24]	                 [3, 1, 2]
[1, 2, 3, 4, 5, 6, 7]	  [7, 6, 5, 4, 3, 2, 1]
[30, 10, 23, 6, 100]	      [2, 4, 3, 5, 1]
 */
//전략 : index이용
function solution(emergency) {
  // const Emergency = [...emergency]; //[ 3, 76, 24 ]
  let sortEm = emergency.slice().sort((a, b) => b - a); //[ 76, 24, 3 ]//123 sortEm.indexOf(76)
  return emergency.map((x) => sortEm.indexOf(x) + 1);
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
