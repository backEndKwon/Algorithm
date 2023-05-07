// 문자열안에 문자열
// 88%

// str1	str2	result
// "ab6CDE443fgh22iJKlmn1o"	"6CD"	1
// "ppprrrogrammers"	"pppp"	2
// "AbcAbcA"	"AAA"	2"
// 전략 : 최대한 짧고 간결하게, 새로운 메서드 활용
function solution(str1, str2) {
  return str1.includes(str2) ? 1:2
}

//첫번째시도 fail => str1.filter is not a function
//두번째시도 fail => str1.has is not a function
//세번째시도 success
console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(solution("ppprrrogrammers", "pppp"));
console.log(solution("AbcAbcA", "AAA"));
