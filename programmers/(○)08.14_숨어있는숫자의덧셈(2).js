/*
숨어있는 숫자의 덧셈 (2)
my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return


my_string	result
"aAb1B2cC34oOp"	37
"1a2b3c4d123Z"	133
*/

function solution(my_string) {

const lowerString = my_string.toLowerCase()
const english = /[a-z]/g
const splitString = lowerString.replace(english, " ").split(" ")


return splitString.map((x) => Number(x)).reduce((acc, cur) => acc + cur, 0)
}

/* 추가 정보 
  = /[^a-z]/g는 영어 소문자가 아닌 것을 찾는다.
  = /[a-z]/g는 영어 소문자를 찾는다.
  = /\D+/g는 숫자가 아닌 것을 찾는다.
  = /g는 전역 검색을 의미한다.
*/

console.log(solution("aAb1B2cC34oOp"))
console.log(solution("1a2b3c4d123Z"))