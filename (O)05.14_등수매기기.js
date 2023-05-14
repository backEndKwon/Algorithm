//등수매기기
//74%

// 점수 두개 평균점수로 순위 매기기

// score	result
// [[80, 70], [90, 50], [40, 70], [50, 80]]	[1, 2, 4, 3]
// [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]	[4, 4, 6, 2, 2, 1, 7]

//전략 : 평균 필요없이 더한 값에 대한 순위를 찾으면 됨

function solution(score) {
  let sum = [];
  let sumCopy = [];
  for (let x of score) {
    let [eng, math] = x;
    sum.push(eng + math);
    sumCopy.push(eng + math);
  }
  let sumSort = sum.sort((a, b) => b - a);
  let answer = [];
  for (let i = 0; i < sum.length; i++) {
    answer.push(sumSort.indexOf(sumCopy[i]) + 1);
  }
  return answer;
}

다른 풀이
//slice()로 복제해서 나같이 sumCopy를 만들지 않아도 되게끔 구현 가능
function solution(score){
  let sum = score.map((a)=>a[0]+a[1]) // [150, 150,  80, 190, 190, 200, 40 ]
  let sorted = sum.slice().sort((a,b)=>b-a) 
  //sum.slice()하면 정렬안된 sum , slice안하면 정렬된 sum 유지
  //우린 정렬이 안된 socre에서 index를 찾는거니까 slice()해줘야함 
return sum.map((a)=>sorted.indexOf(a)+1)
}




console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
