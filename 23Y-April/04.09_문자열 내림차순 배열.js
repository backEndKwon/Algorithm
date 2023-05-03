//문자열 내림차순으로 배열하기


//문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴

// s	return
// "Zbcdefg"	"gfedcbZ"



function solution(s) {
    return s
      .split("")
      .sort()
      .reverse()
      .join('')
  }
  


console.log(solution("Zbcdefg"))