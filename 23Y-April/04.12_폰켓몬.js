//폰켓몬
//      nums	result
// [3,1,2,3]	2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2
function solution(num) {
  let pocket = [...new Set(num)];
  let pick = num.length / 2;

  if (pocket.length >= pick) {
    return pick;
  } else {
    return pocket.length;
  }
}

console.log(solution([3, 1, 2, 3], 2));
console.log(solution([3, 3, 3, 2, 2, 4], 3));
console.log(solution([3, 3, 3, 2, 2, 2], 2));
