/* 
    해시테이블을 체인을 사용해 충돌을 해결하는 방법
*/

//hashTable, LinkedList, Node 클래스를 구현해야 함

//node 클래스
class Node {
  //하나의 노드는 key와 value를 가지고
  //연결리스트를 구성하기 위해 next도 가지고 있어야함
  constructor(key, value) {
    this.key = key;
    this.value = value;
    //Node초기화(마지막 노드이므로 next는 null)
    this.next = null;
  }
}

class LinkedList {
  //head를 가지고 있음(node를 가리킴)
  constructor() {
    this.head = null;
  }
  //insert(key,value), search(key값을 가진)
  insert(key, value) {
    const newNode = new Node(key, value);
    //만약 head에 값이 없다면, head에 newNode를 넣어줌
    if (this.head === null) {
      this.head = newNode;
    }
    //그렇지 않다면 head에 값이 있기 때문에
    //현재 head를 currentNode로 지정해주고, currentNode의 next가 null일때까지 계속 찾아준다.
    else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        //계속해서 currentNode의 next 노드를 찾아주는 로직을 구현해야함
        currentNode = currentNode.next;
      }
      //currentNode의 next가 null이라면, currentNode의 next에 newNode를 넣어준다.
      currentNode.next = newNode;
    }
  }

  search(key) {
    //해당 key값을 가진 노드를 찾아서 리턴하는 로직
    //head부터 시작해서 key값을 찾아서 리턴
    //currentNode가 null일때 까지 key값을 찾아서 리턴

    //현재 head를 currentNode로 지정해주고
    let currentNode = this.head;
    //currentNode가 null일때까지 반복
    while (currentNode !== null) {
      //만약 currentNode의 key값이 찾는 key값이면 해당 currentNode의 value값을 반환
      if (currentNode.key === key) {
        return currentNode.value;
      }
      //그런게 아니라면, 다음currentNode로 넘어가서 반복
      currentNode = currentNode.next;
    }
    return null; //key값을 찾지 못했을때
  }
  delete(key) {
    let currentNode = this.head; // head를 currentNode로 지정
    let previousNode = null;
    //노드의 형태는 previousNode -> currentNode -> currentNode.next
    //key값을 찾을때까지 반복
    while (currentNode !== null) {
      //만약 currentNode의 key값이 찾는 key값이면
      if (currentNode.key === key) {
        //만약 previousNode가 null이라면, head를 currentNode의 next로 지정
        if (previousNode === null) {
          this.head = currentNode.next;
        }
        //그렇지 않다면, previousNode의 next를 currentNode의 next로 지정
        else {
          previousNode.next = currentNode.next;
        }
        return currentNode.value;
      }
      //그런게 아니라면, 다음currentNode로 넘어가서 반복
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return null; //key값을 찾지 못했을때
  }
}

//hashTable 클래스

class HashTable {
  //hashTable은 얼만큼의 크기의 size를 가질 것인지 인수값으로 받기
  constructor(size) {
    this.size = size;
    //hashTable은 bucket이라는 배열을 가지고 있음
    //bucket은 LinkedList를 가지고 있음
    this.bucket = new Array(size).fill(null).map(() => new LinkedList());
  }

  //hash, insert, search, delete메서드 구현
  hash(key) {
    //key값을 받아서, hashTable의 size로 나눈 나머지를 반환
    //해시함수를 구현
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
    //이렇게 하는이유?
    // 고르고 분산된 해시값을 얻기 위해서(충돌 발생 확률 최소화,테이블 성능향상)
    // this.size로 해당 테이블 크기를 나눈 나머지를 구함으로써, 해시값을 해시 테이블의 인덱스 범위내로 조정 가능
  }
  insert(key, value) {
    //여기서 사용할 인덱스는 hash를 통해 받은 값
    const index = this.hash(key);
    this.bucket[index].insert(key, value);
  }

  search(key) {
    const index = this.hash(key);
    console.log(
      "👉 ~ this.bucket[index].search(key):",
      this.bucket[index].search(key)
    );
    console.log("👉 ~ index:", index);
    return this.bucket[index].search(key);
  }
  delete(key) {
    const index = this.hash(key);
    const deletedValue = this.bucket[index].delete(key);
    return deletedValue;
  }
  
}

const hashTable = new HashTable(10);
hashTable.insert("apple", "사과");
hashTable.insert("banana", "바나나");
hashTable.insert("melon", "멜론");
hashTable.insert("orange", "오렌지");
hashTable.insert("grape", "포도");

console.log(hashTable.search("apple"));
console.log(hashTable.search("melon"));
console.log(hashTable.search("orange"));
console.log(hashTable.search("grape"));
console.log(hashTable.search("banana"));
console.log(hashTable.delete("apple"));
console.log(hashTable.search("apple"));

console.log(hashTable.bucket.map((item) => item.head)); 
// console.log(hashTable.delete("apple"));
