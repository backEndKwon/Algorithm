//한번만 등장한 문자

//84%
//   s	        result
// "abcabcadc"	  "d"
// "abdc"	      "abcd"
// "hello"	      "eho"

// 전략 : 한번만 등장한다고 했기떄문에 배열 길이가 2인경우만 확인하면 될것같다.
function solution(n) {
let answer = []
  n.split('').map((a)=> n.split(a).length===2 ? answer.push(a):false )
return answer.sort().join('')
}

console.log(solution( "abcabcadc"));
console.log(solution("abdc"))
console.log(solution("hello"))

