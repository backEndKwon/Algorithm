/* 
3067번 Coins
 */
const fs = require("fs");
// const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const backData = fs.readFileSync("./data.txt").toString().trim().split("\n");
const data = backData.map((x) => x.trim());
const n = data.shift();

/* 
접근방향
코인별로 for문을 돌리기?
힌트 : dp배열 만들어보기

*/
for (let i = 0; i < n; ++i) {
  const N = Number(data.shift());
  const coins = data.shift().split(" ").map(Number);
  const price = Number(data.shift());

  let dp = Array(price + 1).fill(0);
  //price 만큼 배열을 만든 후 0으로 채움
  //dp[5] = 3 : 5원을 만드는 경우의 수는 3가지
  dp[0] = 1;
  //dp[0] = 1 : 어떠한 동전도 선택하지않아 0원을 만드는 경우의 수는 1가지

  for (let j = 0; j < N; j++) {
    for (let k = coins[j]; k <= price; k++) {
      dp[k] += dp[k - coins[j]];
    }
  }
  console.log(dp[price]);
}
