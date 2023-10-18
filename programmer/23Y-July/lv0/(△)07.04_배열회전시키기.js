/*
배열 회전시키기
87%

정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return

numbers	direction	result
[1, 2, 3]	"right"	[3, 1, 2]
[4, 455, 6, 4, -1, 45, 6]	"left"	[455, 6, 4, -1, 45, 6, 4]

전략
unshift, splice 배열 원소이동
*/


///--gpt 코드개선 버전--///
function solution(numbers, direction) {
  if (direction === "right") {
  numbers.unshift(numbers.pop());
  //pop은 배열의 마지막요소 제거하고 요소 반환
  //unshift는 배열 맨 앞에 추가
  }else{
  numbers.push(numbers.shift());
  //shift는 배열의 첫번째 요소를 제거하고 요소 반환
  //push를 통해 맨 뒤에 추가
  }
  return numbers;
  }
console.log(solution([1, 2, 3], "right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
console.log(solution([1, 2, 3, 4, 5, 6], "right"));

///--내 풀이--실패///
function solution(numbers, direction) {
  let temp = numbers[numbers.length - 1]
  if (direction === "right") {
    numbers.unshift(temp);
    numbers.splice(temp,temp)
    return numbers;
  
    } else {
  let temp1 = numbers[0];
   numbers.shift()
   numbers.splice(temp,temp,temp1)
   return numbers;
  }
}