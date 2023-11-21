// 저주의 숫자 3
//71%
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

// 10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
// 1	1	6	8
// 2	2	7	10
// 3	4	8	11
// 4	5	9	14
// 5	7	10	16

// n	result
// 15	25
// 40	76

//전략 : 3의 배수&&3이 들어간수를 뺸수를 나열하면됌(1부터 100까지)
//10진법은 index로 활용

//13같은애들 어떻게 할까...13 23 43 53  73 83 
function solution(n) {
  let answer = [];
  for (let i = 1; i <= 300; i++) {
    if (i % 3 !== 0 && !i.toString().includes('3') ) {
      answer.push(i);
    }
  }

  return answer[n-1];
}
//키포인트 i.toString().includes('3')
console.log(solution(15));
console.log(solution(40));
