/* 
19941번 햄버거 분배
 */

const fs = require("fs");
// const backData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const backData = fs.readFileSync("./data.txt").toString().trim().split("\n");
const data = backData.map((x) => x.trim());
const n = data.shift();
const [N, K] = n.split(" ").map(Number); // bigO =O(1)
let data2 = (data + "").split(""); // 한글자씩 바꾸기 때문에 bigO = O(n)
/* 
해당 p로부터 k만큼 떨어진 곳에 h가 있는지 확인
있다면 해당 p 가 먹은 h를 answer배열에 넣기=> 배열에서 숫자 증가로 변경
, shift할 배열은 계속 업데이트 되어야함 => SHIFT에서 해당 요소값 문자 바꾸기로 변경
없다면 다음 p로 이동
최종 answer 반환
*/
let answer = 0;
// 전체 시간 복잡도 = O(N*K)
for (let i = 0; i < N; i++) {
  // bigO = O(n) n번의 루프
  if (data2[i] === "P") {
    for (let j = i - K; j <= i + K; j++) {
      // bigO = O(n) n번의 루프k번의 루프
      if (data2[j] === "H") {
        answer += 1;
        data2[j] = "X";
        break; //한번하고 끝내기
      }
    }
  }
}
console.log(answer);
