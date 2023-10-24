/* 
11916번 볼질 */

const fs = require("fs");
// const backData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const backData = fs.readFileSync("./data.txt").toString().trim().split("\n");
const data = backData.map((x) => x.trim());
const inning = Number(data.shift());
console.log("===========> ~ inning:", typeof inning);
const datas = data[0].split(" "); // datas 변수를 올바르게 초기화
console.log("===========> ~ datas:", datas);

/* 
1일 경우 볼
2일 경우 몸에 맞는 공
3일 경우 폭투 , 폭투하면 1,2,루에 있던 주자는 2,3루로 이동
1루주자는 무조건 2루 진출
2루주자는 1루 주자가 있어야만 3루로 갈수있음
3루주자는 1,2 주자가 있어야만 홈으로 갈수있음(이떄 1득점)
폭투도 볼의 한 종류임
*/
/* 
ballcount 세팅
base 배열에 [1루,2루,3루]
1+1+1+1 = 진루
1+1+1+3 = 진루
2 = 진루
fourBall일경우와 strangeBall일 경우로 구분
*/
let base = [0, 0, 0, 0];
let answer = 0;
const main = (datas) => {
  let ballCount = 0;

  for (let i = 0; i < inning; i++) {
    if (datas[i] === "1") {
      ballCount += 1;
      fourBall();
    } else if (datas[i] === "2") {
      ballCount += 1;
      fourBall();
    } else if (datas[i] === "3") {
      ballCount += 1;
      strangeBall();
    }
    if (ballCount === 4) {
      ballCount = 0;
      fourBall();
    }
  }
  return answer;
};
const fourBall = () => {
  if (base[1] === 1) {
    base[2] = 1;
    base[1] = 0;
  } else base[1] = 1;
  if (base[2] === 1&&base[1]===1) {
    base[3] = 1;
    base[2] = 0;
  }
  if (base[3] === 1) {
    if (base[2] === 1 && base[1] === 1) {
      answer += 1;
      base[3] = 0;
    }
  }
};
const strangeBall = () => {
  if (base[1] === 1) {
    base[2] = 1;
    base[1] = 0;
  }
  if (base[2] === 1) {
    base[3] = 1;
    base[2] = 0;
  }
  if (base[3] === 1) {
    answer += 1;
    base[3] = 0;
  }
};

console.log(main(datas));
