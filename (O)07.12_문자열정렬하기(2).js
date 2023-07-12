/*
lv0
문자열 정렬하기 (2)

my_string	result
"Bcad"	"abcd"
"heLLo"	"ehllo"
"Python"	"hnopty"

전략
문자열을 개별 원소로 분리 = [...문자열]
숫자열을 개별 원소로 분리(문자로 바꾼후 진행) = (num+'').split(')
*/

function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
}
console.log(solution("Bcad"));
console.log(solution("heLLo"));
console.log(solution("Python"));
