/* 
16-7
주어진 두수의 최대값을 찾는 메서드, if-else나 비교연산자 사용하지 않고
*/

//코드가독성, 효율성이 좋아지는 건 아니고, 연습용

const findMax = (a, b) => {
//a와 b가 같을때
    if(a===b)return a
// 2/2 5,-3 => 5-(-3) / 
const check = (a-b)/Math.abs(a-b) //check은 -1아니면 1
console.log("👉 ~ check:", check)
return  a*(1+check)/2+b*(1-check)/2 
};

console.log(findMax(-3,3))
console.log(findMax(3,-3))
console.log(findMax(-5,1))
console.log(findMax(-3,-7))