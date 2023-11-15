/* 
에라토스테네스의 체

방식
1. 2부터 n까지 수 중 가장 작은 수 = 2
2. 2의 배수를 모두 지운다.
3. 그 다음 가장 작은 수 = 3
4. 3의 배수를 모두 지운다.
5. 그 다음 가장 작은 수 = 5
6. 5의 배수를 모두 지운다. 
 위의 방식 반복
*/
// 기본적으로 n까지 몇개의 소수가 있는지 구하는 방식

const input = 50000; // 5까지의 소수갯수는 2,3,5 3개
const eratosthenes = (n) => {
  // 1. 2부터 n까지의 수(대신 true)를 배열에 넣기

  const arr = new Array(n + 1).fill(true); // O(n)

  arr[0] = arr[1] = false; // 0,1은 소수가 아니므로 false로 바꾸기
  // 2. 2부터 시작해서 그 배수들을 모두 지우기
  for (let i = 2; i * i <= n; i++) { // O(nlog(log(n)))
    if (arr[i]) {
      // 2-1. 만약 arr[i]가 true라면 false로 바꾸기
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  // console.log("👉 ~ arr:", arr);
  // 3. true인 것들의 갯수를 세기
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) count++;
  }
  return count;
};
console.log(eratosthenes(input));
