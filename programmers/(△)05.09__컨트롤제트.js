//컨트롤제트
//80%

// //s	result
// "1 2 Z 3"	4
// "10 20 30 40"	100
// "10 Z 20 Z 1"	1
// "10 Z 20 Z"	0
// "-1 -2 -3 Z"	-3
//전략 : 공백단위로 원소값 분리 z를 0으로 한 배열 만들어서 다 더하기
//        원래 배열에서 z인덱스-1숫자들 빼주기

//런타임 에러로 실패
// function solution(str) {
//   let str1 = str.split(" "); //문자열
//   let num = str1.map(Number); //숫자열

//   let sum = num.filter((a) => (a !== isNaN ? a : 0)).reduce((a, b) => a + b);
//   let minus1 = [];
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] === "Z") {
//       minus1.push(Number(str1[i - 1]));
//     }
//   }
//   let minus ;
//      if (minus1.length === 0) {
//       minus = 0
//     }else {
//       minus = minus1.reduce((a,b)=>a+b)
//     }
  
//   return sum-minus;
// }

//다른사람 풀이 pop?
z를 찾으면 z앞에 있는 문자열을 배열에서 본인 포함 제외시킴
이 문제를 뺄셈이 아닐 아예 요소를 제외시키는 걸로 접근

function solution(s) {
  let answer = 0;
  s = s.split(' ')
  let num = []
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'Z') {
      num.pop()
    } else num.push(Number(s[i]))
  }
  num.forEach(n => answer += n)
  return answer;
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("-1 -2 -3 Z"));
