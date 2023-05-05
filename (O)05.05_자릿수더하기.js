// 자릿수 더하기
// 89%

// //n	result
// 1234	10
// 930211	16

function solution(n) {

  return (n+"").split('').map((a)=> a=Number(a)).reduce((a,b)=>a+b)

}
console.log(solution(1234));
console.log(solution(930211));
