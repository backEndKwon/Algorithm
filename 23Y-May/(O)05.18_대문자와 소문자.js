//대문자와 소문자


//88%
//  my_string	result
// "cccCCC"	"CCCccc"
// "abCdEfghIJ"	"ABcDeFGHij"

// 전략 : toUpperCase 배운걸로 풀기.
function solution(n) {
return   n.split('').map((a)=>a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase() ).join('')
}
// 다른사람 풀이:
==> 문자열은 +로 붙일 수 있다
==> answer += c를 시키면서 동시에 c와 c.toLowerCase()에 조건을 달아줄수있다.
function solution(my_string) {
  var answer = '';
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
console.log(solution( "cccCCC"));
console.log(solution("abCdEfghIJ"))

