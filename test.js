//중복된 문자 제거

//84%
//my_string	result
// "people"	"peol"
// "We are the world"	"We arthwold"

// 전략 : new Set 상기시키기
function solution(s) {
return [...new Set(s.split(""))].join('')
}

console.log(solution("people"))
console.log(solution("We are the world"))
