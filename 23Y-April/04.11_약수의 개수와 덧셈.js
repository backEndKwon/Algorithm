
//약수의 개수와 덧셈

// //  left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 법으로 표현한 수
// left	right	result
// 13	17	43
// 24	27	52

//전략 : 모든 수 배열 > 약수 구하기 > 각 숫자당 약수 갯수 count후 짝수는 true 홀수는 flase 

//약수 찾기 6이라면 1부터 6까지 다 나눠서 나머지가 0이여야함
function xxx(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (number % i == 0)
            sum++;
    }
    return sum
}
function solution(a, b) {
    let answer = 0;
    for (let i = a; i <= b; i++) {
        xxx(i) % 2 === 0? answer += i : answer -= i
    }
    return answer;

}



console.log(solution(13, 17))

console.log(solution(24, 27))