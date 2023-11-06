/* 
동물보호소 p.148 3.6

문제 : 
개와 고양이만 수용
가장 오래된 동물부터 입양 가능
linkedlist자료구조 사용해도됨

조건 : 이 자료구조는 enqueue, dequeueAny, dequeueDog, dequeueCat 연산을 지원해야 한다.

전략 : 
기본 queue를 먼저 구현해본다.
예시들기 
만약 dog1, dog2, cat1, dog3, cat2, cat3 순으로 들어왔다면
dog1, dog2, dog3, cat1, cat2, cat3 순으로 나가야 한다.
하지만 사용자가 강아지를 원하면 해당 배열에서 dog3를 먼저 빼내야 한다.

wrtn의 도움을 받음
*/

//링크드리스트를 활용
class Node {
  // 구성 요소는 animal, next값
  constructor(animal) {
    this.animal = animal;
    this.next = null; //항상 새로 들어오는 node는 null로 초기화
  }
}

// dog와 cat둘다의 배열을 가지고 있는 AnimalShelter이용
class AnimalShelter {
  // 구성요소는 dog, cat의 배열
  constructor() {
    this.dogList = null;
    this.catList = null;
  }

  //eunqueue :animal의 type이 dog인지 cat인지 구분후 각각의 배열에 넣어준다.
  enqueue(animal) {
    const newNode = new Node(animal);
    if (animal.type === "dog") {
      //dogList가 비어있으면 newNode를 넣어준다.
      if (this.dogList === null) {
        this.dogList = newNode;
      } else {
        let currentNode = this.dogList;
        //dogList가 비어있지 않으면 마지막 node를 찾아서 newNode를 넣어준다.
        while (currentNode.next) {
          //next가 null일때까지 반복
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    } else if (animal.type === "cat") {
      //catList가 비어있으면 newNode를 넣어준다.
      if (this.catList === null) {
        this.catList = newNode;
      } else {
        //catList가 비어있지 않으면 마지막 node를 찾아서 newNode를 넣어준다.
        let currentNode = this.catList;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    }
  }
  //강아지 빼기
  dequeueDog() {
    if (!this.dogList) {
      return null;
    }
    //맨 앞의 강아지 먼저 내보내기
    const dequeueDog = this.dogList.animal; //{1:{2:{3:{4:null}}}}1>2>3>4
    this.dogList = this.dogList.next;
    return dequeueDog;
  }
  //고양이 빼기
  dequeueCat() {
    if (!this.catList) {
      return null;
    }
    //현재의 animal이 dog로 가고, doglist의 next는 doglist로 바꿔준다.
    const dequeueCat = this.catList.animal; //{1:{2:{3:{4:null}}}}1>2>3>4
    this.catList = this.catList.next;
    return dequeueCat;
  }
  // animal type상관없이 뺄때
  dequeueAny() {
    // 변수 선언 : 배열이 있으면? 그 배열 반환 없으면 null 반환
    const dog = this.dogList ? this.dogList : null;
    const cat = this.catList ? this.catList : null;
    //둘다 비어있으면 null
    if (!dog && !cat) {
      return null;
    } else if (!dog) {
      //dog가 비어있으면 catlist에서 뺌
      return this.dequeueCat();
    } else if (!cat) {
      //cat이 비어있으면 doglist에서 뺌
      return this.dequeueDog();
    } else {
      //둘다 있으면 제일 오래된 동물을 뻄(time)
      return dog.time > cat.time ? this.deququeCat() : this.dequeueDog();
    }
  }
}
const animalShelter = new AnimalShelter();
animalShelter.enqueue({ type: "dog", time: 1 });
animalShelter.enqueue({ type: "dog", time: 2 });
animalShelter.enqueue({ type: "cat", time: 3 });
animalShelter.enqueue({ type: "dog", time: 4 });
animalShelter.enqueue({ type: "cat", time: 5 });
animalShelter.enqueue({ type: "cat", time: 6 });
console.log(animalShelter);
console.log(animalShelter.dequeueAny());
console.log(animalShelter.dequeueDog());
console.log(animalShelter.dequeueCat());
console.log(animalShelter);
// //기본 queue 구현

// class Queue {
//   constructor() {
//     this.queue = [];
//   }
//   enqueue(value) {
//     this.queue.push(value);
//   }
//   dequque() {
// if(this.queue.length === 0){
//   return null;
// }
//     return this.queue.shift();
//   }
//   peek() {
//     return this.queue[0];
//   }
//   isEmpty() {
//     return this.queue.length === 0;
//   }
// }
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.peek());
// console.log(queue.dequque());
// console.log(queue.peek());
// console.log(queue.isEmpty());
