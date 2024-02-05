/* 
p.270
__prototype__ 접근자 프로퍼티와 prototype 프로퍼티는 결국 동일한 프로토타입을 가진다.

모든 객체 => __proto__
생성자함수(화살표,간단 제외) =>  prototype
 */

function Person(name) {
  this.name = name;
}

const me = new Person("kwon");

console.log(me); //actual : Person { name: 'kwon' }
console.log(Person.prototype); // actual : {}
console.log(me.prototype); // actual :undefined
console.log(Person.__proto__); // actual : {}
console.log(me.__proto__); // actual :{}

//같다고 할수 잇나?
console.log(Person.prototype === me.__proto__); // actual: true

//me객체의 생성자 함수는 Person이 맞는지 확인
//여기서 me객체 = 인스턴스, Person = 생성자함수 라고 일컫는다.
console.log(me.constructor === Person); // expected : true, actual: true
