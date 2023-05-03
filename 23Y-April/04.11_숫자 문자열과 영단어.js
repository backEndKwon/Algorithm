//숫자 문자열과 영단어

// s	                result
// "one4seveneight" 	1478
// "23four5six7"	    234567
// "2three45sixseven"	234567
// "123"	            123
// zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine


function solution(s) {
    let al = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    let answer = s //s값을 answer에 저장한것과 같고
    for (let i = 0; i < al.length; i++) {
        let a = answer.split(al[i]) // answer값은  변경되면서 s값은 유지시켜줄수 있게끔 한거임
        answer = a.join(i)

    } 
    return answer

}

console.log(solution("one4seveneight"))
console.log(solution("23four5six7"))
console.log(solution("2three45sixseven"))

console.log(solution("123"))