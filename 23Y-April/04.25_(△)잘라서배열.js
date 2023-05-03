//잘라서 배열로 저장하기
//my_str	n	result
// "abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
// "abcdef123"	3	["abc", "def", "123"])

function solution(s, n) {
  s.split("")
  let answer =[]
  for (let i = 0; i < s.length/n; i++) {
    answer.push(s.splice(0,n).join("")) //
  
  }
  
  return answer
}
console.log(solution("abc1Addfggg4556b", 6))//0
console.log(solution("abcdef123",3))//0


