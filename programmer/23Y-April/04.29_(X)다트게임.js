//04.29_(X)다트게임
//kakao blind test
// 예제	dartResult	answer	설명
// 1	1S2D*3T	        37	11 * 2 + 22 * 2 + 33
// 2	1D2S#10S	       9	12 + 21 * (-1) + 101
// 3	1D2S0T	        3	12 + 21 + 03
// 4	1S*2T*3S	    23	11 * 2 * 2 + 23 * 2 + 31
// 5	1D#2S*3S	    5	12 * (-1) * 2 + 21 * 2 + 31
// 6	1T2D3D#	    -4	13 + 22 + 32 * (-1)
// 7	1D2S3T* 	59	12 + 21 * 2 + 33 * 2
//총 3번 던짐=기회점수0-10점=s1제곱d2제곱t3제곱 = *은 (전점수+해당점수)*2배,#은 해당점수 마이너스 = **중첩가능 *#중첩가능
// //구조 점수/보너스/옵션(0,*,#)

function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };
  //1S2D
  let darts = dartResult.match(/\d{1,}[S|D|T][*|#]?/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) {
      darts[i - 1] *= options["*"];
    }

    darts[i].push(score);
  }
  return darts;
}

//실패
// function solution(num) {

//     let x = 0;
//   let answer = []; // 1세트당 점수 * 3개
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] >= 0 && num[i] <= 9) {
//       if (num[i] === 1 && num[i + 1] === 0) {
//         x = 10;
//         i++;
//       } else {
//         x = num[i];//해당 값을 가지고 answer에 넣지않고 서비스점수 계산
//       }
//     } else if (num[i] === "S") {
//       answer.push(x);
//     } else if (num[i] === "D") {
//       answer.push(Math.pow(x, 2));
//     } else if (num[i] === "T") {
//       answer.push(Math.pow(x, 3));
//     } else if (num[i] === "*") {
//       answer[answer.length - 1] *= 2;
//       answer[answer.length - 2] *= 2;
//     } else if (num[i] === "#") {
//       answer[answer.length - 1] *= -1;
//     }
//   }
//   let a = 0;
//   for (let i = 0; i < answer.length; i++) {
//     a += Number(answer[i]);
//   }
//   return a;
// }

// function solution(num) {
//   const bouns = {
//     S: 1,
//     D: 2,
//     T: 3,
//   };//check
// let answer= [];
// for (let i=0; i<num.length; i++ ){

// answer.push(Math.pow(num[2*i+2],bouns.num[2*i+1]))}
// return answer
// }

console.log(solution("1S2D3T"));

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
