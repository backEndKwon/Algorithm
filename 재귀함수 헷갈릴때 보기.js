function recursiveFunction(n) {
    if (n <= 0) { // 재귀함수에서의 종료조건
      return;
    }
  
    console.log(`Entering recursiveFunction(${n})`);
    // 현재 함수에서 수행하는 작업
  
    // 다음 호출
    recursiveFunction(n - 1);
  
    console.log(`Exiting recursiveFunction(${n})`);
     // 함수가 스택에서 꺼내지면서 수행하는 작업
  }
  
  recursiveFunction(3);
  