const fs = require("fs");
const backData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const backData = fs
//   .readFileSync("./backJoon/data.txt")
//   .toString()
//   .trim()
//   .split("\n");
const datas = backData.map((x) => x.trim());
const { first, second } = datas.shift().split(" ");
const solution = (datas) => {
  let answer = [];
  for (const data of datas) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== " ") {
        answer.push(data[i]);
      }
    }
  }
  console.log(answer.sort((a, b) => a - b));
};
console.log(solution(datas));
