class BiNode {
    constructor(data, node1 = null, node2 = null) {
      this.data = data;
      this.node1 = node1;
      this.node2 = node2;
    }
  }
  
  class BiNodeConverter {
    constructor() {
      this.head = null; // 양방향 연결 리스트의 헤드 노드
      this.tail = null; // 양방향 연결 리스트의 테일 노드
    }
  
    // 이진 탐색 트리를 양방향 연결 리스트로 변환하는 메서드
    convertToLinkedList(root) {
      if (root === null) {
        return null;
      }
  
      // 중위 순회를 통해 이진 탐색 트리를 양방향 연결 리스트로 변환
      this.inOrderTraversal(root);
  
      return this.head;
    }
  
    // 중위 순회를 통한 이진 탐색 트리 순회 및 양방향 연결 리스트로 변환
    inOrderTraversal(node) {
      if (node !== null) {
        this.inOrderTraversal(node.node1);
  
        // 현재 노드를 양방향 연결 리스트에 추가
        this.addNodeToLinkedList(node);
  
        this.inOrderTraversal(node.node2);
      }
    }
  
    // 양방향 연결 리스트에 노드 추가
    addNodeToLinkedList(node) {
      if (this.head === null) {
        // 첫 번째 노드인 경우
        this.head = node;
        this.tail = node;
      } else {
        // 이미 노드가 있는 경우
        this.tail.node2 = node; // 현재 테일 노드의 다음 노드로 추가
        node.node1 = this.tail; // 새로운 노드의 이전 노드로 현재 테일 노드를 지정
        this.tail = node; // 테일 노드를 새로 추가된 노드로 업데이트
      }
    }
  }
  
  // 테스트를 위한 이진 탐색 트리 생성
  const root = new BiNode(4,
    new BiNode(2,
      new BiNode(1),
      new BiNode(3)
    ),
    new BiNode(6,
      new BiNode(5),
      new BiNode(7)
    )
  );
  
  // BiNodeConverter를 사용하여 양방향 연결 리스트로 변환
  const converter = new BiNodeConverter();
  const linkedListHead = converter.convertToLinkedList(root);
  
  // 결과 확인
  let current = linkedListHead;
  while (current !== null) {
    console.log(current.data);
    current = current.node2;
  }
  