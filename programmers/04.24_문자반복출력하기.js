//문자반복출력하기

// // my_string	n	result
// "hello"	3	"hhheeellllllooo"

function solution(s,n) {
    
  return s.split('').map((x)=>x.repeat(n)).join('')
  }

console.log(solution("hello",3))//0

