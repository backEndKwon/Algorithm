/* 
1436번 영화감독 숌

[문제이해]
666 1666 2666 3666 ...5666 6660 6661 ~
이런식으로 추가

[접근방법]
무식한 방법으로 666부터 +1 해서 666이 포함되면 answer +1
해당 answer가 n과 같아지면 출력

[시간/공간복잡도]
예상 = bigO(n) 
 */
const fs = require("fs");
const backData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const backData = fs.readFileSync("./data.txt").toString().trim().split("\n");
const n = backData[0]; // type = string
const movie = (n) => {
  let title = 0;
  let max = Infinity;
  let count = 0;
  for (let i = 666; i < max; i++) { // bigO(n)
    if (i.toString().includes(666)) { // bigO(1)
      count++;
    }
    if (count === Number(n)) {// bigO(1)
      title = i;
      break;
    }
  }
  return title;
};
// const movie = (n) => {
//   console.log("===========> ~ n:", n.toString())
//   return (1666).toString().includes(666);
// };
console.log(movie(n));
