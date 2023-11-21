//소수 만들기

//소수 = x를 2부터 x-1까지의 수로 나누어 떨어지지 않음
//ex, 13 => 2~12 13/2 13/3 13/4 .....13/12 의 나머지값이 모두 0이 아님

// nums	result
// [1,2,3,4]	1
// [1,2,7,6,4]	4


//전략 => 3자리 합들을 구한다. 그것들을 모두 2부터 x-1까지 수로 나눠 0이 아닌거 반환한다.

// function solution(nums) {


//     let n = []
//     for (let a = 0; a < nums.length; a++) {
//         for (let b = a + 1; b < nums.length; b++) {
//             for (let c = b + 1; c < nums.length; c++) {
//                 n.push(nums[a] + nums[b] + nums[c])
//             }}}
  
//     return n
// }


// function solution(nums) {
//     let myset = new Set(); 
//     for (i=0;i<nums.length; i++) {
//         for (j=i+1;j<nums.length;j++) {
//             for (k=i+2;k<nums.length;k++) {
//                 myset.add(nums[i]+nums[j]+nums[k]); //push는 함수, add는 객체
//     }}}
    
//     let arr = [...myset]
//     let answer = [];
//     for (const a of arr) { //es6에 나온 걸로
//         let check = true;
//         for (let i = 2; i <= Math.sqrt(a); i++) { //sqrt는 계싼 빠르게 하려고 6의 루트값은 2.xx인데  2까지 설정해놓으면 i=3까지 실행하다 break 왜냐하면 2까지만 봐도 충분하기떄문[6, 7,  8, 9, 10] 에서
//           if (a % i === 0) {
//             check = false; //6을넣으면 6%2 =0이므로 check false 그리고 i=3찍고 나서 6 break됨
//             break;
//           }
//         }
//         if (check) {
//           answer.push(a);
//         }
//       }
      

// return answer.length
// }



function solution(n){

for (let a = 0; a<n; a++){
  for (let b = a+1; a<n; a++){
    for (let c = b+1; a<n; a++){

    }
  }  
}


}
console.log(solution([1, 2, 3, 4]))
console.log(solution([1, 2, 7, 6, 4]))