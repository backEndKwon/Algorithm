/* 

p.266  16-9
덧셈만을 이용한 메서드 연산자 구현
*/

class Calculator {
  //덧셈
  add(a, b) {
    return a + b;
  }
  //뺄셈
  subtract(a, b) {
    return a + -b;
  }
  //곱셈
  multiply(a, b) {
    //3*2 => 3을 2번 더한거
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      a > 0 ? (result += a) : (result -= a);
    }
    return b < 0 ? -result : result;
  }

  //나눗셈
  divide(a, b) {
    //b=0일 경우 나누지 못함
    if (b === 0) return "0은 나눌 수 없습니다.";
    if (a === 0) return 0;
    //3,2
    /* 나누기? 3/2 = 1...1  b*몫+나머지 값 = a */
    let aa = Math.abs(a);
    let bb = Math.abs(b);
    let result = 0;
    while (aa >= bb) {
        aa = this.subtract(aa, bb);
        result = this.add(result, 1);
        console.log("👉 ~ result:", result)
    }
    // 둘다 음수일경우, 한쪽만 음수일경우
    return (a < 0 && b < 0) || (a > 0 && b > 0) ? result : -result;
  }
}

const calculator = new Calculator();
console.log(calculator.multiply(2, -3));
console.log(calculator.divide(5, -2));
