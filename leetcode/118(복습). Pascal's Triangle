/* 

pascal's triangle
https://leetcode.com/problems/pascals-triangle/

Given an integer numRows, return the first numRows of Pascal's triangle.


*/

// const generate = (numRows) => {
//   let result = [];
//   //뭔가 이중 for문을 돌면서 result에 하나씩 알맞은 값이 들어가면 될듯
//   for (let i = 0; i < numRows; i++) {
//     let row = []; //여기에 담은 원소값들을 result에 차례대로 넣으면 될듯?
//     //여기 중간에 for문 다시 돌리기
//     for (let j = 0; j <= i; j++) {
//       //일단 맨앞자리 끝자리에 1넣기
//       if (j === 0 || j === i) {
//         row.push(1);
//       } else {
//         //그게 아니라면 덧셈한 값 넣기
//         // 어떤 행의 어떤 값을 덧셈한 값을 넣어야하나..

//         // 그 전값 만약에 [1,1] -> [1,2,1]
//         // row.push(result[i - 1][j] + result[i - 1][j + 1]);//이 로직이 틀렸음
//         /* 
// 하나의 예시를 다시 들어보기
// i=2
// j=0,j=1,j=2까지 가게 될것임 
// 하지만 j=0일경우와 j=2일경우 제외댐
// j=1일경우만 생각해보기
// */
//         row.push(result[i - 1][j-1] + result[i - 1][j]);
//       }
//     }
//     result.push(row);
//   }
//   return result;
// };
// //시간복잡도 = O(N^2) N=numRows


//시간복잡도 효율성 올려보기
const generate = (numRows) => {

    let result = [[1]];

    for (let i = 1; i < numRows; i++) {
        let row = [1];

        for (let j = 1; j < i; j++) {
            row.push(result[i - 1][j - 1] + result[i - 1][j]);
        }

        row.push(1);
        result.push(row);
    }

    return result;
};