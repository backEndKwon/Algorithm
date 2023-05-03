// K번째수


//          array	                    commands            	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
// for (let i = 0; i < array.length; i++) {
//     let start = commands[i][0];
//     let end = commands[i][1]
//     let val = array.slice(start, end)
// } return val //=>이 형태는 cal문이 계속 초기화되서 마지막 값만 저장되게끔하는거임
function solution(array, commands) {

    let answer = []
    for (let i = 0; i < commands.length; i++) {

        let [start, end, idx] = commands[i]
        let temp = array.slice(start-1, end)
        temp.sort((a,b)=> a-b)
        answer.push(temp[idx-1])

    } return answer

}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))