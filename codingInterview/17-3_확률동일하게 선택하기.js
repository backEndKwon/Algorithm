/* 
p.272
17-3

 길이가 n인 배열에서 m개의 원소를 무작위로 추출하는 메서드.
 각 원소가 선택될 확률은 동일하게

 예시, n=5인 배열 let a = [a,b,c,d,e]
 m=2라고 한다면

 (1)무작위로 뽑는 방식?
  --> 확률을 세팅해주기

  for(let i=0; i<m; i++)하면서
  배열 a에 대해서 random index를 넣어주면 될듯
  let randomIndex = ? => Math.Random()*10정도? 해주고
  if(randomIndex>a.length)이라면?
  다시 randomIndex를 뽑아주기 

*/

//일단 (1)의 방법으로

function solution(numbers, m) {
  const result = [];
  let length = numbers.length
  for (let i = 0; i < m; i++) {
    //for문 안에서 진행
    //random값 뽑기
    let randomIndex = makeRandomIndex(length);
    console.log("👉 ~ randomIndex:", randomIndex)
    result.push(numbers[randomIndex]);
  }
  return result;
}
//랜덤인덱스는 함수로 따로 만들어주기
function makeRandomIndex(length) {
  let result = Math.floor(Math.random() * 10);
  console.log("👉 ~ result:", result)
  if (result < length) return result;
  else {
   return makeRandomIndex(length);
  }
  // console.log("👉 ~ Math.random():", Math.floor(Math.random()*10))
}

let numbers = ["a", "b", "c", "d", "e"];
console.log(solution(numbers, 2));
console.log(makeRandomIndex())

/* 
하다보니 선택된 확률을 동일하게 하는 것이 키포인트 이다.
여기서 "선택된 확률을 동일하게 "하려면?

Fisher-Yates 셔플 알고리즘을 사용하면 된다.
골고루 섞이게 하는 알고리즘으로 선택되는 확률을 동일하게 유지시켜줌

*/

function solution(numbers, m) {
    const result = [];
    let shuffledNumbers = numbers.slice(); //numbers복사(셔플을 위해서)
  
    for (let i = 0; i < m; i++) {
      let randomIndex = makeRandomIndex(shuffledNumbers.length);
      console.log("👉 ~ randomIndex:", randomIndex)
      result.push(shuffledNumbers[randomIndex]);
      
      // Fisher-Yates 알고리즘을 사용하여 선택된 원소와 마지막 원소를 교환
      [shuffledNumbers[randomIndex], shuffledNumbers[shuffledNumbers.length - 1]] = [shuffledNumbers[shuffledNumbers.length - 1], shuffledNumbers[randomIndex]];
  
      // 복사해놨던 셔플 배열의 마지막 원소를 제거
      shuffledNumbers.pop();
    }
  
    return result;
  }
  
  function makeRandomIndex(length) {
    return Math.floor(Math.random() * length);
  }
  
  let numbers = ["a", "b", "c", "d", "e"];
  console.log(solution(numbers.slice(), 2));