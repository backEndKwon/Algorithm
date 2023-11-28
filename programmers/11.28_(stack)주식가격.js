/* 
https://school.programmers.co.kr/learn/courses/30/lessons/42584
주식가격
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

prices	return
[1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]
*/

// //시간효율성, 공간효율성 둘다 실패, 일부 예제도 실패
// function solution(prices) {
//   let answer = []; //공간복잡도 O(n)
//   while (prices.length) {
//     //시간복잡도 O(n^2)
//     let price = prices.shift();
//     let count = 0;
//     for (let i = 0; i < prices.length; i++) {
//       if (price <= prices[i]) count++;
//     }
//     answer.push(count);
//   }
//   return answer;
// }
// 키포인트 = 인덱스 - 인덱스는 주식이 떨어진 기간을 나타낼수있다는 점
function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);// 공간복잡도 O(N)
  const stack = [];
  //현재 주식 가격과 스택의 가장 위의 주식가격을 비교해서
  // 더 떨어졌을 경우
  for (let i = 0; i < n; i++) {//시간복잡도 O(n) => while문이 있지만 주가가 떨어졌을 경우에만 실행되므로 O(n)이다.
    //while은 stack의 length가 0이 아닐때까지 반복
    //현재주식가격이 stack의 가장 위의 주식가격보다 커야 주가가 떨어졌다고 보여짐 그러니까 현재주식가격이 stack최상위 가격보다 작을때까지 반복해야됨
    console.log("answer===",answer)

    while (stack.length !== 0 && prices[stack[stack.length - 1]] > prices[i]) {
      //주식의 가격이 떨어졌으니까 answer에 현재 인덱스(i)에서 stack의 가장 위의 인덱스를 뺀 값을 넣어줌
      const top = stack.pop(); //stack에는 인덱스가 들어있음
      console.log("주가하락👉 ~ top:", top)
      console.log("주가하락👉 ~ stack:",stack)

      answer[top] = i - top; //주가가 떨어진 시간
      console.log("👉주가하락 ~ i - top:", i ,top)
      console.log("주가하락answer===",answer)
    }
    //현재 주식가격의 인덱스를 스택에 추가해서 다음 주식가격과 비교할 수 있게 해줌
    stack.push(i);
  }
  // 떨어지지 않았을경우
  while (stack.length !== 0) {
      const top = stack.pop();
      console.log("주가상승👉 ~ top:", top)
      console.log("주가상승👉 ~ stack:",stack)
      console.log("주가상승answer===",answer)

      //answer에 현재 인덱스(i)에서 stack의 가장 위의 인덱스를 뺀 값을 넣어줌
    answer[top] = n - 1 - top;//주가가 떨어지지 않은 시간
  }

  return answer;
}
console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
