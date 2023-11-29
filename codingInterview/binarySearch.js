/* 이진탐색 연습 */

/* 
원소 x에 대한 index 값을 반환하는 함수
x가 중간에 위치한 값보다 작으면 왼쪽 절반 탐색, 크면 오른쪽 절반탐색
부분배열의 크기가 0이될때까지 반복

*/

function binarySearch(arr, x) {
  let right = arr.length - 1;
  console.log("👉 ~ right:", right);
  let left = 0;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    console.log("👉 ~ mid:", mid);
    if (arr[mid] === x) return mid;
    if (arr[mid] > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 2)); //2
