/* 2121번 넷이 놀기 */

const fs = require("fs");
// const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const backData = fs.readFileSync("./data.txt").toString().trim().split("\n");
const data = backData.map((x) => x.trim());
console.log("===========> ~ data:", data);

const top = Number(data.shift());
const [addX, addY] = data.shift().split(" ").map(Number);

let points = new Map(); // 키-값 쌍으로 이루어진 자료구조, 키는 중복되지 않음
console.log("===========> ~ points:", points);
let answer = 0;
data.forEach((element) => {
  const [x, y] = element.split(" ").map(Number);
  points.set(`${x},${y}`);
});

console.log("===========> ~ data:", data);
console.log("===========> ~ points:", points);
for (const item of data) {
  const [x, y] = item.split(" ").map(Number);
  console.log("===========> ~ x,y:", x, y);
  // 밑의 세가지 조건을 만족하면 answer++
  if (!points.has(`${x + addX},${y + addY}`)) continue;
  if (!points.has(`${x},${y + addY}`)) continue;
  if (!points.has(`${x + addX},${y}`)) continue;
  answer++;
}
console.log(answer);
