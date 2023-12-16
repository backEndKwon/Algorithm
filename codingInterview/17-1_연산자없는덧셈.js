/* 
17.1
연산자 없이 더하기

전략.
예시로 a=3, b=5라면?
이진수로 변환한다면 a = 011, b=101 => 1000 

올림수까지 생각해야됨


*/
//이진수 더하는 함수

function solution(a, b) {
  //b가 0이 될때까지 진행
  while (b !== 0) {
    let 올림 = a & b; // 둘다 1이면 return 1, 0이면 0
    // xor연산으로 덧셈
    a = a ^ b; //a^b => a와b가 다르면 return 1, 같으면 return 0
    //올림할 값을 다음 비트로 이동해주기
    b = 올림 << 1; //좌측으로 shift 1만큼
  }
  return a;
}
console.log(solution(3, 5));
