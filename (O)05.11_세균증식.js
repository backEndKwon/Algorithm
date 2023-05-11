//세균증식
//88%

//처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return
// n	t	result
// 2	10	2048
// 7	15	229,376

// 전략 : 난이도 0인만큼 한줄 return 최대한 고민해보기
// 이전 값의 2배

function solution(n,t) {
  for(let i=0; i<t; i++) n*=2
  return n
}

//첫번째 시도 성공



console.log(solution( 2,10));
console.log(solution(7,15))