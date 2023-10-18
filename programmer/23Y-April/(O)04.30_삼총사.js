//삼총사
// 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사
//           number	          result
// [-2, 3, 0, 2, -5]    	    2
// [-3, -2, -1, 0, 1, 2, 3] 	5
// [-1, 1, -1, 1]	            0

//접근방식: 원소 3개씩 담은 배열 생성=> reduce로 0인값 찾고 counting
function solution(num) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      for (let k = j + 1; k < num.length; k++) {
        if (num[i] + num[j] + num[k] === 0) count++;
      }
    }
  }
  return count;
}

//
console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
