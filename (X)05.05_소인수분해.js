// 소인수 분해
//68%

// n	result
// 12	[2, 3]
// 17	[17]
// 420	[2, 3, 5, 7]
//전략 : 0으로 나누는값이 있으면 그값을 ANSWR에 넣어준다
삽질
// function solution(num) {
//   let answer = [];
//   let n = num;
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i) && Number.isInteger(n / i)) {
//       answer.push(i);
//       n /= i;
//     }
//   }
//   return answer;
// }

// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i < n; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
function solution(n) {
  let ans = [];
  let num = n;
  for (let i = 2; i <= num; i++) {
      if (isPrime(i) && Number.isInteger(num / i)) {
          ans.push(i);
          num /= i;
      }
  }
  return ans;
}

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
  }
  return true;
}
//키포인트 i.toString().includes('3')
console.log(solution(2));
console.log(solution(17));
console.log(solution(420));
