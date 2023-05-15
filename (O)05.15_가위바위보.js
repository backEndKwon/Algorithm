//가위바위보

//88%
// 가위 2, 바위 0 보 5
// rsp	result
// "2"	"0"
// "205"	"052"
// 주어지는 값은 문자열

// 전략 : 난이도 0인만큼 한줄 return 최대한 고민해보기
//         이기는 것이 아니라 2=0, 0=5, 5=2 로 생각해보기
function solution(n) {
return String(n.split('').map((a)=>a==="2"?0 : a==="0"? 5 : 2).join(''))
}

//다른사람 풀이 객체형
//개념은 똑같다 2는 0 0은 5 로 대칭
function solution(n){
  let arr = {
    2:0,
    0:5,
    5:2
  }
  let answer = [...n].map((x)=>arr[x]).join('')
}
console.log(solution( "2"));
console.log(solution("205"))

