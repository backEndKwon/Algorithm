//문자열

//78%
// // A	B	result
// "hello"	"ohell"	1
// "apple"	"elppa"	-1
// "atat"	"tata"	1
// "abc"	"abc"	0

// 전략 : 난이도 0인만큼 한줄 return 최대한 고민해보기
function solution(n) {
  return Number.isInteger(Math.sqrt(n))? 1 :2
}
console.log(solution( "hello"	,"ohell"));
console.log(solution("apple",	"elppa"))
console.log(solution("atat",	"tata"))
console.log(solution("abc",	"abc"));
