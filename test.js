/*
점프와 순간 이동

lv2



- 제한 사항 -
숫자 N: 1 이상 10억 이하의 자연수
숫자 K: 1 이상의 자연수

- 입출력 예 - 
N	result
5	2
6	2
5000	5

전략
Hint = 순간이동= 2배수에만 존재 가능, 이동한 지점이 홀수? = 점프했다, 점프는 홀수, 짝수다 있을 수도 
*/
function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      --n;
      answer++;
    }
  }
  return answer;
}
//--다른사람풀이 이진수 접근--//미쳤다...
function solution(n) {
  if (n === 1) return 1;
  const array = Array.from(n.toString(2)); //Array.from은 문자열을 다 나눠서 배열로 만듬
  return array.reduce((a, b) => +a + +b);
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
