//문자열 내림차순으로 배열하기


//문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴

// s	return
// "Zbcdefg"	"gfedcbZ"
//알파벳은 sort()를 할 경우, 자동으로 대문자가 먼저 A부터 Z로 정렬되고, 소문자가 a->z 로 정렬된다는 것을 잘 이용했다.

// 이건 숫자
function solution(s) {
    var answer = s.split('').reverse().join('')

    return answer;
}

console.log(solution("12345"))

// 이건 문자
function solution(s) {
    var answer = s.split('').reverse().join('')

    return answer;
}

console.log(solution("Zbcdefg"))