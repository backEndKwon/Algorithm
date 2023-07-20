/*
행렬테두리 회전하기
lv2
60%


- 제한 사항 -
rows는 2 이상 100 이하인 자연수입니다.
columns는 2 이상 100 이하인 자연수입니다.
즉, 아무 회전도 하지 않았을 때, i 행 j 열에 있는 숫자는 ((i-1) x columns + j)입니다.
queries의 행의 개수(회전의 개수)는 1 이상 10,000 이하입니다.
1 ≤ x1 < x2 ≤ rows, 1 ≤ y1 < y2 ≤ columns입니다.


- 입출력 예 - 
rows	columns	queries	result
6	6	[[2,2,5,4],[3,3,6,6],[5,1,6,3]]	[8, 10, 25]
3	3	[[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]	[1, 1, 5, 3]
100	97	[[1,1,100,97]]	[1]

전략
*/

function solution(rows, columns, queries) { //[1, 1, 5, 3]
 //배열생성
     let array = []
  for (let i = 1; i <= rows; i++) {
    const temp =[]
    for (let j = 1; j <= columns; j++) {
        temp.push((i - 1) * columns + j);
    }
    array.push(temp)
  }

  //queries 범위 생성
  for(query of queries){
  let [x1, y1, x2, y2] = query;
  return x1
}

  return array
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);
console.log(
  solution(3, 3, [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ])
);
// console.log(solution(100, 97, [[1, 1, 100, 97]]));
