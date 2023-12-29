/* 
17-19
빠진숫자찾기

1부터 차례대로 1씩 증가하는 수의 배열중 딱 하나만 없을 경우 그 값을 찾는 코드를 구현
시간복잡도 O(N) 공간복잡도O(1)로 제한하고
 더나아가 틀린 숫자가 두개라면?
*/
/* 
나의 접근방식.
일단 무식한 방법 : for문을 돌며 i인덱스와 i+1인덱스의 차 를 확인한다.
*/
function findNumber(input) {
  //   for (let i = 0; i < input.length; i++) {
  //     if (input[i + 1] - input[i] !== 1) {
  //       return i + 2;
  //     }
  //   }

  input.forEach((x, i) => {
    if (input[i + 1] - x !== 1) {
      result = i + 2;
    }
  });
  return result;
}
// const input = [1, 2,3,  4, 5, 6, 7, 8, 9, 10, 11, 13];
// console.log(findNumber(input));

function findMissingNumbers(input) { 
    const missingNumbers = [];//공간 O(1)
  
    for (let i = 0; i < input.length - 1; i++) {//시간 O(N)
      const diff = input[i + 1] - input[i];
  
      if (diff !== 1) {
        for (let j = 1; j < diff; j++) {
          missingNumbers.push(input[i] + j);
        }
      }
    }
  
    return missingNumbers;
  }
  const input = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 13];
  console.log(findMissingNumbers(input));  