//평행
// // [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때,
//  두 직선이 평행이 되는 경우가 있으면 1을 
//  없으면 0을 return 하도록 solution 함수를 완성해보세요.
// dots	result
// [[1, 4], [9, 2], [3, 8], [11, 6]]	1
// [[3, 5], [4, 1], [2, 4], [5, 10]]	0



//접근방식 : 서로다른 두개 뽑아서 x1-x0과 y1-y0이 다른 한쌍의 값과 같으면 평행
//dots의 i번째 와 j(i+1)번째와  한쌍을 이뤄 선 하나 확인
//나머지 값으로 한쌍의 선 하나 확인
//해당값들 평행여부 확인
//절댓값 사용해서 더해야됌
///놓친점 = 나눗셈값이야됌 기울기가 같아야 하니 x/y이 같아야함//2개의 배열끼리 3번만 비교하면됌
function solution(dots) {
    var answer = 0;
  
    function calculation(a, b, c, d) {
      let abDiff, cdDiff;
  
      abDiff = (b[1] - a[1]) / (b[0] - a[0]);
      cdDiff = (d[1] - c[1]) / (d[0] - c[0]);
  
      if (abDiff === cdDiff) {
        answer += 1;
      }
    }
  
    // 1-2, 3-4가 이어졌을 때
    calculation(dots[0], dots[1], dots[2], dots[3]);
  
    // 1-3, 2-4가 이어졌을 때
    calculation(dots[0], dots[2], dots[1], dots[3]);
  
    // 1-4, 2-3가 이어졌을 때
    calculation(dots[0], dots[3], dots[1], dots[2]);
  
    return dots[0]-dots[1];
  }

// //삽질
// function solution(dots) {
//     let x = [];
//     let y = [];
//     for(let i=0; i<dots.length; i++){
//         x.push(dots[i][0])
//         y.push(dots[i][1])
//     }
//     let x1=[];
//     let y1=[];
    
//     for(let i=0; i<dots.length; i++){
//         for(let j=i+1; j<dots.length; j++){
//             x1.push(Math.abs(x[i]-x[j]));//[ 8, 2, 10, 6, 2, 8 ]
//             y1.push(Math.abs(y[i]-y[j]));//[ 2, 4, 2, 6, 4, 2 ]
//         }   
//     }
// let answer1=[];//[ [ 8, 2 ], [ 2, 4 ], [ 10, 2 ], [ 6, 6 ], [ 2, 4 ], [ 8, 2 ] ]
// for(let i=0; i<x1.length; i++){
//         answer1.push([x1[i],y1[i]]);
//     }
// let count = 0;
// for(let i=0; i<answer1.length; i++){
//     for(let j=i+1; j<answer1.length; j++){
//         if(JSON.stringify(answer1[i])===JSON.stringify(answer1[j])){
//             count +=1;
//         };
//     };
// };
// if(count>=1){
// return 1
// }return 0

// }


console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]])) //1
console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]]))//0

