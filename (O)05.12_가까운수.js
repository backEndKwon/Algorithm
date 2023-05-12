//가까운 수
//84%

// array	     n	result
// [3, 10, 28]	20	28
// [10, 11, 12]	13	12

// 전략 : N과 뺀 수의 절대값이 가장 작은 값에대한
//INDEX를 구한후 모배열에서 해당 인덱스에 맞는 값을 반환
//가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

function solution(arr, n) {
  let newarr = arr.map((x) => Math.abs(x - n));//[ 17, 10, 8 ]
  let min = Math.min(...newarr);//8
  let close = arr.filter((x,idx)=>newarr[idx]===min)//[ 28 ]//[ 10, 12 ]//[ 1, 1, 1, 1 ]
  return Math.min(...close)
}
console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
console.log(solution([10, 12, 15], 11));
console.log(solution([1, 2, 1,1], 2));
console.log(solution([1, 1, 1,1], 1));

