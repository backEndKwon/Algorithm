/* 
25918
북극곰은 괄호를 찢어

보자마자 stack

*/
const fs = require("fs");
// const backData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const backData = fs.readFileSync("./data.txt").toString().trim().split("\n");
const data = backData.map((x) => x.trim());
const N = data[0];
const S = data[1];
/* 
기본 스택 구조 =>  일수는 어떻게 체크할 것인가? 
*/

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  length() {
    return this.stack.length;
  }
}

const brackets = S.split("");
const stack = new Stack();
let answer = 0;
for (let i = 0; i < N; i++) {
  if (brackets[i] === "(" && stack.peek() === ")" && !stack.isEmpty()) {
    stack.pop();
  } else if (brackets[i] === "(") {
    stack.push(brackets[i]);
  } else if (brackets[i] === ")" && stack.peek() === "(" && !stack.isEmpty()) {
    stack.pop();
  } else if (brackets[i] === ")") {
    stack.push(brackets[i]);
}
answer = Math.max(stack.length(),answer)
}
if (stack.length() > 0) {
  console.log(-1);
  return -1;
} else {
  console.log(answer);
  return answer;
}
