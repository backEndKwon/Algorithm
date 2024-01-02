/* 
https://leetcode.com/problems/min-stack/
155. Min Stack
Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]
*/
/* 
풀이 방향(내 논리).
일단 클래스 구현해서 하나씩 무식한 방법으로 만들어 보자. 그런다음 시간복잡도를 측정해보자
최소값을 구하는게 있으니까 constructor부분에 stack배열과 min을 계속 비교하면서 담아내는 것도 같이 있으면 시간 단축될듯
*/

let MinStack = function () {
  this.items = [];//공간복잡도 O(N)
  this.min = [];//공간복잡도 O(N)
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.items.push(val);
  //그리고 만약 해당 val가 min의 값보다 작다면 현재 min과 val과 교체
  let minVal = this.min[this.min.length - 1];
  let pushMin = Math.min(this.min.length > 0 ? minVal : val, val);
  this.min.push(pushMin);
};//시간복잡도 : O(1)

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.items.length > 0) {
    //먼저 min에서 없애기
    this.min.pop();
    //그리고 해당 val값이 min의 마지막 값과 같다면 삭제시켜야됨
    this.items.pop();
  }
};//시간복잡도 : O(1)

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
  // return this.items.at(-1)
};//시간복잡도 : O(1)

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};//시간복잡도 : O(1)

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
