//예산
//      d	budget	result
// [1,3,2,5,4]	9	3
// [2,2,3,3]	10	4

function solution(g, b) {
    g.sort((x, y) => x - y)

    let sum = 0
    let count = 0
    for (let i = 0; i < g.length; i++) {
        sum += g[i]
        
        if (sum > b) {
            break;
        }
        count++;
    } return count

}



console.log(solution([1, 3, 2, 5, 4], 9))
console.log(solution([2, 2, 3, 3], 10))