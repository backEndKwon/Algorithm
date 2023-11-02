/* 단방향, 양방향 링크드 리스트 구현 */

// 단방향 링크드 리스트
// 노드 class 생성
// 단방향에는 해당 값과 next 노드에 대한 정보를 가지고 있는다.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; //초기 세팅
  }
}

// 링크드 리스트 class 생성
// 필요 메서드 : add, print

class LinkedList {
  constructor() {
    this.head = null;
  } // 새로운 링크드리스트 만들때 항상 초기화 되게끔

  // add
  add(value) {
    const newNode = new Node(value);
    console.log("111===========> ~ newNode:", newNode)
    // 만약 head가 null이면 head에 newNode를 넣어준다.
    if (this.head === null) {
      this.head = newNode;
    }
    // head가 null이 아니면 head를 찾아서 next가 null인 노드를 찾아서 넣어준다.
    else {
      let currentNode = this.head;
      console.log("===========> ~ currentNode:", currentNode)
      while (currentNode.next !== null) {
          console.log("===========> ~ currentNode.next:", currentNode.next)
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    console.log("----------------------------------------")
  }
  // print
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
console.log(linkedList.print());
