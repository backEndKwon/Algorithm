//종이 자르기

//74%
// 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.// "people"	"peol"
// M	N	result
// 2	2	3
// 2	5	9
// 1	1	0

// 전략 : 규칙으로 접근
function solution(N,M) {
return N*M-1
}

console.log(solution(2,2))
console.log(solution(2,5))
console.log(solution(1,1))
