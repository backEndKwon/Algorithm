// 나머지가 1이 되는 수 찾기

// n	result
// 10	3
// 12	11
//나머지 1
function solution(n) {
    for (let i = 1; i < n; i++) {
            if(n%i ===1){return i}
    }
}
console.log(solution(10))
console.log(solution(12))