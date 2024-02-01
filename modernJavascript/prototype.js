/* 
?왜 프로토타입 기반으로 상속을 구현하나?
= 불필요한 중복을 제거하면서 코드 재사용으로 개발 비용을 줄이기 위해서
*/

/* 프로토타입 적용 전 */
// //생성자 함수
// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function () {
//     //원의 넓이 구하는 공식 **2 는 제곱
//     return Math.PI * this.radius ** 2;
//   };
// }
/*
여기서 만약 class문으로 하려면
class Circle{
    constructor(radius){
        this.radius = radius
    }
    getArea(){
        return Math.PI * this.radius ** 2;
    }
} 
 */
// const circle2 = new Circle(2);
// const circle1 = new Circle(1);
// console.log(circle1.getArea()); //expected = 3.1415926535897 , actual = 3.141592
// //그렇다면 getArea는 두개 모두 동일해야 할텐데 동일할까?
// console.log(circle1.getArea === circle2.getArea); // actual : false
// //왜그럴까? 같은 function이 두개 따로 생성되기 때문이다.
// //이렇게 동일한 내용의 메서드는 모든 인스턴스가 공유해서 사용하도록 하는 것이 바람직하다.

//--------------------------------//
// 프로토타입 기반으로 상속 구현 후
function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.getArea = function(){
    return Math.PI * this.radius ** 2
}
const circle2 = new Circle(2);
const circle1 = new Circle(1);

console.log(circle1.getArea === circle2.getArea); // actual : true
