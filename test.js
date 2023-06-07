/*
n의 배수 고르기
88%
n	numlist	result
3	[4, 5, 6, 7, 8, 9, 10, 11, 12]	[6, 9, 12]
5	[1, 9, 3, 10, 13, 5]	[10, 5]
12	[2, 100, 120, 600, 12, 12]	[120, 600, 12, 12]
*/

function solution(n,numlist){
    // var answer= []
    // for(let i=1; i<numlist.length; i++){
    //     if(numlist[i]%n === 0){
    //         answer.push(numlist[i])
    //     }
    // }
    
    return numlist.filter(num=>num%n===0)
}

console.log(solution(3,	[4, 5, 6, 7, 8, 9, 10, 11, 12]))
console.log(solution(5,	[1, 9, 3, 10, 13, 5]))
console.log(solution(12,[2, 100, 120, 600, 12, 12]))