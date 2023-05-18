//문자열

//78%
// // A	B	result
// "hello"	"ohell"	1
// "apple"	"elppa"	-1
// "atat"	"tata"	1
// "abc"	"abc"	0

// 전략 : a가 어디로갔는지 확인
function solution(A,B) {
return (B+B).indexOf(A)
}
console.log(solution( "hello"	,"ohell"));
console.log(solution("apple",	"elppa")) 
console.log(solution("atat",	"tata"))
console.log(solution("abc",	"abc"));
