/* 10845번 큐 */

const fs = require("fs");
// const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const backData = fs.readFileSync("./data.txt").toString().trim().split("\n");
const data = backData.map((x) => x.trim());

/* 
push x = x넣기
pop = 큐에서 가장 앞에있는 수 빼고+출력, 없으면 -1
size = 큐에 들어있는 정수 개수 출력
empty = 비어있으면 1, 아니면 0
front = 가장 앞에 있는 정수 출력, 없으면 -1
back = 가장 뒤에 있는 정수 출력, 없으면 -1
*/

/* 풀이방향 1 = 큐 직접 구현해보면서 익히기 */
/* 풀이방향 2 = 방향1에서 익힌개념으로 활용해서 구현해보기 */

// 풀이방향 1
// queue클래스 선언 -> 그 안에 method 만들기 -> 해당메서드 활용
// 앞의값을 뺀다?shift, 가장 앞의정수?queue[0], 뒤에있는 정수?queue[queue.length-1]
// 15만큼 for문돌리면서 2번째부터의 값들은 string과 number로 구분해야함
class Queue {
  constructor() {
    this.queue = []; //담을 배열
    this.tmpSize = 0; //배열의 size 측정
    this.result = []; //최종 결과값
  }
  push(x) {
    // queue에 x넣고, 배열 사이즈 ++
    this.queue.push(x);
    this.tmpSize++;
  }
  pop() {
    //queue에서 가장 앞에있는 수 빼고+출력, 없으면 -1
    this.tmpSize != 0
      ? this.result.push(this.queue.shift())
      : this.result.push(-1);
    this.tmpSize != 0 ? this.tmpSize-- : 0;
  }
  size() {
    this.result.push(this.tmpSize);
  }
  empty() {
    this.queue.length === 0 ? this.result.push(1) : this.result.push(0);
  }
  front() {
    this.queue.length === 0
      ? this.result.push(-1)
      : this.result.push(this.queue[0]);
  }
  back() {
    this.queue.length === 0
      ? this.result.push(-1)
      : this.result.push(this.queue[this.tmpSize - 1]);
  }
}
const queue = new Queue();

for (let i = 1; i < data.length; i++) {
  const result = data[i].split(" ");
  switch (result[0]) {
    case "push":
      queue.push(result[1]);
      break;
    case "pop":
      queue.pop();
      break;
    case "size":
      queue.size();
      break;
    case "empty":
      queue.empty();
      break;
    case "front":
      queue.front();
      break;
    case "back":
      queue.back();
      break;
  }
}
console.log(queue.result.join("\n"));
