/* hashTable class 구현해보기 */

/* 해시테이블은 key-value값으로 객체형식으로 저장 {key:value, key2:value2}  */
/*  필요한 메서드 put, get, remove */

class HashTable {
  constructor() {
    this.table = {};
  }

  // put
  put(key, value) {
    this.table[key] = value;
  }
  //get
  get(key) {
    return this.table[key];
  }
  //remove
  remove(key) {
    delete this.table[key];
  }
}

/* 사용예시 */
const ht = new HashTable();
ht.put('name', 'john');
ht.put('age', 20);
// ht.put('name','cavi')
ht.put('city', 'john');
// console.log(ht.get('age')) // 20
// console.log(ht) // HashTable { table: { name: 'john', age: 20, city: 'seoul' } }
// ht.remove('age')
console.log(ht) // HashTable { table: { name: 'john', city: 'seoul' } }
// console.log(ht.get('age')) // undefined
