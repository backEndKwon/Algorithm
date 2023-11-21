/* 
이진 변환 반복하기
70129

s	result
"110010101001"	[3,8]
"01110"	[3,3]
"1111111"	[4,1]

회차	이진 변환 이전	제거할 0의 개수	0 제거 후 길이	이진 변환 결과
1	"110010101001"	6	6	"110"
2	"110"	1	2	"10"
3	"10"	1	1	"1"
 */

/* 재귀함수 세팅
재귀함수 카운팅 , 0 갯수 카운팅 
*/

const solution = (s) => {
  let count = 0;
  let zeroCountResult = 0;
  while (s !== "1") {
    const { makeOnlyOne, deleteZero } = settingZero(s);
    // console.log("===========> ~ zeroCount:", zeroCount)
    zeroCountResult += deleteZero;
    s = translateBinary(makeOnlyOne);
    count += 1;
  }
  return [count, zeroCountResult];
};
/* 0 제거 및 0 갯수 카운트, 0 제거후 길이 반환 */
const settingZero = (s) => {
  const x = s.split("");
  let deleteZero = 0;
  let makeOnlyOne = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "0") {
      deleteZero += 1;
    } else {
      makeOnlyOne += 1;
    }
  }
  return { makeOnlyOne, deleteZero };
};
/* 해당 oneCount로 이진변환하기 */
const translateBinary = (oneCount) => {
  let binary = "";
  while (oneCount !== 0) {
    if (oneCount % 2 === 1) {
      binary += "1";
    } else if (oneCount % 2 === 0) {
      binary += "0";
    }
    oneCount = Math.floor(oneCount / 2);
  }
  const result = binary.split("").reverse().join("");
  return result;
};

console.log(solution("110010101001")); //[3,8]
console.log(solution("01110")); //[3,3]
