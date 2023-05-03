//콜라문제

//68%
// a	b 	n	 result
// 2	1	 20	  19 10+5+3+1
// 3	1	 20	  9 (6+2)+(2)+1
// 3  2  20  11 6+4+1
// 4  1  20   6 5+1  
//전략 : 치킨쿠폰 문제와 유사
//a개먹으면 b개 서비스 n개를 먹는다면?
 function solution(a,b,n){
  let answer = 0;
  while(n>=a){
    answer += Math.floor(n/a)*b
    n = n%a+Math.floor(n/a)*b
  }
  return answer
}

console.log(solution(2,1,20));
console.log(solution(3,1,20));
console.log(solution(3,2,20));
