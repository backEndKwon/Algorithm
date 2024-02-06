/* 
확장과 상속
*/

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`hi i'm ${this.name}`);
};


const me = new Person("홍길동")
// me.sayHello()
const parent = {
    sayHo(){
        console.log(`${this.name}이 말한다. say Ho!`)
    }
}
Object.setPrototypeOf(me,parent)
// me.sayHo() // -> 교체 가능
// me.sayHello() // error발생
console.log(me.constructor === Person) // actual:false ,person과의 관계가 끊김
console.log(me.constructor===Object) // actual:true 새로운 Object에 연결됨
//다시 Person.prototype = parent 로 연결을 되돌릴수있음
