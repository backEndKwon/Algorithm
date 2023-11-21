/*
fibonacci(5)
          /           \
  fibonacci(4)     fibonacci(3)
   /        \        /        \
fibonacci(3) fibonacci(2) fibonacci(2) fibonacci(1)
  /    \
fibonacci(2) fibonacci(1)

*/

//동적계획법을 이용한 피보나치 수열 Memoization활용(캐싱)

function fibonacci(x, memo = {}) {
    console.log("-------------------------")
    console.log("👉 ~ memo:", memo);

    console.log("👉 ~ x:", x)
    if (x === 0) return 0;
    if (x === 1) return 1;
    // 이미 계산한 값이 메모에 있다면 그 값을 사용
    if (memo[x]) return memo[x];
    console.log("👉 ~ memo:", memo);

    console.log("👉 ~ memo[x]:", memo[x])
    // 계산한 값을 메모에 저장하고 반환
    memo[x] = fibonacci(x - 1, memo) + fibonacci(x - 2, memo);
    console.log("👉 ~ memo[x]:", memo[x])

    console.log("👉 ~ memo[0]:", memo[0]);
    console.log("👉 ~ memo[1]:", memo[1]);
    console.log("👉 ~ memo[2]:", memo[2]);
    console.log("👉 ~ memo[3]:", memo[3]);
    console.log("-------------------------")
    return memo[x];
  }
  
  console.log(fibonacci(3)); // 출력: 
  /* 
  과정
  f(3) = f(2) + f(1)  // memo[3] = 2
    f(2) = f(1) + f(0) // memo[2] = 1
        f(1) = 1
        f(1) = 1
    f(1) = 1 return 1
  */
  