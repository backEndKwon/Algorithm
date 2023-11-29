/* 
숫자 야구 게임

만들어야 할 메서드

임의의 숫자 발급 - 완료
사용자로부터 숫자 입력받기 - 일단 변수선언으로 사용
해당 숫자 비교
스트라이크, 볼, 아웃 판정
게임 도전 횟수 카운트
맞출 경우 게임 종료

*/

//readline모듈 사용
const readlineSync = require("readline-sync");

//게임을 시작하는 내용을 반환하면서 게임을 시작한다.

// const userNumber = "345";
//중복되지 않는 숫자 3개를 랜덤으로 발급
function getRandomNumber() {
  let result = [];
  while (result.length < 3) {
    let number = Math.floor(Math.random() * 10);
    if (number === 0 && result.length === 0) continue; //0이면 다시 뽑기
    if (result.indexOf(number) === -1) {
      result.push(number);
    }
  }
  return result;
}
// console.log(userNumber.split("").map((x) => parseInt(x)));
// console.log(typeof(getRandomNumber()+""));

// 사용자 입력값과 랜덤숫자 비교
function compareNumber(RandomNumber) {
  let userNumber = readlineSync.question("숫자를 입력하세요: ");

  //randomNumber은 answer임
  let strike = 0; //3strike
  let ball = 0; // 4ball
  let out = 0; // 3out

  userNumber = userNumber.split("").map((x) => parseInt(x));
  console.log("👉 ~ userNumber:", userNumber);
  console.log("👉 ~ RandomNumber:", RandomNumber);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (userNumber[i] === RandomNumber[j]) {
        if (i === j) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }
  //아웃인 경우
  if (strike === 0 && ball === 0) {
    out++;
  }
  console.log(`${userNumber}는 ${strike}스트라이크, ${ball}볼, ${out}아웃`);
  return [strike, ball, out];
}

//게임실행하는 함수
async function game() {
  let count = 0;
  let strike, ball, out;
  const RandomNumber = getRandomNumber();
  console.log("👉 ~ RandomNumber:", RandomNumber);
  // 사용자의 입력을 받기 위해 promise로 래핑된 question 사용
  console.log("숫자 야구 게임을 시작합니다.");
  await new Promise((resolve) => setTimeout(resolve, 0.8 * 1000));
  while (true) {
    [strike, ball, out] = compareNumber(RandomNumber);
    count++;
    console.log(`${count}번째`)
    if (strike === 3) {
      console.log(`축하합니다. ${count}번 만에 맞추셨습니다.`);
      break;
    }
  }
}

game();
