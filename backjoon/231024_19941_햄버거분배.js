/* 
19941번 햄버거 분배
 */

const fs = require("fs");
// const backData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const backData = fs.readFileSync("./data.txt").toString().trim().split("\n");
const data = backData.map((x) => x.trim());
const n = data.shift();
const [N, K] = n.split(" ").map(Number);
let data2 = (data + "").split("");
/* 
해당 p로부터 k만큼 떨어진 곳에 h가 있는지 확인
있다면 해당 p 가 먹은 h를 answer배열에 넣기, shift할 배열은 계속 업데이트 되어야함
없다면 다음 p로 이동
최종 answer.length
*/
const answer = [];
for (let i = 0; i < N; i++) {
  if (data2[i] === "P") {
    for (let j = i - K; j <= i + K; j++) {
      if (data2[j] === "H") {
        answer.push("H");
        data2.splice(j, 1);
      }
    }
  } else {
    continue;
  }
}
console.log(answer.length);
