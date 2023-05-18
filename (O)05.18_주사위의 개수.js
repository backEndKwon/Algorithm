//주사위의 개수

//88%
//  box	n	result
// [1, 1, 1]	1	1
// [10, 8, 6]	3	12

// 전략 : 빨리 풀기
function solution(box, n) {
  let answer = 1;
  for (let a of box) {
    answer *= Math.floor(a / n);
  }
  return answer;
}
//전략 : 풀이 목적이 아닌 team 목적 : 구조분해 할당
function solution(box,n){
  const [length, high, width] = box;
  return Math.floor(length/2)*Math.floor(high/2)*Math.floor(width/2)*

}



console.log(solution([1, 1, 1], 1));
console.log(solution([10, 8, 6], 3));
