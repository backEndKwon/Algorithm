/* 
얕은복사
깊은복사
*/

//원본객체
const originalObject = {
  name: "홍길동",
  age: 30,
  hobbies: ["줄넘기", "복싱", "책읽기"],
};

// //얕은복사
// const shallowCopy = Object.assign({}, originalObject);

// shallowCopy.hobbies.push("서핑보드타기");

// 깊은 복사
const deepCopy = JSON.parse(JSON.stringify(originalObject))
deepCopy.hobbies.push("캠핑가기")

console.log("👉 ~ originalObject:", originalObject)
// console.log("👉 ~ shallowCopy:", shallowCopy)
console.log("👉 ~ deepCopy:", deepCopy)
