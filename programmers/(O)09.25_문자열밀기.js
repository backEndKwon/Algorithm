/* 문자열 밀기 72% */

// 문자열 길이 l 만큼 민 단어들을 배열에추가 -> 인수값과 비교
// 우측으로 밀수도 죄측으로 밀수도 있음 단, 무조건 최소값을 구해야됨
/* A	B	result
"hello"	"ohell"	1
"apple"	"elppa"	-1
"atat"	"tata"	1
"abc"	"abc"	0 */

// function solution(a, b) {
//   let aSplit = a.split(""); //split은 문자열 -> 배열로 변환하면서 공백으로 구분
//   const result = [];
//   for (let i = 0; i < a.length; i++) {
//     const last = aSplit.pop(); //pop은 배열의 마지막 요소를 제거하고 그 요소를 반환
//     aSplit.unshift(last); //unshift는 배열의 맨 앞에 새로운 요소를 추가하고, 배열의 길이를 반환
//     result.push(aSplit.join(""));
//   }
//   if (!result.includes(b)) return -1;
//   if (result.includes(b) && result.indexOf(b)+1 === aSplit.length) return 0;
//   return result.indexOf(b) + 1;
// }

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
console.log(solution("abc", "abc"));

//다른사람 풀이
/* 문자열 밀기 72% */

// 문자열 길이 l 만큼 민 단어들을 배열에추가 -> 인수값과 비교
// 우측으로 밀수도 죄측으로 밀수도 있음 단, 무조건 최소값을 구해야됨
/* A	B	result
"hello"	"ohell"	1
"apple"	"elppa"	-1
"atat"	"tata"	1
"abc"	"abc"	0 */

// function solution(a, b) {
//   let aSplit = a.split(""); //split은 문자열 -> 배열로 변환하면서 공백으로 구분
//   const result = [];
//   for (let i = 0; i < a.length; i++) {
//     const last = aSplit.pop(); //pop은 배열의 마지막 요소를 제거하고 그 요소를 반환
//     aSplit.unshift(last); //unshift는 배열의 맨 앞에 새로운 요소를 추가하고, 배열의 길이를 반환
//     result.push(aSplit.join(""));
//   }
//   if (!result.includes(b)) return -1;
//   if (result.includes(b) && result.indexOf(b)+1 === aSplit.length) return 0;
//   return result.indexOf(b) + 1;
// }

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
console.log(solution("abc", "abc"));

//다른사람 풀이
let solution = (a, b) => (b+b).indexOf(a)
// 변형된 값을 이어 붙여서 해당 값에 인수값이 있는지 확인