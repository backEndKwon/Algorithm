//최댓값최솟값


// s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
// s	return
// "1 2 3 4"	"1 4"
// "-1 -2 -3 -4"	"-4 -1"
// "-1 -1"	"-1 -1"

function solution(s) {
    // s.split(" ");//keypoint1, [ '1', '2', '3', '4' ]

    let maxs = Math.max(...s.split(" "));
    let mins = Math.min(...s.split(" "))
    let answer = [mins,maxs].join(" ")

    return answer;

    // return Math.min(...arr)+' '+Math.max(...arr); //이런 답도 가능
}

console.log(solution("1 2 3 4"))
console.log(solution( "-1 -2 -3 -4"))
console.log(solution("-1 -1"))