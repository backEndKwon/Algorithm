/* 
오버라이딩 예시
*/

class Animal {
  speak() {
    console.log("동물소리를 냅니다.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("월월");
  }
}
class Cat extends Animal {
  speak() {
    console.log("냐옹");
  }
}

const dog = new Dog();
const cat = new Cat();
const animal = new Animal();
animal.speak();
dog.speak();
cat.speak();
