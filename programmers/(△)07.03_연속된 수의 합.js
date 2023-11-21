/*
연속된 수의 합
59%

연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 
연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순
1 ≤ num ≤ 100
0 ≤ total ≤ 1000

num	total	result
3	12	[3, 4, 5]
5	15	[1, 2, 3, 4, 5]
4	14	[2, 3, 4, 5]
5	5	[-1, 0, 1, 2, 3]

전략
result로 부터 역으로 생각해보기 result.length=3 result.reduce((a,b)=>a+b)
hint : 
홀수일때(5) : a-2 a-1 a a+1 a+2 = 4a // a>3a>5a>7a>
짝수일때(3) : a-1 a a+1 a+2 = 4a+2 // 2a+1>2*(2a+1)>3*(2a+1)
연속 숫자 덧셈 공식 : total = num*(min+max)/2, 이때 max=min+num-1
*/

///--내 풀이--///
function solution(num, total) {
  //x는 더할 첫 숫자(min)
  x = (2 * total - num * num + num) / (2 * num);
  x = Math.ceil(x);
  const answer = Array.from({ length: num }, (_, i) => x + i);
  return answer;
}
//Array.from()메서드로 새로운 배열 생성, 
//배열 길이는 {length:배열길이}방식으로 임시로 undefined를 배열길이만큼 생성
// _,i에서 _는 현재요소 사용하지 않음을 의미 => 무시해도됨, 가독성을 위해 사용
// x=10, num=5이면 i는 0부터 4까지의 인덱스 값으로 [10, 11, 12, 13, 14]와 같은 배열을 생성
console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));


// ///--내 풀이 틀림--///
// function solution(num, total) {
//   const answer = [];
//   if (num % 2 === 0) {
//     let x = (2*total - num) / (num * 2); //total = (num/2)*(2*x+1)
//     for (let i = 0; i < num - 1; i++) {
//       let a = x + i;
//       let b = x - i - 1;
//       answer.push(a);
//       answer.push(b);
//     }
//   }
//   if (num % 2 === 1) {
//     let x = total/num; //total = num*(x)
//     for (let i = 0; i < num; i++) {
//       let a = x + i;
//       let b = x - i;
//       answer.push(a);
//       answer.push(b);
//     }
//   }
//   return answer.sort((a,b)=>a-b)
// }


