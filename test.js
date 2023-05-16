//한번만 등장한 문자

//84%
//   s	        result
// "abcabcadc"	  "d"
// "abdc"	      "abcd"
// "hello"	      "eho"

// 전략 : 난이도 0인만큼 한줄 return 최대한 고민해보기
//         이기는 것이 아니라 2=0, 0=5, 5=2 로 생각해보기
function solution(n) {
let answer = []
  n.split('').map((a)=> n.split(a).length===2 ? answer.push(a):false )
return answer.sort().join('')
}

console.log(solution( "abcabcadc"));
console.log(solution("abdc"))
console.log(solution("hello"))

