/* 
p.147 - 3.2 스택min
목표 : 모든 기능의 시간복잡도가 O(1)이 되도록 스택을 구현하라.

Math.min은 O(1)이니까 적용시켜도 되지 않을까?

*/
// /* stack class 구현 */
// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(value) {
//     this.stack.push(value);
//   }
//   pop() {
//     this.stack.pop();
//   }
//   peek() {
//     return this.stack[this.stack.length - 1];
//   }
//   min() { // 이렇게 해버리면 공간복잡도는 O(1)이지만 시간복잡도는 O(n)이 된다.
//     return Math.min(...this.stack);
//   }
//   isEmpty() {
//     return this.stack.length === 0;
//   }
//   length() {
//     return this.stack.length;
//   }
// }

/* min값을  시켜주는 stack */
class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(value) {
    this.stack.push(value);
  if(this.minStack.length===0 || value < this.minStack[this.minStack.length-1]){
    this.minStack.push(value);
  }  
  }
  pop() {
    const value = this.stack.pop();
    if(value === this.minStack[this.minStack.length-1]){
      this.minStack.pop();
    }
    return value
  }
  min(){
    return this.minStack[this.minStack.length-1];
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

const stack = new Stack();

stack.push(23);
stack.push(6);
stack.push(8);
stack.push(2);
stack.push(1);
console.log(stack.stack);
stack.pop();
console.log(stack.stack);

console.log("🚀 ~ file: stack-1.js:71 ~ stack.min:", stack.min()); // 2
stack.pop();
console.log("🚀 ~ file: stack-1.js:74 ~ stack.min:", stack.min()); // 6
console.log(stack.peek());
