/* 
p.174~
소수판별O(sqrt(n))과 에라토스테네스의 체(O(nlog(log(n))) 구현해보기

소수판별
1. 1은 소수가 아니다. 
2. 2부터 n-1까지 모든 자연수로 나누어보고 나누어 떨어지는 수가 하나라도 있으면 소수가 아니다.
3. 2부터 n의 제곱근까지만 나누어보면 된다.

*/

const input = 593;
const isPrime = (n) => {
  // 1이면 무조건 false
  if (n === 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
//시간복잡도 O(루트n)

console.log(isPrime(input));
