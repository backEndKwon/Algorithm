//369게임
//86%

//3,6,9나올때 카운트 +!

// order	result
// 3	1
// 29423	2

//전략 : 최대한 간결하게 메소드 활용해보기
function solution(n) {
  let num = (n + "").split("");
  let count = 0;
  for (let str of num) {
    if (str === "3" || str === "6" || str === "9") count++;
  }
  return count;
}
//첫번째 시도 => 실패 :[0],[0,0,0,0,0] 출력. why?
//두번째 시도 => 성공 :  하지만 of와 in 차이 명확히 모르는 상태

// #다른 사람 풀이 
// return [...n.toString().matchAll(/[369]/g)].length;;
// => 정규식 /[369]를 통해 찾기
// => string.matchAll(regexp) : string(문자열)에서 regexp(정규식)에 일치한 문자열 """하나당!!!""" 배열로 표현=>[[a],[b]]

console.log(solution(3));
console.log(solution(29423));
