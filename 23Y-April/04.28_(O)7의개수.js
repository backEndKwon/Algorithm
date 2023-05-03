//7의 개수
//04.28_(O)7의개수
function solution(n) {
  n = (n + "").split(""); //n을 문자열로 변환후 나누기
  let count = 0;
  n.map((x) => (x.includes(7) === true ? (count += 1) : 0));
  return count;
}
console.log(solution([7, 77, 17]));
console.log(solution([10, 9]));
