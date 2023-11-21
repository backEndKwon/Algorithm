//배열의 유사도

// // s1	s2	result
// ["a", "b", "c"]["com", "b", "d", "p", "c"]
// ["n", "omg"]	["m", "dot"]	0
// //이건 실패
// function solution(s1, s2) {
//   let count = 0;
 
//  for(let i = 0; i<s1.length; i++){
//   s1.map((x) => s2[i].includes(x)? count++ : 0);
// }return count
// }
console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); //11
console.log(solution(["n", "omg"], ["m", "dot"])); //120
//1차풀이
// function solution(s1, s2) {
//   let count = 0 ;
//   for (let i = 0; i < s1.length; i++) {
//     for (let j = 0; j < s2.length; j++) {

//       if(s1[i]===s2[j]){
//         count++;
//       }

//     }
//   }return count
// }
