
// 약수의 합
// n=5 1+5 = 6
function solution(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum += i
        };
    } return sum
}

console.log(solution(10))