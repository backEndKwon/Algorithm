//최빈값 구하기

// const counting  = (arr, el) => {
//   let result = 0 ;
//   for(const x of arr){
//     if(x === el) result ++;
//   }return result
// }

// function solution(a) {
//   a.sort()
//   let answer= []
// for(let i = 0 ; i<a.length ; i++){
//   answer.push(counting(a, i));
// }

// if(answer.length===1){
//   return 1
// }else if(answer.indexOf(Math.max(...answer))===answer.lastIndexOf(Math.max(...answer))){
//   return Math.max(...answer)
// }else if(answer.indexOf(Math.max(...answer))!==answer.lastIndexOf(Math.max(...answer))){
//   return -1}




// }

console.log(solution([1, 2, 3, 3, 3, 4])) //3
console.log(solution([1, 1, 2, 2])) //-1
console.log(solution([1])) //1
//[ 0, 1, 1, 3, 1, 0 ]
//[ 0, 2, 2, 0 ]
// [ 0 ]

function solution(array) {
  // array의 최댓값만큼의 길이를 가진 새로운 배열 생성
  let newArray = new Array(Math.max(...array)+1).fill(0);
  // array 반복문을 통해, 해당 값에 해당하는 index의 값 += 1
  for (let i = 0; i < array.length; i++) {
      newArray[array[i]] += 1
  }
  // newArray의 최댓값에 해당 하는 index 출력
  // 만약 indexOf와 lastIndexOf가 지칭하는 값이 같으면, -1 출력 (중복인 경우 확인)
  if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
      return -1
  } else {
      return newArray.indexOf(Math.max(...newArray));
  };
}
