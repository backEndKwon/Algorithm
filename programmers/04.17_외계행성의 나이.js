// // 외계행성의 나이
// age	result
// 23	"cd"
// 51	"fb"
// 100	"baa"

/////다른 사람 풀이  문자열자체도 인덱스 []접근가능
// function solution(age) {
//   return age
//     .toString()
//     .split("")
//     .map((v) => "abcdefghij"[v])
//     .join("");
// }


function solution(age) {

  const alp = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j'
  }
  let ages = age+""
  return ages.split("").map((x)=> alp[x]).join('')

}

console.log(solution(23))
console.log(solution(51))
console.log(solution(100))