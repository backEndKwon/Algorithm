//문자열 내 마음대로 정렬하기
// strings	n	return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]


function solution(s, n) {
    let answer = s.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        if (a[n] === b[n]) {

            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        }
    })
    return answer
}





console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))