//크기가 작은 부분문자열

//68%
// //   t           	p	result
// "3141592"	    "271"	2
// "500220839878"	"7" 	8
// "10203"      	"15"	3
//접근방식
//t를 p.length만큼 잘라서 배열에 넣는다.
//배열 원소값과 p와 비교하여 작거나 같으면 count
function solution(t, p) {
  let count = 0;
  let answer = [];
  for (let i = 0; i < t.length; i++) {
    let tt = t.slice(i, i + p.length);
    if (tt.length === p.length && p >= tt) {
      count++;
    }
  }

  return count;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));
