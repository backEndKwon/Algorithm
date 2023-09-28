// 23.08.27
// 이진수 더하기
// bin1	bin2	result
// "10"	"11"	"101"
// "1001"	"1111"	"11000"

// // (1) 메서드 사용시
// function solution(bin1, bin2) {
//   return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
// }
// console.log(solution("10", "11"));
// console.log(solution("1001", "1111"));

// (2) 메서드 사용하지 않고 구현
// 전략 : 이진수를 십진수로 십진수를 이진수로 구하는 함수 2개를 굳이 만들어보자
function translateBinary(x) {
  // 십진수 -> 이진수
  let binary = "";
  while (x !== 0) {
    if (x % 2 === 1) {
      binary += "1";
    } else if (x % 2 === 0) {
      binary += "0";
    }
    x = Math.floor(x / 2);
  }
  return Number(binary.split("").reverse().join(""));
}

function translateDecimal(x) {
  // 이진수 -> 십진수
  const splitNumber = x.split(""); //[1,0]
  let result = 0;
  splitNumber.reverse().map((item, index) => {
    const addNumber = Math.pow(2, index) * item;
    result += addNumber;
  });
  return Number(result);
}
// console.log(translateBinary("0"))
// console.log(translateDecimal("0"))
function solution(bin1, bin2) {
  return translateBinary(translateDecimal(bin1) + translateDecimal(bin2)).toString();
}
// console.log(solution("10", "11"));
// console.log(solution("1001", "1111"));
// console.log(solution("0", "0"));
// 둘다 0일 경우 오류남
