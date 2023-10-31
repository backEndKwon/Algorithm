/* arrayList 구현해보기 */
/* 필요한 메서드 : add get remove size*/

class ArrayList {
  constructor() {
    this.array = [];
  }

  add(value) {
    this.array.push(value);
  }
  get(index) {
    //index 범위 유효성 확인
    if (index >= 0 && index < this.array.length) {
      return this.array[index];
    } else throw new Error("index out of range");
  }
  remove(index) {
    if (index >= 0 && index < this.array.length) {
      return this.array.splice(index, 1); // 공간복잡도 O(1), 시간복잡도 O(n):
      // splice는 index부터 1개를 제거하고 해당 요소 뒤의 요소들을 모두 앞으로 옮겨야함
    } else throw new Error("index out of range");
  }
  size() {
    return this.array.length;
  }
}

/* 사용예시 */
const al = new ArrayList();
al.add(1);
al.add(2);
al.add(3);
al.add(4);
al.add(5);
console.log(al.get(2)) // 3
console.log(al) // ArrayList { array: [ 1, 2, 3, 4, 5 ] }
console.log(al.array) // [ 1, 2, 3, 4, 5 ]
al.remove(2)
console.log(al.array) // [ 1, 2, 4, 5 ]
console.log(al.size()) // 4
