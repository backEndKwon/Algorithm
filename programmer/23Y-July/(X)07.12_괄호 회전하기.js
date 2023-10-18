/*
괄호 회전하기

lv2
64%


- 제한 사항 -
s의 길이는 1 이상 1,000 이하입니다.

- 입출력 예 - 
s	result
"[](){}"	3
"}]()[{"	2
"[)(]"	0
"}}}"	0

전략
미리 세트 세팅
[ 뒤에 ]는 홀수번째에 나와야함, 1,3,5 ... 2n-1
스택 구조(LIFO) - pop
*/
function solution(s) {
  const sLeng = s.length;
  //가장 먼저 예측 가능한 범위 = s.length 홀수일 경우
  if (sLeng % 2 === 1) return 0;
  let answer = 0;

  for (let i = 0; i < sLeng; i++) {
    let rotate_text = s.slice(i) + s.slice(0, i); //slice(i) = 문자열 s에서 i번째 이상부터 끝까지의 문자열을 자름 / slice(0,i)는 처음부터 i번째까지 자름
    const stack = []; //스택 세팅(last in first out) - 맨 끝, 최신만 비교하면 되기 떄문
    let check = true; //전문용어로 flag라고 함 
    for (let n of rotate_text) {
      if (n === "(" || n === "{" || n === "[") stack.push(n);
      else {
        const bracket = stack.pop();
        if (n === ")" && bracket === "(") continue;//현재 뽑은게 )이면서 stack의 최신값이 (인가?
        if (n === "}" && bracket === "{") continue;
        if (n === "]" && bracket === "[") continue;
        check = false;//위의 3가지 경우 모두 아닐경우(즉, 괄호가 올바르지 않을 경우) count=0으로 할당한 후 break처리됨
        break;
      }
    }
    if (check) answer++;
  }

  return answer;
}



console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
