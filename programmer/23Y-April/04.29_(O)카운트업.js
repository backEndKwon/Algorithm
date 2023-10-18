//카운트업
//80%
// 정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return
// numbers	              k	result
// start	end	result
// 3	10	[3, 4, 5, 6, 7, 8, 9, 10]
function solution(start, end) {
    let answer = [];
    for(let i = start; i<=end; i++){
        answer.push(i)
    }
    return answer;
}

console.log(solution(3,10))