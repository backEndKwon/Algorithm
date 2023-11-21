/* 
유한소수 판별하기
*/

/* 
a	b	result
7	20	1
11	22	1
12	21	2
 */
/* 
유한소수 = 기약분수 = 분모 2,5 = return 1
무한소수 = return 2

- 약분이 되나?
- 기약분수인가?
- 분모의 소인수분해한 값이 2,5로만 이루어져있는가?
*/
const solution = (a, b) => {
  const gcds = gcd(a, b);
  a = a / gcds;
  b = b / gcds;

  const primes = prime(b);
  return primes.find((x) => x !== 2 && x !== 5) ? 2 : 1;
};

const gcd = (x, y) => {
  return x % y === 0 ? y : gcd(y, x % y);
};
const prime = (n) => {
  let result = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor);
      n = n / divisor;
    } else divisor++;
  }

  return [...new Set(result)];
};
console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
console.log(solution(1, 16));
console.log(solution(1, 1024));
