// 숨어있는 숫자의 덧셈
// 89%

// my_string	result
// "aAb1B2cC34oOp"	10
// "1a2b3c4d123"	16
// 자연수들의 합을 구하라
// 다 나눠 => 숫자만 TRUE => 배열 => 합 
function solution(n) {

  return (n.split('')).filter((value)=> Number(value) >0).map(Number).reduce((a,b)=> a+b)

}
console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123"));
