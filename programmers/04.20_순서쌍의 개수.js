//순서쌍의 개수

// n	result
// 20	6
// 100	9

//약수들을 배열로 지정 후 2개씩


function solution(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i)
        }
    }//[ 1, 2, 4, 5, 10, 20 ]
    return answer.length
}
    console.log(solution(20))

    console.log(solution(100))