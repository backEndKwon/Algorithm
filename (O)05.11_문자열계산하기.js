//문자열계싼하기

//78%
// my_string	result
// "3 + 4"	7

// 전략 : 공백으로 나눠서 + - 만 구분하여 계싼
function solution(n) {
  let nn = n.split(" ");
  let nnn = nn.filter((a)=> a!=="+" && a!=="-")


  let answer = Number(nn[0]);
  for (let i = 0; i < nn.length; i++) {
   if(nn[i] === "+"){
      answer += Number(nn[i+1]);
    } else if(nn[i] === "-"){
      answer -= Number(nn[i+1]);
    }
  }

  return answer;
}
console.log(solution("3 - 4"));
console.log(solution("3 + 4"));
console.log(solution("3 - 4 + 16 + 3"));
