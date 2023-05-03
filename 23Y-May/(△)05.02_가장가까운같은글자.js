//가장 가까운 같은글자8%
//(△)05.02_가장가까운같은글자
//64%
//    n	         result
// "banana"	[-1, -1, -1, 2, 2, 2]
// "foobar"	[-1, -1, 1, -1, -1, -1]

//전략 :  처음 나왔다는걸 어떻게 표현할까? substr로 앞에서부터 잘라서 요소 존재여부비교
//     :  가장 가까운 문자열을 어떻게 표현할까?

function solution(n) {
  let answer = [];
  let check = [];
  for (let i = 0; i < n.length; i++) {
    if (!check.includes(n[i])) {
      answer.push(-1);
      check.push(n[i]);
    } else {
      answer.push(check.length - check.lastIndexOf(n[i]));
      check.push(n[i]);
    }
  }

  return answer;
}

console.log(solution("banana"));
console.log(solution("foobar"));
