/* 다항식 더하기 70% */
/* 
polynomial	result
"3x + 7 + x"	"4x + 7"
"x + x + x"	"3x"
 */

/* 
추론
- +을 기준으로 split
- 
- 각 요소에 x가 있는지 확인
- 다항식의 상수 = m,  영어x가 있으면 숫자와 x 앞의 값만 더하기 add
- 일반 자연수 = n, x가 없으면 숫자만 더하기 add
*/

const solution = (polynomial) => {
  const poly = polynomial.split(" + ");

  let m = 0;
  let n = 0;
  for (x of poly) {
    if (x.includes("x")) {
      if (x.slice(0, -1) === "") {
        m += 1;
      }
      m += Number(x.slice(0, -1));
    }
    if (!x.includes("x")) {
      n += Number(x);
    }
  }
  if (m > 1 && n === 0) {
    return `${m}x`;
  }
  if (m === 1 && n !== 0) {
    return `x + ${n}`;
  }
  if (m === 1 && n === 0) {
    return `x`;
  }
  if (m !== 0 && n !== 0) {
    return `${m}x + ${n}`;
  }
  if (m === 0 && n !== 0) return `${n}`;
  if (m === 0 && n === 0) return `0`;
};

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));
console.log(solution("x + 5 + 2"));
console.log(solution("x + 1"));
console.log(solution("17x + 5 + 2 + 8x"));
