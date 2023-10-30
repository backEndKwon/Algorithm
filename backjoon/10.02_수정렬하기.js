/* 2751번 수정렬하기1 */
const fs = require("fs");
// const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const backData = fs.readFileSync("./data.txt").toString().trim().split("\n");
const data = backData.map((x) => x.trim());
const n = data.shift();

/* 
오름차순으로 한줄에 하나씩
일반 console.log는 시간초과로 join으로 출력
 */
const up = data.sort((a, b) => a - b);
console.log(up.join("\n"));

