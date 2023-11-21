
/*
숫자찾기 86%

num	k	result
29183	1	3
232443	4	4
123456	7	-1

전략 = 시간복잡도 최소화, 10분이내 컷
*/


function solution(num, k) {
    return (num+'').split("").includes(String(k)) ? (num+'').split("").indexOf(String(k))+1 : -1
}

//--다른사람 풀이--(가독성도 더 좋음)//
function solution(num, k) {
    let ind = (''+num).indexOf(k);
    return ind === -1 ? -1 : ind+1;
}

console.log(solution(29183,1))
console.log(solution(232443,4))
console.log(solution(123456,7))